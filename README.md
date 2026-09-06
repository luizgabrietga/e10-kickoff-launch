# E10 Football Landing

Crie um site institucional de uma página só (landing page com seções via scroll, navegação por âncoras) para a E10 Football, uma escolinha de futebol em Tangará da Serra - MT.

STACK E ESTILO
- React + Tailwind (padrão da Lovable), totalmente responsivo, mobile first.
- Visual esportivo, moderno, com boa hierarquia visual.
- Cores: tons de verde e preto (campo de futebol) combinados com branco, com um destaque em amarelo/dourado para CTAs. Ajustável depois pela paleta oficial da marca.
- Tipografia forte e esportiva nos títulos, legível no corpo do texto.
- Botão flutuante de WhatsApp fixo em todas as seções, linkando para https://wa.me/5565992021991
- Ícone/link para o Instagram @e10footballtga em todo o site (header e footer).

IMAGENS REAIS (já estou enviando os arquivos, use-os no lugar de placeholders, seguindo esta correspondência):
- logo-e10.png → logo no header, footer e favicon
- equipe-eliu.jpg → foto do Eliú Lemos Júnior na seção Nossa Equipe
- equipe-miltinho.jpg → foto do Milton Júnior na seção Nossa Equipe
- equipe-julio.jpg → foto do Júlio Weber na seção Nossa Equipe
- equipe-guilherme.jpg → foto do Guilherme Silva na seção Nossa Equipe
- atleta-aprovado-1.jpg, atleta-aprovado-2.jpg, atleta-aprovado-3.jpg (e demais que eu enviar) → grid/carrossel na seção Parcerias e Resultados
Se algum arquivo não tiver correspondência exata, use a imagem mais adequada ao contexto da seção.

SEÇÕES DA PÁGINA (nesta ordem)

1. HERO
- Título: "Formando atletas com caráter para o futebol profissional"
- Subtítulo: "A escolinha de futebol mais bem avaliada de Tangará da Serra - MT"
- Selo com nota do Google: 4,6/5
- Botão primário "Matricule seu filho" (rola até o formulário) e botão secundário "Falar no WhatsApp"
- Fundo com uma das fotos reais de treino/campo enviadas (ou a logo em destaque se ainda não houver foto de campo)

2. SOBRE
- Texto institucional: E10 Football é uma escolinha de futebol em Tangará da Serra - MT, com equipe 100% formada em Educação Física, comandada por ex-atletas profissionais, atendendo turmas de 3 a 15 anos, com mais de 30 atletas já aprovados em clubes.

3. METODOLOGIA
- 3 a 4 cards/ícones explicando os pilares: formação de caráter e disciplina; preparação técnica, tática e física real para o futebol profissional; acompanhamento individual por faixa etária; avaliação contínua da evolução do atleta.

4. DIFERENCIAL — TREINO NA ACADEMIA
- Seção destacada (pode ter fundo de cor diferente) explicando que a E10 Football também leva os alunos para treinar na academia, SEM foco em carga/musculação pesada, e sim em: prevenção de lesões, ganho de agilidade, coordenação motora, equilíbrio e propriocepção, mobilidade articular e flexibilidade, resistência cardiorrespiratória. Deixar claro que é orientado por profissionais de Educação Física com exercícios funcionais e lúdicos adequados à idade.

5. NOSSA EQUIPE
- Grid de cards (foto real + nome + cargo + descrição curta), todos formados em Educação Física:
  - Eliú Lemos Júnior (foto: equipe-eliu.jpg) — referência/rosto da escolinha, atleta profissional de futebol
  - Milton Júnior "Miltinho" (foto: equipe-miltinho.jpg) — ex-atleta profissional de futebol
  - Júlio Weber (foto: equipe-julio.jpg) — equipe técnica
  - Guilherme Silva (foto: equipe-guilherme.jpg) — treinador de goleiros, com passagens pela base do Cuiabá

6. PARCERIAS E RESULTADOS
- Bloco de destaque com 2-3 números grandes (estilo contador): "+30 atletas aprovados em clubes", "Rede de contato com empresários e clubes parceiros", "4,6/5 no Google"
- Logo abaixo, grid/carrossel com as fotos reais dos atletas aprovados (atleta-aprovado-1.jpg, atleta-aprovado-2.jpg, etc.)

7. PLANOS E VALORES
- 3 cards de planos lado a lado: Mensal, Trimestral, Semestral/Anual, cada um com lista do que inclui (treinos técnicos, treino na academia, avaliação física, acompanhamento individual) e um campo de preço como placeholder "R$ ___" (ainda vou definir os valores, deixe fácil de editar depois)

8. DEPOIMENTOS
- Cards de avaliação estilo Google Reviews (estrelas + nome + texto):
  - "Melhor escolinha da região, meu filho ama estar lá, professores sólidos." — Laser Fast Tangará da Serra-MT / Gerência (5 estrelas)
  - "Melhor escolinha de TGA, ótimos professores, super recomendo." — Davi Folador (5 estrelas)
  - "A melhor escolinha de futebol da região." — Ana Claudia Tanaka (5 estrelas)

9. FORMULÁRIO DE PRÉ-MATRÍCULA
- Formulário com os campos:
  Dados do aluno: nome completo, data de nascimento, turma pretendida (faixa etária)
  Dados do responsável: nome, telefone/WhatsApp, e-mail
  Saúde e histórico esportivo: possui condição de saúde relevante para a prática esportiva? (sim/não + descrição); já teve lesão anterior? (sim/não); se sim, qual e quando; está apto para atividade física sem restrições atualmente? (sim/não); já praticou futebol antes / há quanto tempo
  Observações: campo de texto livre
- Botão final "Enviar pré-matrícula" (por enquanto pode só mostrar uma mensagem de confirmação na tela; a integração com WhatsApp/e-mail eu decido depois)

10. CONTATO / FOOTER
- Endereço: MT-480, 2711 - Jardim Morada do Sol, Tangará da Serra - MT, 78304-309
- Telefone/WhatsApp: +55 65 99202-1991
- Instagram: @e10footballtga
- Mapa incorporado (placeholder de mapa, pode ser um iframe do Google Maps)
- Horário de funcionamento
- Logo (logo-e10.png) e links rápidos para as seções da página

Deixe todo o conteúdo de texto fácil de editar depois, e use componentes reutilizáveis para os cards (equipe, planos, depoimentos, atletas aprovados) para eu poder adicionar/remover itens facilmente.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://e10-kickoff-launch.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ff4f94d8-9da3-49bb-bcce-016987ece86c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
