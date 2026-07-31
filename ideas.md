# Brainstorm de Design — MVS Anjos Portfólio & Blog

## Três Abordagens Estilísticas

### 1. Corporate Tech Authority
**Very Brief Intro:** Estética corporativa tecnológica com fundos escuros profundos, acentos em azul royal e elementos geométricos inspirados em redes/conectividade. Transmite autoridade, expertise técnica e sofisticação executiva.
**Probability:** 0.08

### 2. Clean Executive Minimal
**Very Brief Intro:** Design minimalista e elegante com predominância de branco, tipografia serifada refinada e detalhes em azul escuro. Foco em legibilidade, hierarquia de informação e elegância profissional.
**Probability:** 0.04

### 3. Digital Governance Editorial
**Very Brief Intro:** Estilo editorial moderno com grid assimétrico, cards com profundidade e transições suaves. Combina seriedade institucional com modernidade digital, ideal para um gestor público com viés tecnológico.
**Probability:** 0.06

---

## Abordagem Escolhida: Corporate Tech Authority

### Design Movement
Inspirado no design de interfaces corporativas de alta tecnologia (como dashboards de governança e plataformas de TI enterprise), com influências do brutalismo digital suave — geometria rigorosa com gradientes sutis e elementos de profundidade.

### Core Principles
1. **Autoridade Visual** — Cada elemento deve comunicar profissionalismo e expertise de nível executivo
2. **Profundidade Estratégica** — Uso de camadas, sombras sutis e gradientes para criar hierarquia visual
3. **Conectividade** — Elementos geométricos de rede/redes que remetem à TI e governança digital
4. **Clareza Informativa** — Informação densa mas organizada, como um dashboard bem projetado

### Color Philosophy
A paleta reflete a identidade do banner MVS Anjos: azul escuro profundo (#0d1b3e) como base de autoridade, azul royal (#1a5276) como cor primária de ação, azul claro (#5dade2) para destaques e conectividade, com branco e cinza claro (#f5f6fa) para contraste e legibilidade. O roxo/magenta sutil (#6c3483) aparece como acento decorativo em gradientes.

| Token | Valor | Uso |
|---|---|---|
| --background | #0d1b3e | Fundo principal escuro |
| --foreground | #e8edf5 | Texto principal claro |
| --primary | #1a5276 | Azul royal, botões, links |
| --primary-foreground | #ffffff | Texto sobre primary |
| --accent | #5dade2 | Destaques, ícones |
| --secondary | #142850 | Cards, seções |
| --muted | #2c4a7c | Elementos secundários |
| --card | #142850 | Fundo de cards |

### Layout Paradigm
Layout assimétrico com seções full-width alternando entre hero imersivo e conteúdo estruturado. Grid de 12 colunas com margens generosas. Seções com padding vertical amplo (96-128px). Navegação fixa no topo com transição de transparente para opaco ao scroll.

### Signature Elements
1. **Redes geométricas** — Linhas e pontos conectados como background pattern sutil, remetendo ao banner
2. **Gradientes azul-escuro com glow** — Efeito de brilho sutil em elementos interativos
3. **Cards com borda luminosa** — Cards de projeto/experiência com borda azul sutil e hover glow

### Interaction Philosophy
Interações sutis e profissionais: hover com transição suave (200ms), elementos que ganham glow azul ao interação, scroll-triggered fade-in para seções. Nada exagerado — tudo comunica controle e sofisticação.

### Animation
- Entrada de seções: fade-in + translateY(20px) ao scroll, 400ms ease-out
- Hover em cards: scale(1.02) + box-shadow glow, 200ms
- Navegação: transição de transparente para sólida ao scroll
- Botões: scale(0.97) no active, 160ms ease-out

### Typography System
- **Display/Headings:** "Playfair Display" — serifada elegante para títulos, transmite autoridade
- **Body:** "Inter" — sans-serif limpa para texto corrido e UI
- **Accent:** "JetBrains Mono" — monospace para tags técnicas e labels de tecnologia

### Brand Essence
Um portal de autoridade profissional para administradores públicos e gestores de TI que buscam transformar a governança pública através da tecnologia.
**Personalidade:** Sofisticado, Confiável, Visionário

### Brand Voice
- Headlines: assertivas, focadas em resultado e transformação
- CTAs: diretos e profissionais
- Microcopy: técnica mas acessível

Exemplos:
- "Transformando Governança Pública através da Tecnologia"
- "Liderança Estratégica em TI e Conformidade Digital"

### Wordmark & Logo
Logo circular existente (MVS Anjos) — anéis concêntricos azul escuro com texto interno escuro. Usado no header e como favicon.

### Signature Brand Color
**Azul Royal MVS** — #1a5276 — a cor que define a identidade, presente em todos os elementos interativos e de destaque.
