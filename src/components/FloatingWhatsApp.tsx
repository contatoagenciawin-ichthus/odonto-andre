"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function FloatingWhatsAppInner() {
 const pathname=usePathname();
 const params=useSearchParams();
 const city=pathname.startsWith("/caconde")?"Caconde":pathname.startsWith("/americana")?"Americana":null;
 const message=city?`Olá, gostaria de informações sobre o atendimento do André Ávila em ${city}.`:"Olá, gostaria de informações sobre os atendimentos do André Ávila.";
 const href=`https://wa.me/5519983155303?text=${encodeURIComponent(message)}`;
 function track(){
  const w=window as typeof window & {dataLayer?:Array<Record<string,unknown>>};
  w.dataLayer?.push({event:"whatsapp_opened",channel:"floating_button",city:city||"não definida",source_page:pathname,utm_source:params.get("utm_source")||undefined});
 }
 return <a className="floating-whatsapp" href={href} onClick={track} target="_blank" rel="noopener noreferrer" aria-label="Conversar com André Ávila pelo WhatsApp" title="Fale pelo WhatsApp">
 <svg aria-hidden="true" width="29" height="29" viewBox="0 0 32 32" fill="currentColor"><path d="M16 2.5A13.35 13.35 0 0 0 4.58 22.8L2.8 29.2l6.57-1.72A13.5 13.5 0 1 0 16 2.5Zm0 24.55a11.05 11.05 0 0 1-5.62-1.53l-.4-.23-3.89 1.02 1.04-3.78-.26-.42A11.02 11.02 0 1 1 16 27.05Zm6.06-8.22c-.33-.16-1.94-.96-2.24-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.09-.33-.17-1.4-.51-2.67-1.63-.99-.88-1.66-1.97-1.85-2.3-.19-.33-.02-.51.14-.68.15-.15.33-.39.49-.58.17-.19.22-.33.33-.55.11-.22.05-.41-.03-.58-.08-.17-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73 0 1.61 1.18 3.16 1.34 3.38.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.94-.79 2.21-1.56.27-.77.27-1.43.19-1.56-.08-.14-.3-.22-.63-.38Z"/></svg>
 <span>Fale conosco</span></a>;
}
export function FloatingWhatsApp(){return <Suspense fallback={null}><FloatingWhatsAppInner/></Suspense>}
