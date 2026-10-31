import { articles } from "@/content/articles";
import { LeadForm } from "@/components/LeadForm";
import Link from "next/link";
import Image from "next/image";
import { Portrait } from "@/components/Portrait";
import { SiteHeader, SiteFooter } from "@/components/SiteShell";

export const metadata = {
 title: "André Ávila | Próteses em Americana e odontologia em Caconde",
 description: "Conheça o atendimento de André Ávila: próteses dentárias e reabilitação oral em Americana; odontologia geral em Caconde. Avaliação individual e contato pelo WhatsApp.",
};
const phone="5519983155303";
function whatsApp(message:string){return "https://wa.me/"+phone+"?text="+encodeURIComponent(message)}
const questions=[
 ["Quando uma prótese dentária pode ser indicada?","Quando há perda de dentes ou necessidade de recuperar mastigação, função ou estética, o dentista pode avaliar diferentes modalidades de prótese. A indicação depende do exame clínico e, quando necessário, de exames complementares."],
 ["Prótese protocolo e dentadura são a mesma coisa?","Não. A prótese protocolo é uma modalidade de reabilitação geralmente fixada sobre implantes; a prótese total convencional é removível. A avaliação determina as alternativas adequadas para cada caso."],
 ["É possível concluir um tratamento em 72 horas?","Em determinadas situações e conforme o planejamento clínico, algumas etapas de reabilitação podem ser realizadas em prazo reduzido, eventualmente em até 72 horas. Isso não se aplica a todos os pacientes nem significa que todas as etapas do tratamento se encerram nesse período. A viabilidade depende de avaliação presencial, exames e condições clínicas."],
 ["Preciso saber qual tratamento quero antes de conversar?","Não. Você pode explicar sua dificuldade ou objetivo no WhatsApp. O atendimento orienta os próximos passos; a escolha da técnica é feita após avaliação profissional."],
 ["Onde são realizados os atendimentos?","André atende mediante agendamento em Americana e Caconde. O endereço e a disponibilidade são informados diretamente pelo WhatsApp durante a organização da consulta."],
 ["Posso começar com um atendimento remoto?","Você pode iniciar o contato e esclarecer dúvidas administrativas à distância. Quando indicada e permitida, uma modalidade de teleodontologia pode fazer parte do cuidado profissional. Exames e etapas presenciais continuam necessários conforme cada caso."]
];
export default function Home(){
return <main className="site-layout">
<SiteHeader/>
<section className="site-hero enhanced-hero">
 <div className="site-hero-content"><span className="eyebrow">ANDRÉ ÁVILA · ODONTOLOGIA EM AMERICANA E CACONDE</span>
 <h1>Voltar a mastigar com confiança começa com um bom planejamento.</h1>
 <p>Próteses dentárias e reabilitação oral em Americana. Atendimento odontológico geral em Caconde. Entenda suas opções com orientação individualizada, clareza e atenção à sua rotina.</p>
 <div className="actions"><a className="btn" href={whatsApp("Olá, quero saber mais sobre uma avaliação odontológica com André Ávila.")} target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp</a><Link className="outline-btn" href="#atendimento">Veja como André atende</Link></div>
 <div className="hero-trust"><span>Atendimento em duas cidades</span><span>Planejamento individualizado</span><span>Contato direto pelo WhatsApp</span></div></div>
 <Portrait/>
</section>
<section className="content-split feature-intro" id="sobre"><div><span className="eyebrow">SOBRE ANDRÉ ÁVILA</span><h2>Uma trajetória na odontologia, com atenção ao que importa para cada paciente.</h2></div><div><p>André Ávila atua na odontologia há aproximadamente 25 anos, com experiência em tratamentos de reabilitação oral. Seu atendimento parte de uma conversa cuidadosa, da compreensão das necessidades de cada pessoa e de um planejamento construído a partir da avaliação clínica.</p><p>Mais do que escolher um procedimento, é importante compreender as possibilidades, as limitações e os próximos passos antes de iniciar o tratamento.</p><a className="text-link" href={whatsApp("Olá, gostaria de conhecer o atendimento do André Ávila.")} target="_blank" rel="noopener noreferrer">Fale diretamente com a equipe →</a></div></section>
<section id="atendimento" className="care-section"><div className="section-heading"><span>ATENDIMENTO POR REGIÃO</span><h2>O cuidado que você procura, na cidade certa.</h2></div><div className="region-grid">
<article className="region-card"><span className="pill">AMERICANA · SP</span><h3>Próteses dentárias e reabilitação oral.</h3><p>Para quem perdeu dentes, convive com próteses desconfortáveis ou quer conhecer alternativas para recuperar função e mastigação.</p><Link href="/americana/proteses-dentarias">Entenda as opções de reabilitação →</Link></article>
<article className="region-card light"><span className="pill">CACONDE · SP</span><h3>Atendimento odontológico geral.</h3><p>Para dúvidas, avaliações de saúde bucal e diferentes necessidades odontológicas, com orientação sobre os cuidados e os tratamentos disponíveis.</p><Link href="/caconde/odontologia-geral">Conheça o atendimento em Caconde →</Link></article>
</div></section>
<section className="editorial-story"><div className="editorial-story-image"><Image src="/images/andre-consultorio.webp" alt="André Ávila em fotografia profissional de seu acervo" fill sizes="(max-width: 800px) 90vw, 40vw" style={{objectFit:"cover"}}/></div><div className="editorial-story-copy"><span className="eyebrow">REABILITAÇÃO ORAL</span><h2>Prótese não é apenas uma questão estética.</h2><p>A ausência de dentes pode afetar a mastigação, a fala e o conforto em situações cotidianas. Existem diferentes soluções, incluindo próteses removíveis e opções apoiadas sobre implantes.</p><p>O que funciona melhor para uma pessoa pode não ser indicado para outra. A escolha depende de exames, condições da boca, expectativas e planejamento.</p><Link className="outline-btn" href="/americana/proteses-dentarias">Saiba mais sobre próteses</Link></div></section>
<section className="care-section"><div className="section-heading"><span>COMO FUNCIONA</span><h2>Da primeira conversa ao plano de cuidado.</h2></div><div className="steps-grid">{[
["01","Contato inicial","Conte o que precisa e informe a cidade de preferência. A equipe orienta o agendamento."],
["02","Avaliação profissional","André avalia a situação clínica e identifica os exames ou informações necessários."],
["03","Planejamento","Você recebe orientações sobre alternativas, etapas e prazos possíveis para o seu caso."],
["04","Acompanhamento","O andamento do atendimento é conduzido conforme o plano definido e a evolução clínica."]
].map(([step,title,desc])=><article className="step-card" key={step}><b>{step}</b><h3>{title}</h3><p>{desc}</p></article>)}</div></section>
<section className="time-note"><span className="eyebrow">PRAZOS DE REABILITAÇÃO</span><h2>Alguns casos podem ter etapas concluídas em até 72 horas.</h2><p>Em situações selecionadas, técnicas e condições clínicas podem permitir etapas mais rápidas. Isso exige avaliação, exames e indicação apropriada. O prazo não é garantido e não representa a conclusão integral de todos os tratamentos.</p><a href={whatsApp("Olá, gostaria de entender os prazos possíveis para uma reabilitação oral.")} className="outline-btn" target="_blank" rel="noopener noreferrer">Tire dúvidas sobre os prazos</a></section>
<section className="care-section faq-section" id="duvidas"><div className="section-heading"><span>PERGUNTAS FREQUENTES</span><h2>Informação também faz parte de um bom atendimento.</h2></div><div className="faq-list">{questions.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
<section className="lead-section" id="formulario"><div className="lead-section-copy"><span className="eyebrow">CONTATO E AVALIAÇÃO</span><h2>Comece seu atendimento pelo WhatsApp.</h2><p>Deixe seu nome e telefone para registrarmos seu interesse e continuarmos a conversa. O local e a disponibilidade serão informados no agendamento.</p></div><div className="lead-section-form">{process.env.LEAD_CAPTURE_ENABLED==="true" ? <LeadForm city="Americana"/> : <div className="lead-disabled"><strong>Atendimento pelo WhatsApp</strong><p>O formulário de cadastro está sendo preparado. Por enquanto, converse diretamente com a equipe.</p><a className="btn" href="https://wa.me/5519983155303" target="_blank" rel="noopener noreferrer">Abrir WhatsApp</a></div>}</div></section><section className="care-section"><div className="section-heading"><span>ARTIGOS E ORIENTAÇÕES</span><h2>Entenda seus tratamentos antes de decidir.</h2></div><div className="article-grid">{articles.map(a=><article className="article-teaser" key={a.slug}><span className="eyebrow">{a.category}</span><h3><Link href={`/artigos/${a.slug}`}>{a.title}</Link></h3><p>{a.description}</p><Link className="text-link" href={`/artigos/${a.slug}`}>Ler artigo →</Link></article>)}</div><div className="actions"><Link className="outline-btn" href="/artigos">Ver todos os artigos</Link><a className="outline-btn" href="https://www.instagram.com/andre.avila.odontologia/" target="_blank" rel="noopener noreferrer">Acompanhe no Instagram ↗</a></div></section><section className="closing-panel"><span className="eyebrow">AMERICANA E CACONDE</span><h2>Converse sobre o que você precisa.</h2><p>O primeiro contato é feito pelo WhatsApp. Lá você pode esclarecer dúvidas de agendamento e receber informações sobre a disponibilidade e o local do atendimento na cidade escolhida.</p><a className="btn" href={whatsApp("Olá, gostaria de agendar uma avaliação com André Ávila. Minha cidade é: ")} target="_blank" rel="noopener noreferrer">Iniciar conversa pelo WhatsApp</a></section>
<SiteFooter/>
</main>
}