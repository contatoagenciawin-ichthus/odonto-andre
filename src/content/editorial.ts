import { articles, type Article } from "./articles";
export type EditorialArticle = Article & {
  status: "draft" | "published";
  publishedAt?: string;
  updatedAt?: string;
  reviewedBy?: string;
  featured?: boolean;
  city?: "Americana" | "Caconde" | "Ambas";
  keywords?: string[];
  relatedSlugs?: string[];
};
const editorial:Record<string,Partial<EditorialArticle>>={
  "protese-protocolo-e-dentadura-diferencas": {city:"Americana",keywords:["prótese protocolo","dentadura","prótese dentária"],relatedSlugs:["quanto-tempo-leva-reabilitacao-com-implantes"],featured:true},
  "quanto-tempo-leva-reabilitacao-com-implantes":{city:"Americana",keywords:["implantes dentários","prazo reabilitação","prótese sobre implantes"],relatedSlugs:["protese-protocolo-e-dentadura-diferencas"]},
  "quando-procurar-avaliacao-odontologica":{city:"Caconde",keywords:["avaliação odontológica","odontologia geral","saúde bucal"]}
};
/** Legacy articles remain editorial drafts until clinical review is recorded. */
export const editorialArticles:EditorialArticle[]=articles.map(a=>({
  ...a,status:"draft" as const,...(editorial[a.slug]||{})
}));
export function publishedArticles(){return editorialArticles.filter(a=>a.status==="published" && !!a.publishedAt && !!a.reviewedBy).sort((a,b)=>(b.publishedAt||"").localeCompare(a.publishedAt||""))}
export function articleBySlug(slug:string){return editorialArticles.find(a=>a.slug===slug)}
export function relatedArticles(article:EditorialArticle){const published=publishedArticles().filter(a=>a.slug!==article.slug);return (article.relatedSlugs?.length?published.filter(a=>article.relatedSlugs?.includes(a.slug)):published.filter(a=>a.category===article.category)).slice(0,3)}
