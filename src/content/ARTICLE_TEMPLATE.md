# Modelo de artigo — duplicar e preencher

Este arquivo é um **modelo editorial**, não uma publicação automática. Os artigos atualmente cadastrados em `src/content/articles.ts` são rascunhos históricos. Para publicar com segurança, a aprovação clínica e os dados do profissional devem estar registrados.

## Cadastro mínimo
- slug: `exemplo-de-assunto` (único, minúsculas, hífens, sem acentos)
- title: resposta objetiva à dúvida pesquisada (não prometer resultados)
- description: resumo original, 130–160 caracteres como referência editorial, sem repetição artificial de palavras-chave
- category: tema principal
- readingMinutes: estimativa real de leitura
- city: `Americana` | `Caconde` | `Ambas`
- sections: H2 + parágrafos, sem copiar conteúdo de outras fontes
- relatedSlugs: slugs de artigos relacionados
- keywords: termos-alvo apenas para planejamento editorial, não meta keywords
- status: `draft` inicialmente
- reviewedBy: nome do cirurgião-dentista que revisou
- publishedAt: data ISO (ex.: `2026-11-02`)
- updatedAt: data ISO, quando alterado

## Estrutura sugerida
1. Pergunta ou necessidade real do paciente na introdução.
2. Explicação do conceito em linguagem simples.
3. Alternativas e limites clínicos, com indicações condicionais.
4. Quando procurar avaliação profissional.
5. Perguntas frequentes pertinentes (se ajudam de fato).
6. Referência local contextualizada a Americana ou Caconde.
7. CTA de contato sem urgência artificial nem promessa de resultado.

## Checklist antes de alterar status para published
- [ ] CRO/nome profissional e dados institucionais verificados
- [ ] Revisão e aprovação clínica documentadas
- [ ] Originalidade e correção factual
- [ ] Sem diagnósticos personalizados, garantias nem imagens de paciente sem documentação
- [ ] Título/descrição diferenciados e URL permanente
- [ ] Links internos úteis e nenhuma referência a endereço fixo inexistente
- [ ] Data e responsável pela revisão preenchidos
- [ ] QA mobile, acessibilidade e deploy revisados
- [ ] Site liberado para indexação somente após aprovação institucional

## Como adicionar sem desenvolver layout
1. Acrescente um objeto do formato `Article` em `src/content/articles.ts`.
2. Inclua seus metadados editoriais em `src/content/editorial.ts`, com `status: "draft"`.
3. Revise com o André; só depois marque `status: "published"`, `reviewedBy` e `publishedAt`.
4. Faça commit. A página, a listagem, links e sitemap passam a ser gerados a partir desses dados.

**Observação:** a revisão profissional e a publicação são decisões distintas. O sistema não publica automaticamente ao enviar rascunhos.
