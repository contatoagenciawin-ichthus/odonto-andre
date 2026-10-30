import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteShell";

export default function Home() {
  return <main className="site-layout">
    <SiteHeader />
    <section className="site-hero">
      <div className="site-hero-content">
        <span className="eyebrow">ANDRÉ ÁVILA · ODONTOLOGIA</span>
        <h1>Experiência para cuidar do seu sorriso, em cada etapa.</h1>
        <p>Atendimento odontológico com atenção individualizada, planejamento e uma conversa clara sobre as possibilidades para sua saúde bucal.</p>
        <div className="actions"><Link className="btn" href="#atendimento">Conheça os atendimentos</Link><Link className="outline-btn" href="#sobre">Sobre André</Link></div>
        <p className="prototype-disclaimer">Protótipo editorial: informações profissionais, imagens e chamadas finais precisam de aprovação.</p>
      </div>
      <div className="portrait-placeholder" role="img" aria-label="Espaço reservado para fotografia real do André Ávila">
        <span>FOTOGRAFIA REAL DO ANDRÉ</span><small>Área reservada para imagem autorizada</small>
      </div>
    </section>
    <section id="sobre" className="content-split">
      <div><span className="eyebrow">CONHEÇA O PROFISSIONAL</span><h2>Uma trajetória dedicada ao cuidado odontológico.</h2></div>
      <div><p>André Ávila reúne experiência clínica e uma proposta de atendimento orientada por escuta, avaliação individual e explicações acessíveis. Nesta seção entraremos com sua trajetória completa e as credenciais verificadas.</p><Link href="/design-system" className="text-link">Conheça a identidade do projeto <span aria-hidden="true">↗</span></Link></div>
    </section>
    <section id="atendimento" className="care-section"><div className="section-heading"><span>ATENDIMENTO EM DUAS CIDADES</span><h2>Encontre a jornada mais adequada para você.</h2></div>
      <div className="region-grid">
        <article className="region-card"><span className="pill">AMERICANA · SP</span><h3>Próteses dentárias e reabilitação oral.</h3><p>Um olhar dedicado às necessidades de quem busca alternativas para recuperar a função e o conforto do sorriso.</p><Link href="/americana/proteses-dentarias">Conheça o atendimento em Americana <span aria-hidden="true">→</span></Link></article>
        <article className="region-card light"><span className="pill">CACONDE · SP</span><h3>Odontologia geral com atenção a você.</h3><p>Cuidados odontológicos para diferentes necessidades, com orientação clara e uma avaliação individualizada.</p><Link href="/caconde/odontologia-geral">Conheça o atendimento em Caconde <span aria-hidden="true">→</span></Link></article>
      </div>
    </section>
    <section className="closing-panel"><span className="eyebrow">CONTATO E AGENDAMENTO</span><h2>O primeiro passo é uma boa conversa.</h2><p>Entre em contato pelo WhatsApp para conhecer a disponibilidade de atendimento em Americana ou Caconde. O local é informado durante o agendamento.</p><a className="btn" target="_blank" rel="noopener noreferrer" href="https://wa.me/5519983155303?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20odontol%C3%B3gico%20com%20o%20Dr.%20Andr%C3%A9%20%C3%81vila.">Conversar pelo WhatsApp</a></section>
    <SiteFooter />
  </main>;
}
