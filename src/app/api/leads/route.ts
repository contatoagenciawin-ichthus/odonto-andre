import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/leads";
export const runtime="nodejs";
function json(body:unknown,status:number){return NextResponse.json(body,{status,headers:{"Cache-Control":"no-store"}})}
export async function POST(request:NextRequest){
 const type=request.headers.get("content-type")||"";
 if(!type.includes("application/json")) return json({error:"Tipo de conteúdo inválido"},415);
 const origin=request.headers.get("origin");
 if(origin && origin!==request.nextUrl.origin) return json({error:"Origem não permitida"},403);
 let data:Record<string,unknown>;
 try{data=await request.json()}catch{return json({error:"Dados inválidos"},400)}
 const name=String(data.name||"").trim().replace(/\s+/g," ");
 const phone=String(data.phone||"").replace(/\D/g,"");
 const city=data.city;
 const honeypot=String(data.website||"");
 if(honeypot) return json({error:"Solicitação não aceita"},400);
 if(name.length<2||name.length>100||!/^(?:55)?\d{10,11}$/.test(phone)||(city!=="Americana"&&city!=="Caconde"))return json({error:"Confira nome, telefone e cidade"},422);
 const sourcePage=String(data.sourcePage||"").slice(0,150);
 if(!sourcePage.startsWith("/")||sourcePage.startsWith("//"))return json({error:"Origem inválida"},422);
 const clean=(x:unknown)=>String(x||"").slice(0,120).replace(/[^\w.\- ]/g,"");
 const leadToken=crypto.randomUUID();
 try{await saveLead({name,phone,city,marketingConsent:data.marketingConsent===true,sourcePage,utmSource:clean(data.utmSource),utmMedium:clean(data.utmMedium),utmCampaign:clean(data.utmCampaign),leadToken})}
 catch{return json({error:"Não foi possível registrar. Tente novamente ou use o WhatsApp direto."},503)}
 return json({ok:true,token:leadToken.slice(0,8)},201);
}
