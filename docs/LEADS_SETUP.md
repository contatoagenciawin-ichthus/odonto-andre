# Funil de leads — André Ávila
## Estado
Formulário e endpoint implementados, **a gravação de dados reais permanece desabilitada** até criar banco dedicado, definir variáveis de ambiente e validar política de privacidade. O endpoint retorna HTTP 503 se não houver credenciais. Não enviar leads reais em ambiente de teste.

## Supabase
Utilizar um projeto exclusivo do André, não compartilhar o banco clínico com os projetos da Ichthus. Executar o SQL de `docs/leads-schema.sql` no projeto exclusivo depois de revisão.
Configurar na Vercel, como **server-only**:
- `SUPABASE_URL`
- `SUPABASE_SECRET_KEY`
Não usar `NEXT_PUBLIC_` para credenciais privilegiadas.

## Segurança pendente antes de disponibilizar ao público
- Consentimento / aviso de privacidade definitivo e identificação do controlador.
- Proteção anti-bot (Turnstile) e rate limiting na borda/servidor.
- Revisão de duplicados, retenção, exportação e exclusão dos dados.
- Atribuição e eventos de Analytics sem dados pessoais ou informações sensíveis.
- Testes de integração com registro e autorização reais.
- Confirmar número WhatsApp 19 98315-5303.
- Proibir mensagens promocionais a quem não optou pela comunicação.
- Verificar conformidade com regras do CFO/CRO e políticas de anúncios.
- Controle de acesso administrativo segregado e auditável.

## Eventos e mensuração
`lead_created`: apenas após gravação bem-sucedida.
`whatsapp_opened`: tentativa de redirecionamento, não comprova mensagem enviada.
`conversation_started`: somente com confirmação real de conversa por integração futura.
