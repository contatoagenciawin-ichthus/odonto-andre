import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteShell";
export default function Americana(){
 return <main className="site-layout"><SiteHeader/><section className="site-hero region-landing americana-landing">
 <div className="site-hero-content"><span className="eyebrow">AMERICANA · SP / PRÓTESES DENTÁRIAS</span><h1>Reabilitar o sorriso começa por entender você.</h1><p>Próteses dentárias e reabilitação oral exigem planejamento, atenção aos detalhes e avaliação individualizada. Conheça a proposta de atendimento do André Ávila em Americana.</p><div className="actions"><Link className="btn" href="#como-funciona">Como funciona a avaliação</Link><Link className="outline-btn" href="/">Conheça André</Link></div></div>
 <div className="editorial-panel"><span className="eyebrow">PRÓTESES E REABILITAÇÃO</span><strong>Função.<br/>Conforto.<br/>Planejamento.</strong><div className="mini-line"/></div></section>
 <section id="como-funciona" className="content-split"><div><span className="eyebrow">ATENDIMENTO INDIVIDUALIZADO</span><h2>O tratamento certo começa com uma avaliação criteriosa.</h2></div><div><p>Na avaliação, o dentista considera as necessidades e condições de saúde bucal de cada paciente. As alternativas de reabilitação e os próximos passos são definidos individualmente, após os exames necessários.</p><p className="annotation">Conteúdo demonstrativo, sujeito a validação clínica e regulatória.</p></div></section>
 <section className="closing-panel"><h2>Quer saber mais sobre o atendimento em Americana?</h2><p>O contato será disponibilizado após a confirmação do WhatsApp e da rotina de agendamentos.</p><span className="pill">Captação ainda não habilitada</span></section><SiteFooter/></main>;
}
