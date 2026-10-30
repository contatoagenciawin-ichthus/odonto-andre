"use client";
import { useState } from "react";
import Image from "next/image";
export function Portrait() {
 const [available,setAvailable]=useState(true);
 return <div className="portrait-frame">
   {available ? <Image src="/images/andre-retrato.webp" alt="Fotografia do cirurgião-dentista André Ávila" fill priority sizes="(max-width: 720px) 90vw, 40vw" className="portrait-real portrait-headshot" onError={()=>setAvailable(false)}/> :
   <div className="portrait-placeholder" role="img" aria-label="Fotografia real de André Ávila pendente de integração"><span>FOTOGRAFIA DO ANDRÉ</span><small>Arquivo original reservado</small></div>}
 </div>;
}
