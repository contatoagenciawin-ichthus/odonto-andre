"use client";
import { useEffect, useState, type FormEvent } from "react";
type City="Americana"|"Caconde";
export function LeadForm({ city="Americana", compact=false }:{city?:City;compact?:boolean}){
 const [name,setName]=useState("");const [phone,setPhone]=useState("");const [selected,setSelected]=useState<City>(city);
 const [marketing,setMarketing]=useState(false);const [working,setWorking]=useState(false);const [message,setMessage]=useState("");
 const [tracking,setTracking]=useState<Record<string,string>>({});
 useEffect(()=>{const q=new URLSearchParams(location.search);setTracking({utmSource:q.get("utm_source")||"",utmMedium:q.get("utm_medium")||"",utmCampaign:q.get("utm_campaign")||""})},[]);
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();if(working)return;setWorking(true);setMessage("");
 try{
 const response=await fetch("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,phone,city:selected,marketingConsent:marketing,sourcePage:location.pathname,...tracking,website:""})});
 const result=await response.json();
 if(!response.ok){setMessage(result.error||"Não foi possível registrar.");return}
 const text=`Olá, sou ${name} e gostaria de informações sobre atendimento em ${selected}. Referência: ${result.token}.`;
 if(typeof window!=="undefined") { const w=window as typeof window & {dataLayer?:Record<string,unknown>[]}; w.dataLayer?.push({event:"lead_created",city:selected,channel:"form_to_whatsapp"}); }
 const url=`https://wa.me/5519983155303?text=${encodeURIComponent(text)}`;
 setMessage("Contato registrado. Se o WhatsApp não abrir, use o link abaixo.");
 if(typeof window!=="undefined") { const w=window as typeof window & {dataLayer?:Record<string,unknown>[]}; w.dataLayer?.push({event:"whatsapp_opened",city:selected,channel:"form_to_whatsapp"}); }
 window.location.assign(url);
 }catch{setMessage("Não foi possível conectar. Utilize o botão direto de WhatsApp abaixo.")}
 finally{setWorking(false)}}
 return <form onSubmit={submit} className={`lead-form ${compact?"lead-form-compact":""}`}>
 <label>Seu nome<input required minLength={2} maxLength={100} autoComplete="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Como podemos chamar você?"/></label>
 <label>Seu WhatsApp<input required autoComplete="tel" inputMode="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="(19) 99999-9999"/></label>
 <label>Cidade de atendimento<select value={selected} onChange={e=>setSelected(e.target.value as City)}><option value="Americana">Americana</option><option value="Caconde">Caconde</option></select></label>
 <label className="lead-check"><input type="checkbox" checked={marketing} onChange={e=>setMarketing(e.target.checked)}/><span>Aceito receber comunicações de marketing relacionadas ao atendimento, separadamente da resposta à minha solicitação (opcional).</span></label>
 <button className="btn" type="submit" disabled={working}>{working?"Registrando...":"Continuar pelo WhatsApp"}</button>
 <p className="lead-help" aria-live="polite">{message||"Seu contato será utilizado para responder à solicitação. A autorização de marketing é separada e opcional."}</p>
 <a className="lead-direct" href={`https://wa.me/5519983155303?text=${encodeURIComponent("Olá, gostaria de agendar uma avaliação odontológica em "+selected+".")}`} target="_blank" rel="noopener noreferrer">Prefere conversar sem preencher? Abrir WhatsApp direto ↗</a>
 </form>;
}
