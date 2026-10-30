"use client";
import { useState } from "react";
import Image from "next/image";
export function Brand({ inverse = false }: { inverse?: boolean }) {
  const [loaded, setLoaded] = useState(true);
  return <div className={`brand ${inverse ? "brand-inverse" : ""}`} aria-label="André Ávila Odontologia">
    {loaded ? <Image className="brand-official" src="/brand/assinatura.png" alt="André Ávila Odontologia" width={208} height={73} priority onError={() => setLoaded(false)}/> :
    <div className="brand-pending"><strong>André Ávila</strong><small>ODONTOLOGIA · ARQUIVO ORIGINAL PENDENTE</small></div>}
  </div>;
}
