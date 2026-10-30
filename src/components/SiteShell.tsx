import Link from "next/link";
import { Brand } from "./Brand";
export function SiteHeader() {
 return <header className="site-header"><Link href="/" aria-label="Ir para a página inicial"><Brand/></Link><nav className="main-nav" aria-label="Navegação principal"><Link href="/#sobre">Sobre</Link><Link href="/#atendimento">Atendimentos</Link><Link href="/americana/proteses-dentarias">Americana</Link><Link href="/caconde/odontologia-geral">Caconde</Link></nav><Link href="/#atendimento" className="outline-btn header-cta">Locais de atendimento</Link></header>;
}
export function SiteFooter(){
 return <footer className="site-footer"><Brand inverse/><div><strong>André Ávila · Odontologia</strong><p>Atendimentos em Americana e Caconde · SP</p><small>Protótipo para aprovação. Dados profissionais, endereços e contato pendentes de confirmação.</small></div><Link href="/design-system">Design system / V1 ↗</Link></footer>;
}
