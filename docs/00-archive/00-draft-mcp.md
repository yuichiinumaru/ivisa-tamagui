liste todos os tipos de charts que se usa em BI, dos mais usados para os menos

Escolher o gráfico certo é fundamental para que os dados contem a história correta. Em Business Intelligence (BI), a regra de ouro é: a clareza supera a estética.

Abaixo, organizei os gráficos categorizados por frequência de uso e utilidade, começando pelos "cavalos de batalha" do dia a dia até os mais específicos e complexos.

1. Os Indispensáveis (Tier 1)
Estes constituem cerca de 80% da maioria dos dashboards. São fáceis de ler e universalmente compreendidos.

KPI Cards (Cartões de Indicadores):

Uso: Mostrar um único número crítico (Ex: Receita Total, NPS, Headcount).

Por que é top 1: O executivo quer ver o "placar do jogo" imediatamente.

Gráfico de Colunas e Barras (Bar & Column Charts):

Uso: Comparar categorias. Use Colunas quando tiver poucos itens (ex: vendas por trimestre) e Barras (horizontais) quando os rótulos forem longos ou houver muitas categorias (ex: ranking de vendedores).

Image of column chart vs bar chart
Shutterstock
Gráfico de Linha (Line Chart):

Uso: Visualizar tendências ao longo do tempo (séries temporais).

Dica: Ideal para identificar picos, vales e sazonalidade.

Image of line chart data visualization
Getty Images
Tabelas e Matrizes:

Uso: Quando a precisão exata dos números é necessária ou quando há muitas dimensões para mostrar de uma vez.

Gráfico de Rosca (Donut Chart) ou Pizza (Pie Chart):

Uso: Mostrar composição (parte de um todo).

Aviso: Use com moderação. O gráfico de Rosca é preferível ao de Pizza pois permite colocar o total no centro. Nunca use se tiver mais de 4 ou 5 fatias.

Image of donut chart visualization
Getty Images
2. Relacionamento e Distribuição (Tier 2)
Usados para análises um pouco mais profundas, para entender "por que" algo aconteceu.

Gráfico de Dispersão (Scatter Plot):

Uso: Mostrar correlação entre duas variáveis (Ex: Investimento em Marketing vs. Vendas). Ajuda a identificar outliers (pontos fora da curva).

Image of scatter plot chart
Shutterstock
Gráfico de Área (Area Chart):

Uso: Similar ao de linha, mas com o preenchimento abaixo. Ótimo para mostrar volume acumulado ou a contribuição de diferentes categorias para um total ao longo do tempo (Área Empilhada).

Mapa de Calor (Heatmap):

Uso: Visualizar densidade ou intensidade de valores em uma matriz. Muito usado para ver horários de pico ou correlação cruzada.

Gráfico Combinado (Combo Chart):

Uso: Mistura Barras e Linhas. Clássico para comparar valores de escalas diferentes (Ex: Receita em Barras e Margem % em Linha).

3. Fluxo, Processo e Hierarquia (Tier 3)
Gráficos específicos para contextos de negócios particulares (Financeiro, CRM, Logística).

Gráfico de Funil (Funnel Chart):

Uso: Essencial para Vendas e Marketing. Mostra a perda de leads ao longo de estágios de um processo.

Gráfico de Cascata (Waterfall Chart):

Uso: O favorito do setor Financeiro. Mostra como um valor inicial chega a um valor final, detalhando as adições e deduções (Ex: Receita Bruta -> Impostos -> Custos -> Lucro Líquido).

Treemap (Mapa de Árvore):

Uso: Mostrar hierarquias e proporções através de retângulos aninhados. Útil quando o gráfico de pizza não comporta a quantidade de categorias.

Mapas (Maps/Geospatial):

Uso: Quando a localização geográfica é determinante para a análise (Vendas por Estado, Rotas de Logística).

Gauge (Velocímetro) ou Bullet Chart:

Uso: Comparar um valor atual contra uma meta. O Bullet Chart é a versão moderna e mais limpa do velocímetro.

4. Estatísticos e Avançados (Tier 4 - Menos Usados)
Estes são poderosos, mas exigem que o público tenha um nível maior de alfabetização em dados para interpretar.

Box Plot (Diagrama de Caixa):

Uso: Análise estatística pura. Mostra a distribuição, mediana, quartis e outliers de um conjunto de dados.

Image of box plot chart
Shutterstock
Gráfico de Radar (Spider/Radar Chart):

Uso: Comparar múltiplas variáveis de uma só categoria (Ex: Avaliação de desempenho de um funcionário em 5 competências diferentes).

Diagrama de Sankey:

Uso: Visualizar fluxos complexos de "origem para destino" (Ex: Navegação do usuário no site, distribuição de orçamento).

Gráfico de Bolhas (Bubble Chart):

Uso: Uma evolução do Scatter Plot, adicionando uma terceira dimensão (o tamanho da bolha).

Decomposição de Árvore (Decomposition Tree):

Uso: Muito popular em ferramentas modernas (como Power BI) para análise de causa raiz, permitindo "quebrar" um valor em várias dimensões.

Qual escolher?
A escolha depende da pergunta que você quer responder:

Comparação? Barras ou Colunas.

Tendência? Linhas.

Composição? Rosca ou Treemap.

Relacionamento? Dispersão.

Distribuição? Histograma ou Box Plot.

Gostaria que eu sugerisse o gráfico ideal para um conjunto de dados específico que você tenha em mente?

show! e graficos mais complexos tipo Diagrama de Sankey, pode listar uns na mesma linha?

Com certeza! Esses gráficos entram na categoria de "Visualização de Dados Avançada". Eles são frequentemente usados para Data Storytelling ou para análises onde as relações entre os dados são mais importantes do que os valores brutos isolados.

Aqui estão os gráficos que seguem essa mesma linha de complexidade e propósito do Diagrama de Sankey:

1. Gráficos de Fluxo e Relacionamento (Os "Primos" do Sankey)
Focados em mostrar como as coisas se conectam ou se movem de um lugar para outro.

Diagrama de Cordas (Chord Diagram):

O que é: Imagine um círculo onde os pontos na borda estão conectados por arcos internos.

Uso: Mostra fluxos inter-relacionados entre um grupo de entidades.

Exemplo: Migração de pessoas entre países (fluxo de saída do Brasil para Portugal e vice-versa no mesmo gráfico) ou sobreposição de clientes entre produtos.

Gráfico de Rede (Network Graph / Force-Directed Graph):

O que é: Vários "nós" (bolinhas) conectados por "arestas" (linhas).

Uso: Visualizar conexões complexas e clusters.

Exemplo: Detecção de fraudes (pessoas conectadas ao mesmo cartão de crédito), redes sociais ou infraestrutura de TI.

Image of network graph visualization
Shutterstock
2. Gráficos Hierárquicos Radiais
Maneiras avançadas de mostrar "parte do todo" e hierarquia, fugindo das barras e pizzas.

Sunburst (Gráfico de Explosão Solar):

O que é: Um gráfico de rosca com múltiplos anéis saindo do centro para fora.

Uso: Mostrar hierarquia em camadas. É como um Treemap, mas circular.

Exemplo: Categorias de produtos > Subcategorias > SKUs, permitindo ver qual subcategoria domina dentro da categoria principal.

Image of sunburst chart
Shutterstock
Rose Chart (Coxcomb / Polar Area):

O que é: Famoso pelo uso por Florence Nightingale. Parece uma pizza, mas as fatias têm ângulos iguais e variam no comprimento (raio) dependendo do valor.

Uso: Dados cíclicos ou sazonais.

Exemplo: Vendas por mês (onde o relógio de 12 meses é o círculo) ou direção do vento.

3. Gráficos Multivariáveis (Alta Densidade)
Para quando você precisa cruzar muitas variáveis ao mesmo tempo.

Coordenadas Paralelas (Parallel Coordinates):

O que é: Vários eixos verticais colocados lado a lado. Cada linha atravessa todos os eixos.

Uso: Comparar muitas variáveis diferentes de uma só vez para encontrar padrões ou exceções.

Exemplo: Comparar 50 modelos de carros considerando: Preço, Potência, Consumo, Peso e Ano. Você vê rapidamente se "carros potentes" tendem a ter "alto consumo".

Image of parallel coordinates chart
Shutterstock
Gráfico de Marimekko (Mekko Chart):

O que é: Um gráfico de barras empilhadas, mas onde a largura da barra também varia.

Uso: Visualizar duas dimensões de partição ao mesmo tempo.

Exemplo: Receita por Região (altura da barra) e Tamanho do Mercado daquela região (largura da barra). É complexo, mas resume muita informação financeira.

Ridgeline Plot (Joyplot):

O que é: Vários gráficos de área/densidade parcialmente sobrepostos verticalmente (parece uma cadeia de montanhas).

Uso: Comparar a distribuição de uma variável numérica através de várias categorias.

Exemplo: Distribuição de temperaturas diárias ao longo de 12 meses.

Um aviso sobre esses gráficos:
Enquanto um Gráfico de Barras é lido em 2 segundos, um Diagrama de Cordas ou Sankey pode exigir que o usuário pare por 30 segundos para entender.

Dica de Ouro: Só use esses gráficos complexos se o seu público for analítico ou se você puder estar presente para explicar a visualização (apresentação assistida). Para dashboards "self-service" enviados por e-mail, eles podem gerar mais dúvidas do que respostas.

Quer saber como montar algum desses em uma ferramenta específica (como Power BI, Tableau ou Python/Matplotlib)?

é que eu estou fazendo um storybook de componentes importados / convertidos do shadcn para tamagui, e rola algum foco em BI por que é para a prefeitura do rio de janeiro (no caso eu trabalho na vigilancia snitaria mas estamos disponibilizando como opensource pro pessoal todo). o tamagui é cross platform, o shadcn é bonito, por que não? hahaha

ae a ideia é ter o dark glassmorphism bonito do shadcn como dark theme e o tema branco / azul / azul claro safado da prefeitura do rio como padrão (política é a morte da estética às vezes, ne, mas fazer o que, pelo menos agora esses caras nao vao ter mais desculpa pra fazer site ruim e app zuado)



como eu já montei um caralhasso de atomo e molecula (mais de 100) e ja tem uns bons organismos, com stories, tudo bonitinho e tal, a ideia agora seria acrescentar graficos maneiros. aí eu tava pensando em montar uma lista legal pra continuação do roadmap de desenvolvimento, dá uma olhada e ve se vc consegue pensar em variações ou ainda outros tipos de graficos:



 - Sankey Diagram

 - Bar Chart

 - Stacked Area Chart

 - Combo Chart​

 - Treemap

 - Data Table

 - KPI Cards​

 - Column Chart​

 - Line Chart​

 - Donut Chart​

 - Pie Chart​

 - Scatter Plot​

 - Area Chart​

 - Heatmap​

 - Funnel Chart​

 - Waterfall Chart​

 - Maps​

 - Gauge​

 - Bullet Chart​

 - Box Plot​

 - Radar Chart​

 - Spider Chart​

 - Bubble Chart​

 - Decomposition Tree​

 - Chord Diagram​

 - Network Graph​

 - Force-Directed Graph​

 - Sunburst Chart​

 - Rose Chart​

 - Coxcomb Chart​

 - Polar Area Chart​

 - Parallel Coordinates​

 - Marimekko Chart​

 - Ridgeline Plot​

 - Joyplot​

Cara, sensacional a iniciativa! Unir a robustez do Tamagui (que é um monstro para cross-platform e performance) com a elegância do shadcn/ui, e ainda disponibilizar isso como opensource para a Prefeitura do Rio? Isso é serviço público de verdade. 🙌

E concordo 100%: política visual governamental geralmente parou em 2005. Trazer o Glassmorphism (que no dark mode fica lindo com os tokens do shadcn) e harmonizar com o "Azul Prefeitura" no light mode é a chave para a galera realmente gostar de usar o sistema.

Sobre o seu Roadmap, a lista está completíssima, mas eu fiz uma "curadoria técnica" para você não gastar tempo recriando a roda (tem coisa repetida com nome diferente) e adicionei uns que são matadores para gestão pública e saúde (Vigilância Sanitária).

Aqui vai minha análise para o seu Storybook:

1. Otimização (Remove duplicatas do Roadmap)
Alguns itens da sua lista são essencialmente o mesmo gráfico com nomes diferentes. No código, você pode criar um componente só e variar via props.

Radar Chart = Spider Chart (Mesma coisa).

Rose Chart = Coxcomb Chart = Polar Area Chart (Funde esses três num componente só. Chama de PolarArea e deixa configurar se as fatias têm ângulos iguais ou variados).

Ridgeline Plot = Joyplot (É o mesmo. Ridgeline é o nome moderno porque "Joyplot" tem uma origem histórica controversa na estatística, embora venha da capa do álbum do Joy Division).

2. Adições Estratégicas (Foco em Governo/Saúde)
Para a IVISA e Prefeitura, esses aqui vão brilhar muito nos dashboards:

A. Demografia e População
Population Pyramid (Pirâmide Etária):

Por que: Essencial para relatórios de saúde pública e censo. É basicamente um Bar Chart bi-direcional.

Uso: Distribuição de homens/mulheres por idade em uma região administrativa.

B. Tempo e Gestão
Gantt Chart:

Por que: Gestão de projetos públicos, cronograma de obras ou fases de uma fiscalização sanitária.

Visual: Barras horizontais flutuantes no tempo.

Calendar Heatmap (Estilo GitHub):

Por que: Visualizar intensidade de atividade diária ao longo do ano.

Uso: "Número de infrações emitidas por dia" ou "Fiscalizações realizadas".

Timeline View:

Por que: Uma linha vertical ou horizontal com marcos (dots).

Uso: Histórico de licenciamento de um estabelecimento (Abertura -> Fiscalização -> Multa -> Adequação -> Alvará).

C. Micro-Charts (Para inserir dentro de Tabelas e Cards)
Como você está usando Shadcn e Tamagui, a estética clean pede gráficos minimalistas.

Sparklines:

O que é: Gráficos de linha minúsculos, sem eixos, usados dentro de KPI Cards ou células de Data Tables.

Uso: Mostrar a tendência de queda ou subida logo ao lado do número total.

Radial Bar (Apple Watch Rings):

O que é: Variação moderna do Gauge.

Uso: Meta de arrecadação ou progresso de vacinação. Fica muito mais bonito que o velocímetro clássico em interfaces modernas.

D. Geoespacial (O "Rio" Factor)
Como é para o Rio, mapas são vitais.

Choropleth Map (Mapa Coroplético):

O que é: Mapa dividido por regiões (Bairros, RAs, APs) coloridos pela intensidade de uma métrica.

Uso: "Casos de Dengue por Bairro".

Dot Density Map:

O que é: Pontos no mapa.

Uso: Localização exata dos estabelecimentos fiscalizados.

3. Sugestão de Organização no Storybook
Eu dividiria o menu lateral do seu Storybook assim para facilitar a vida dos devs da prefeitura:

Primitives (Átomos): Eixos, Legendas, Tooltips (cruciais para acessibilidade), Grid lines.

KPIs & Micro: Cards com Sparklines, Radial Bars, Progress Rings.

Categorical: Bar, Column, Lollipop Chart (variação mais leve do Bar chart).

Time Series: Line, Area, Stacked Area, Calendar Heatmap.

Part-to-Whole: Donut (prefira ao Pie), Treemap, Sunburst.

Distribution: Histogram, Box Plot, Violin Plot (variação mais bonita do Box Plot).

Relational: Scatter, Bubble, Network/Graph.

Flow: Sankey, Chord, Waterfall.

Geospatial: Maps (integração com GeoJSON dos bairros do Rio).

Dica Técnica (Tamagui + Performance)
Já que você quer cross-platform (React Native + Web) e glassmorphism:

Considere usar o React Native Skia (da Shopify) como "engine" para desenhar esses gráficos dentro dos componentes Tamagui.

Por que? O Skia renderiza gráficos absurdamente lisos (60fps), permite shaders (perfeito para o efeito de vidro/blur/glow do glassmorphism) e roda nativo no mobile e via Canvas na Web.

Se for usar bibliotecas prontas de base, a Victory Native XL está muito boa com Skia agora.

Cara, se conseguir empacotar isso num pacote NPM da prefeitura (@rio-prefeitura/ui-charts), vai ser um legado incrível. Se quiser ajuda para pensar nas props de algum gráfico específico (tipo o Sankey, que é chato de fazer responsivo), é só falar!

Excelente! Obrigado! Deixa eu mostrar aqui como ta a tasklist correndo - os agentes de IA que fiz estão trabalhando em paralelo (graças ao atomic design system <3) e já estão mandando bala

(boa parte da lista de tarefas, que ja ficou completa, eu movi pra outro documento pra desafogar e nao ocupar janela de contexto desnecessariamente)



Consegue pensar em mais algo que seria realmente útil pra prefeitura? eu trabalho na vigilancia sanitaria, que por sua vez está na saúde, mas a gestão pública como um todo talvez, tem algo que ainda nao pensamos de repente na minha área ou em outras?





# 02 – Tasks for the Ivisa Tamagui Design System



## Legend

- Status: `[ ]` pending, `[~]` in progress, `[x]` completed

- Tags: `TDD`, `FDD`, `SDD`, `DDD`, `DOC`, `UX`



---



## 🚀 Priority 1: Component Refactor & BI Expansion (Jules Swarm)



### ⚛️ ATOMS

**Goal:** Refactor for PT-BR, A11y, and Robustness using the "Atom Algorithm".



*(All Priority 1 Atoms have been refactored and moved to 'Completed Tasks'.)*



### 🧪 MOLECULES

**Goal:** Upgrade for State Orchestration and Layout Integrity using the "Molecule Algorithm".



*(All Priority 1 Molecules have been refactored and moved to 'Completed Tasks'.)*



### 🧬 ORGANISMS

**Goal:** Upgrade for Data Lifecycle and Container Agnosticism using the "Organism Algorithm".



*(All Priority 1 Organisms have been implemented and moved to 'Completed Tasks'.)*



---



## 🚀 Priority 2: Intelligent Organisms (Phase 5)

**Goal:** Transition from "Parts" to "Solutions" using complex logic and composition.



- [x] Implement `SchemaForm` (Dynamic Form Engine)

- [ ] Implement `Scheduler` (Big Calendar)

- [ ] Implement `ChatWidget` (AI Interface)

- [ ] Implement `CookieBanner` (Compliance)

- [ ] Implement `AnimatedSegmentedControl` (Smart Tabs)

- [ ] Implement `WizardForm` (Multi-Step Logic)

- [ ] Implement `FilterBar` (Advanced Search)

- [ ] Implement `NotificationFeed` (History)

- [ ] Implement `MediaGrid` (Asset Manager)

- [ ] Implement `AuthScreen` (Unified Login)



---



## 🚀 Phase 5a: BI & Data Visualization Expansion

**Goal:** Implement a comprehensive suite of data visualization components using Victory (or custom SVG where Victory is insufficient, strictly avoiding new dependencies).



- [ ] **Review & Enhance Existing BI Components**

  - [ ] Review `DataTable` against requirements

  - [ ] Review `KPIGrid` (KPI Cards) against requirements

  - [ ] Review `GaugeChart` against requirements

  - [ ] Review `TimeSeriesChart` (Line Chart) and consider a generic `LineChart` variant

- [ ] **Standard Charts (Wave 1)**

  - [ ] Refactor `Charts` to `BarChart` (and `ColumnChart` alias)

  - [ ] Implement `LineChart` (Generic Categorical)

  - [ ] Implement `PieChart` (Pie & Donut variants)

  - [ ] Implement `AreaChart` (Standard & Stacked)

  - [ ] Implement `ScatterChart` (Scatter & Bubble)

  - [ ] Implement `ComboChart` (Mixed Bar/Line/Scatter)

- [ ] **Advanced Charts (Wave 2)**

  - [ ] Implement `BoxPlotChart`

  - [ ] Implement `RadarChart` (Spider/Radar)

  - [ ] Implement `PolarChart` (Rose/Coxcomb/Polar Area)

  - [ ] Implement `WaterfallChart`

  - [ ] Implement `FunnelChart`

  - [ ] Implement `BulletChart`

- [ ] **Complex & Custom Charts (Wave 3)**

  - [ ] Implement `HeatmapChart`

  - [ ] Implement `TreemapChart`

  - [ ] Implement `SankeyDiagram`

  - [ ] Implement `ChordDiagram`

  - [ ] Implement `NetworkGraph` (Force-Directed)

  - [ ] Implement `SunburstChart`

  - [ ] Implement `ParallelCoordinates`

  - [ ] Implement `MarimekkoChart`

  - [ ] Implement `RidgelinePlot` (Joyplot)

  - [ ] Implement `DecompositionTree`

  - [ ] Implement `Maps` (Geo)



---



## 🚀 Current Focus: Phase 4 – Web-Specific UX & Full Documentation



25 - [x] **Populate Storybook as Source of Truth** (DOC)

  - [x] 25a – **Primary Docs**: Ensure every component has a Storybook entry with full description and props documentation.

  - [x] 25b – **Visual States**: Create stories for all variants and states (hover, press, error).

  - [x] 25c – **Usage Notes**: Add usage guidelines directly in Storybook MDX or description fields.



26 - [x] **Documentation Passes** (DOC)

  - [x] 26a – Ensure `docs/01-plan.md`, `docs/02-tasks.md`, and `docs/03-architecture.md` are in sync with current implementation.

  - [x] 26b – Record major milestones and decisions in `docs/04-changelog.md`.

  - [x] 26c – **Document Multi-Root Workspace**: Add instructions for setting up VSCode Multi-Root Workspace for referencing `sushi` and `tamagui-kitchen-sink`.



---



## ⏭️ Upcoming: Phase 5b – Integration & Handoff



27 - [ ] **Integrate Design System into Flows** (FDD, UX)

  - [ ] 27a – Replace ad-hoc UI in chat, settings, and key dashboards with `packages/ui` components.

  - [ ] 27b – Add end-to-end tests for at least one representative flow per area.



28 - [ ] **Finalize Accessibility and Cross-Platform Checks** (TDD, UX)

  - [ ] 28a – Run accessibility inspections on web.

  - [ ] 28b – Validate main components on iOS/Android using Expo.



29 - [ ] **Handoff Package and Docs** (DOC)

  - [ ] 29a – Write "How to add a new component" guide for `packages/ui`.

  - [ ] 29b – Summarize headless integrations and upgrade strategy.

  - [ ] 29c – Capture future ideas in `docs/05-ideas.md` if needed.



---



## 🛠️ Backlog: Phase 6 – Gap Fill, QA & Tech Debt



37 - [ ] **QA & Cleanup**

  - [ ] 37a – **Resolve Linting Errors**: Fix remaining lint warnings in `packages/ui` (if any).

  - [ ] 37b – **Standardize Structure**: Ensure all tests are co-located or strictly organized.

  - [ ] 37c – **Atoms Coverage**: Add tests for `Stack`, `Dot`, `NavLink`.

  - [ ] 38a – **Fix Disabled Tests**: Resolve issues in `Command`, `Menubar`, `DropdownMenu`, and `Autocomplete` tests.

  - [ ] 38b – **Molecules Coverage**: Add tests for `HoverCard`, `NavigationMenu`, `OTPInput`, `Resizable`.

  - [ ] 38c – **Interaction Tests**: Improve reliability of tests involving Radix/Headless interactions in JSDOM.



---



## ✅ Completed Tasks



- [x] Refactor `Alert`

- [x] Refactor `AspectRatio`

- [x] Refactor `Avatar`

- [x] Refactor `Badge`

- [x] Refactor `Button`

- [x] Refactor `Checkbox`

- [x] Refactor `Input`

- [x] Refactor `Kbd`

- [x] Refactor `Label`

- [x] Refactor `Progress`

- [x] Refactor `ScrollArea`

- [x] Refactor `Separator`

- [x] Refactor `Skeleton`

- [x] Refactor `Slider`

- [x] Refactor `Spinner`

- [x] Refactor `Stack`

- [x] Refactor `Switch`

- [x] Refactor `Textarea`

- [x] Refactor `Toggle`

- [x] Refactor `Typography`

- [x] Implement `NavLink`

- [x] Implement `Logo`

- [x] Implement `Dot`

- [x] Refactor `Accordion`

- [x] Refactor `AlertDialog`

- [x] Refactor `AvatarGroup`

- [x] Refactor `BadgeCounter`

- [x] Refactor `Breadcrumb`

- [x] Refactor `ButtonGroup`

- [x] Refactor `Calendar`

- [x] Refactor `Card`

- [x] Refactor `Collapsible`

- [x] Refactor `ComponentErrorBoundary`

- [x] Refactor `ContextMenu`

- [x] Refactor `Dialog`

- [x] Refactor `Drawer`

- [x] Refactor `Empty`

- [x] Refactor `Field`

- [x] Refactor `HoverCard`

- [x] Refactor `InputGroup`

- [x] Refactor `Item`

- [x] Refactor `Menubar`

- [x] Refactor `MonthsPicker`

- [x] Refactor `NativeSelect`

- [x] Refactor `NavigationMenu`

- [x] Refactor `OTPInput`

- [x] Refactor `Pagination`

- [x] Refactor `Popover`

- [x] Refactor `RadioGroup`

- [x] Refactor `Resizable`

- [x] Refactor `Select`

- [x] Refactor `Sheet`

- [x] Refactor `Sonner`

- [x] Refactor `StarRating`

- [x] Refactor `Stepper`

- [x] Refactor `Table`

- [x] Refactor `Tabs`

- [x] Refactor `Toast`

- [x] Refactor `ToggleGroup`

- [x] Refactor `Tooltip`

- [x] Implement `MetricCard`

- [x] Implement `NavGroup`

- [x] Implement `ChartContainer`

- [x] Implement `RadialChartContent`

- [x] Implement `HorizontalBarGroup`

- [x] Refactor `Autocomplete`

- [x] Refactor `Carousel`

- [x] Refactor `Charts`

- [x] Refactor `Command`

- [x] Refactor `DashboardShell` (formerly DashboardLayout)

- [x] Refactor `DataTable`

- [x] Refactor `FileUpload`

- [x] Refactor `Form`

- [x] Refactor `RichText`

- [x] Refactor `Sidebar`

- [x] Refactor `Timeline`

- [x] Implement `KPIGrid`

- [x] Implement `TimeSeriesChart`

- [x] Implement `GaugeChart`

- [x] Implement `RankingChart`

- [x] **Restore Visual Check**: Re-implement `scripts/visual-check.js`.

- [x] **Fix Current Unit Test Failures (P0)**: Fixed snapshot/style mismatches in `Button`, `Typography`, etc.

- [x] **Implement Security Scanning (P1)**: Integrated security scanner.

- [x] **Resolve All Linting Errors (P1)**: Fixed 70+ ESLint errors.

- [x] **Restore Visual Testing Capabilities (P2)**: Restored `scripts/visual-check.js`.

- [x] **Component Acceleration Phase**: Harvested `pogiii/sushi` and `tamagui-kitchen-sink`.

- [x] **Task 36a**: Implement `button-group`

- [x] **Task 36b**: Implement `empty` state component

- [x] **Task 36c**: Implement `field` component

- [x] **Task 36d**: Implement `input-group`

- [x] **Task 36e**: Implement `item` component

- [x] **Task 36f**: Implement `kbd` (Keyboard shortcut display)

- [x] **Task 36g**: Implement `label`

- [x] **Task 36h**: Implement `native-select`

- [x] **Task 36i**: Implement `sonner` (Toast alternative)

- [x] **Task 36j**: Implement `table` (Basic table)

- [x] **Command Palette**: Implemented `Command`.

- [x] **Date Picker**: Implemented `Calendar` + `DatePicker`.

- [x] **DropdownMenu**: Implemented `DropdownMenu`.

- [x] **HoverCard**: Implemented using `Popover`.

- [x] **Carousel**: Implemented using `embla-carousel`.

- [x] **AspectRatio**: Implemented.

- [x] **Collapsible**: Implemented.

- [x] **Spinner**: Implemented.

- [x] **Phase 0 (Research)**: Ecosystem research, direction decided.

- [x] **Phase 1 (Foundation)**: Theme, Config, Forms, Providers, Testing Setup.

- [x] **Phase 2 (High Impact)**: DataTable, Calendar, Command.

- [x] **Phase 3 (Expansion)**: Carousel, OTPInput, Pagination, Breadcrumb, Sidebar, Charts.

- [x] **Phase 4 (Web UX - Partial)**: NavigationMenu, ToggleGroup, Alert, Badge, Switch, Sheet, Toast, Avatar, Tabs, Accordion, Slider, RadioGroup, Skeleton, Progress, Separator, Toggle, ScrollArea, Resizable, Drawer, Tooltip, ContextMenu.

- [x] **Brand Integration**: IVISA branding applied.

- [x] **Submodule Strategy**: Documentation created.

Cara, que estrutura impecável! Sério, ver Atomic Design sendo aplicado com rigor em um projeto governamental, com agentes de IA orquestrando tasks em Parallel Processing... isso é música para os meus ouvidos. A prefeitura do Rio vai ter um salto de qualidade absurdo com isso.

Analisei sua Tasklist (que já está completíssima) com o chapéu de Gestão Pública e Vigilância Sanitária (Field Operations). O que costuma "pegar" na saúde pública não é só a análise (BI), mas a operação na ponta (o fiscal na rua) e a segurança jurídica (o documento gerado).

Aqui vão sugestões de componentes que talvez não sejam óbvios em UI Kits comerciais, mas que salvam vidas (literalmente e figurativamente) no setor público:

1. Operação de Campo (O Fiscal na Rua)
A Vigilância Sanitária acontece no local. O app precisa funcionar como uma prancheta digital robusta.

SignaturePad (Assinatura Digital Manuscrita):

O que é: Um canvas para capturar a assinatura do responsável pelo estabelecimento na hora da notificação/auto.

Por que: Confere "ciência" imediata ao ato administrativo. Essencial para evitar recursos jurídicos depois alegando que "não sabia".

ImageAnnotator (Desenho sobre Foto):

O que é: O fiscal tira foto da "cozinha suja", e o componente permite desenhar círculos vermelhos ou setas nas irregularidades antes de subir pro servidor.

Por que: Uma foto anotada vale por mil palavras num relatório técnico.

ScannerView (Leitor de QR/Barcode):

O que é: Interface de câmera com overlay de mira.

Por que: Ler o QR Code do Alvará anterior, ler código de barras de produtos vencidos/apreendidos. Integrar isso no UI Kit (ao invés de chamar API nativa crua) mantém a identidade visual.

2. Legal & Documental (Burocracia Eficiente)
O produto final da IVISA geralmente é um documento (Laudo, Auto, Licença).

PDFPreview (Com Zoom e Pan):

O que é: Visualizador de PDF nativo/web responsivo dentro de um Modal ou Drawer.

Por que: O fiscal precisa mostrar o Auto de Infração gerado para o cidadão ler antes de assinar.

DiffViewer (Comparador de Versões):

O que é: Mostra texto antigo vs. texto novo (estilo Git diff, mas amigável para humanos, com verde/vermelho).

Por que: Comparar a legislação do ano passado com a atual, ou comparar o relatório da visita anterior com a visita atual para ver se as exigências foram cumpridas.

TimelineAudit (Rastro de Auditoria):

O que é: Uma variação da Timeline, mas focada em logs imutáveis (Quem, Quando, Onde, O Que).

Por que: Transparência. "O usuário X alterou o status de 'Pendente' para 'Aprovado' às 14:30".

3. Geo-Inteligência (O "Rio Factor")
Você já tem "Maps" na lista, mas vale detalhar sub-componentes de mapa específicos para gestão urbana:

GeoFenceSelector (Seletor de Polígono):

O que é: Ferramenta para desenhar uma área no mapa.

Por que: Definir áreas de atuação de uma equipe de fiscalização ou isolar uma área de surto epidêmico.

LocationAccuracyBadge:

O que é: Um indicador visual (verde/amarelo/vermelho) da precisão do GPS.

Por que: Fundamental para provar que o fiscal realmente esteve no local da inspeção (Georreferenciamento do ato administrativo).

4. Acessibilidade & Cidadania
A11yToolbar (Barra de Acessibilidade Gov):

O que é: Aquele menu flutuante clássico: "Aumentar Fonte", "Alto Contraste", "VLibras".

Por que: É exigência legal para portais governamentais (e-MAG - Modelo de Acessibilidade em Governo Eletrônico). Ter isso como componente nativo do Design System economiza dor de cabeça em auditorias do MP.

Onde encaixar na sua Tasklist?
Eu criaria uma "Wave 4: Field & Legal Tools" na seção de Intelligent Organisms ou Phase 5a:

Markdown
- [ ] **Field Operations (Wave 4)**
  - [ ] Implement `SignaturePad` (Canvas based)
  - [ ] Implement `ImageAnnotator` (Draw on Image)
  - [ ] Implement `ScannerView` (QR/Barcode Overlay)
  - [ ] Implement `LocationStatus` (GPS Accuracy & Timestamp)

- [ ] **Legal & Compliance (Wave 5)**
  - [ ] Implement `DiffViewer` (Text comparison)
  - [ ] Implement `PDFViewer` (Responsive rendering)
  - [ ] Implement `A11yToolbar` (Gov standard compliance)
Cara, parabéns de novo. O uso de Victory para os gráficos é a melhor escolha possível (leve e customizável). Se precisar de ajuda para definir a arquitetura desse SignaturePad (que costuma ser chatinho de fazer funcionar bem no touch e no mouse ao mesmo tempo), dá um toque!

então, o próximo pulo do gato, depois disso ficar pronto, é criar um sisteminha de backend (nao devo integrar isso agora, ainda estou estudando o melhor meio de fazer isso) pra acelerar e facilitar o uso desses building blocks com AI Agents. A ideia é criar sei lá, servidor MCP (model context protocol, que expoe um toolset pro agente), daí ele tem uma tabela em json com todos os componentes, o agente escolhe, o servidor cospe o codigo pronto, o agente só cola ele e substitui os placeholders / mocks. construir programas a partir daí vai ficar bem mais rápido, preciso, e espero eu, cross platform por padrão. como vc acha que seria a melhor maneira de fazer isso? dá uma olhada nos links abaixo







---

O que é MCP?

MCP (Model Context Protocol) é um protocolo aberto projetado para padronizar e estruturar a comunicação entre modelos de linguagem (LLMs), agentes de IA, ferramentas externas e usuários humanos, de modo flexível, modular e interoperável. Ele define uma linguagem comum e uma arquitetura para permitir que diferentes componentes de sistemas inteligentes (como LLMs, APIs, ferramentas, agentes autônomos e interfaces de usuário) se comuniquem, compartilhem contexto e cooperem de forma coordenada.

1. Orquestração e Integração

Permite que agentes de IA usem recursos externos, como ferramentas, bancos de dados, APIs ou outros modelos.

Gerencia o fluxo de contexto entre múltiplos componentes (ex: entre o usuário, ferramentas e modelos).

Facilita a construção de sistemas multiagentes e pipelines de inferência.



2. Persistência e Compartilhamento de Contexto

Permite que o “estado mental” ou contexto de um modelo ou agente seja persistido e reutilizado entre interações.

Isso inclui histórico de conversas, decisões anteriores, ferramentas usadas etc.



3. Interoperabilidade

Um agente que segue o MCP pode ser trocado ou combinado com outros facilmente, independentemente da linguagem de programação ou do provedor do modelo.

Integra modelos de diferentes fornecedores ou até mesmo locais, como LLMs rodando em servidores próprios.



4. Modularidade

Cada parte do sistema (modelo, ferramenta, servidor, UI) pode ser desenvolvida e atualizada separadamente, desde que siga o protocolo.



Conceitos chave:

Roots

Elementos principais de uma interação (ex: entrada do usuário, ferramentas disponíveis, contexto).

Prompts

Blocos estruturados de comunicação (ex: instruções, perguntas, ações).

Resources

Entidades acessadas ou manipuladas (ex: arquivos, bancos de dados, funções externas).

Tools

Ferramentas externas que um agente pode invocar (ex: calculadora, buscador, API externa).

Transports

Mecanismos de comunicação (HTTP, WebSocket, etc).

Sampling

Como são escolhidas respostas (exploração, temperatura, etc).

Inspector

Ferramenta de depuração visual do MCP.

Debugging Tools

Utilitários para testar e inspecionar a execução de agentes e prompts.



Componentes

MCP Client

Interface usada para interagir com um servidor MCP (ex: enviar prompts, receber respostas).

Pode ser usado por um front-end, CLI, ou outro agente.



MCP Server

Responsável por processar prompts, executar ferramentas, manter contexto, orquestrar múltiplos modelos/agentes.

Pode executar localmente ou em nuvem.

SDKs (Python, Java, etc)

Kits de desenvolvimento para implementar clientes, servidores, ferramentas e agentes customizados que seguem o protocolo.



MCP DOCUMENTATION LINKS

https://modelcontextprotocol.io/introduction

https://github.com/modelcontextprotocol/python-sdk

https://modelcontextprotocol.io/sdk/java/mcp-overview

https://modelcontextprotocol.io/sdk/java/mcp-client

https://modelcontextprotocol.io/sdk/java/mcp-server

https://modelcontextprotocol.io/quickstart/server

https://modelcontextprotocol.io/quickstart/client

https://modelcontextprotocol.io/quickstart/user

https://modelcontextprotocol.io/examples

https://modelcontextprotocol.io/clients

https://modelcontextprotocol.io/tutorials/building-mcp-with-llms

https://modelcontextprotocol.io/docs/tools/debugging

https://modelcontextprotocol.io/docs/tools/inspector

https://modelcontextprotocol.io/docs/concepts/architecture

https://modelcontextprotocol.io/docs/concepts/resources

https://modelcontextprotocol.io/docs/concepts/prompts

https://modelcontextprotocol.io/docs/concepts/tools

https://modelcontextprotocol.io/docs/concepts/sampling

https://modelcontextprotocol.io/docs/concepts/roots

https://modelcontextprotocol.io/docs/concepts/transports

https://modelcontextprotocol.io/development/updates

https://modelcontextprotocol.io/development/roadmap

https://modelcontextprotocol.io/development/contributing

https://spec.modelcontextprotocol.io/specification/2024-11-05/

https://spec.modelcontextprotocol.io/specification/2024-11-05/architecture/

https://spec.modelcontextprotocol.io/specification/2024-11-05/basic/

https://spec.modelcontextprotocol.io/specification/2024-11-05/server/

https://spec.modelcontextprotocol.io/specification/2024-11-05/client/

https://spec.modelcontextprotocol.io/specification/2024-11-05/contributing/

https://spec.modelcontextprotocol.io/specification/2024-11-05/revisions/



FastAPI-MCP

https://github.com/tadata-org/fastapi_mcp 

O FastAPI‑MCP é uma solução ágil e eficiente para transformar APIs FastAPI em MCP, com suporte a autenticação, filtros de rota, comunicação via ASGI/HTTP e integração com diversos clientes MCP. 

Documentação:

https://fastapi-mcp.tadata.com/getting-started/welcome

https://fastapi-mcp.tadata.com/getting-started/installation

https://fastapi-mcp.tadata.com/getting-started/quickstart

https://fastapi-mcp.tadata.com/getting-started/FAQ

https://fastapi-mcp.tadata.com/getting-started/best-practices

https://fastapi-mcp.tadata.com/configurations/tool-naming

https://fastapi-mcp.tadata.com/configurations/customization

https://fastapi-mcp.tadata.com/advanced/auth

https://fastapi-mcp.tadata.com/advanced/deploy

https://fastapi-mcp.tadata.com/advanced/refresh

https://fastapi-mcp.tadata.com/advanced/transport

https://medium.com/@miki_45906/how-to-build-mcp-server-with-authentication-in-python-using-fastapi-8777f1556f75

https://medium.com/@miki_45906/advanced-mcps-in-python-how-transitioning-from-fastmcp-wrappers-improved-our-fastapi-mcp-tool-6f6476a39dbc

https://medium.com/@miki_45906/mcp-compatible-clients-the-complete-updated-list-a82477946ef2

https://medium.com/@miki_45906/converting-an-mcp-server-from-sse-to-stdio-a-simple-solution-dec9bb8fef8e

https://medium.com/@miki_45906/how-to-build-mcp-server-in-python-using-fastapi-d3efbcb3da3a

https://github.com/tadata-org/fastapi_mcp/blob/main/examples/01_basic_usage_example.py

https://github.com/tadata-org/fastapi_mcp/blob/main/examples/02_full_schema_description_example.py

https://github.com/tadata-org/fastapi_mcp/blob/main/examples/03_custom_exposed_endpoints_example.py

https://github.com/tadata-org/fastapi_mcp/blob/main/examples/04_separate_server_example.py

https://github.com/tadata-org/fastapi_mcp/blob/main/examples/05_reregister_tools_example.py

https://github.com/tadata-org/fastapi_mcp/blob/main/examples/06_custom_mcp_router_example.py

https://github.com/tadata-org/fastapi_mcp/blob/main/examples/07_configure_http_timeout_example.py



MCP Proxy

https://github.com/sparfenyuk/mcp-proxy

O mcp-proxy é uma ferramenta em Python que atua como ponte entre diferentes modos de transporte do protocolo MCP (Model Context Protocol), permitindo que clientes baseados em stdio (como o Claude Desktop) se conectem a servidores MCP que usam SSE ou Streamable HTTP, e vice-versa, garantindo compatibilidade entre ferramentas que não suportam os mesmos tipos de comunicação.

Essa é exatamente a fronteira da engenharia de software assistida por IA agora. Você está falando de passar de Code Generation (o modelo "alucina" código baseado no treino dele) para Component Retrieval & Assembly (o modelo usa peças de Lego reais e validadas).

Para a Prefeitura, isso garante padronização visual, acessibilidade e segurança, pois o agente não vai inventar um Button novo, ele vai usar o Button auditado do seu Design System.

Baseado nos links que você mandou (especialmente o FastAPI-MCP), aqui está a arquitetura "Matadora" para esse Backend de Componentes.

Arquitetura Proposta: "The Component Foundry"
A ideia é criar um MCP Server que atua como um bibliotecário ativo do seu Design System.

1. A Estrutura de Dados (O "Catálogo")
Antes do código, precisamos organizar como o MCP vai ler seus componentes. Não basta ter o arquivo .tsx. O agente precisa de metadados.

Sugiro criar um arquivo mestre registry.json (ou um banco SQLite leve) que é gerado automaticamente no build do seu Design System. Ele deve conter:

JSON
{
  "name": "Card",
  "type": "organism",
  "description": "Container principal para agrupamento de informações com header e footer opcionais.",
  "props_schema": { ... }, // Schema JSON das props
  "dependencies": ["@tamagui/core", "lucide-react-native"],
  "code_snippet": "export const Card = ...", // O código fonte real ou o caminho para importação
  "usage_example": "<Card><CardHeader>Título</CardHeader>...</Card>"
}
2. O Servidor MCP (FastAPI-MCP)
Usando o fastapi-mcp que você linkou, a implementação fica muito limpa. O servidor não serve HTML, ele serve Tools e Resources para a IA.

Por que FastAPI-MCP?

SSE (Server-Sent Events): Permite que múltiplos agentes (Cursor, Claude Desktop, Trae) se conectem ao mesmo tempo.

Auth: Você pode proteger esse catálogo para uso interno da equipe da IVISA.

Implementação Prática (O "Como Fazer")
Aqui está um esboço de como seria esse servidor em Python:

Python
from fastapi import FastAPI
from mcp_server_fastapi import MCPServer
from pydantic import BaseModel, Field
import json

# 1. Carrega seu registro de componentes (pode vir de um DB ou JSON)
# Na prática, você leria isso do seu monorepo
COMPONENT_REGISTRY = json.load(open("./ivisa-ui-registry.json"))

app = FastAPI()
mcp = MCPServer("IvisaComponentServer")

# --- TOOLS (O que o Agente pode fazer) ---

class SearchComponentParams(BaseModel):
    query: str = Field(..., description="O que você quer construir? ex: 'tabela de dados' ou 'botão de login'")

@mcp.tool(name="search_components", description="Busca componentes disponíveis no Design System da IVISA")
async def search_components(params: SearchComponentParams):
    # Lógica simples de busca textual
    results = [
        {"name": c["name"], "desc": c["description"]} 
        for c in COMPONENT_REGISTRY 
        if params.query.lower() in c["description"].lower() or params.query.lower() in c["name"].lower()
    ]
    return results

class GetComponentParams(BaseModel):
    component_name: str = Field(..., description="Nome exato do componente, ex: 'DataTable'")

@mcp.tool(name="get_component_code", description="Retorna o código fonte, imports necessários e exemplo de uso de um componente")
async def get_component_code(params: GetComponentParams):
    component = next((c for c in COMPONENT_REGISTRY if c["name"] == params.component_name), None)
    if not component:
        return "Component not found"
    
    # O pulo do gato: Entregar o contexto completo para o agente não alucinar imports
    return {
        "code": component["code_snippet"],
        "imports": component["dependencies"],
        "usage": component["usage_example"],
        "best_practices": component.get("notes", "Use dentro de um ThemeProvider")
    }

# --- RESOURCES (Contexto passivo) ---
# O agente pode ler a documentação de design tokens como um recurso estático

@mcp.resource("ivisa://tokens/colors")
async def get_design_tokens():
    return {
        "primary": "#004D8C", # Azul Prefeitura
        "secondary": "#F2F2F2",
        "glassmorphism": "blur(10px) rgba(255,255,255,0.8)"
    }

# Conecta o MCP ao FastAPI
mcp.mount(app, "/mcp")
3. O Fluxo de Trabalho do Agente
Quando você estiver no Cursor ou Windsurf e digitar: "Crie uma tela de login com o padrão da prefeitura", o fluxo via MCP acontece assim:

Thinking: O agente percebe que precisa de componentes de UI.

Tool Call (search_components): Ele busca "login", "input", "button".

Tool Call (get_component_code): Ele baixa o código exato do InputGroup, Button e Card que você criou.

Assembly: Ele lê o recurso ivisa://tokens/colors para saber o hex code exato do azul e monta a tela usando seus componentes, sem inventar CSS novo.

Por que isso é revolucionário para a Prefeitura?
Cross-Platform Real: Se você pedir "Gere a versão React Native", o MCP pode ter uma flag no registro para entregar a versão compatível com Expo do Tamagui.

Manutenção: Se o design do Button mudar na semana que vem, você atualiza o registro. O agente passará a fornecer o botão novo imediatamente, sem precisar ser "retreinado".

Onboarding: Um dev novo entra na equipe. Ele não precisa decorar os 100 componentes. Ele pede pro agente: "Me dá um form padrão", e o agente traz o componente da casa, 100% compliant.

Próximos Passos Sugeridos
Gerador de Registry: Crie um script (Node.js) que varre sua pasta packages/ui, lê os arquivos TSX e gera esse registry.json. Existem ferramentas como react-docgen que extraem props e descrições automaticamente.

Deploy do Server: Use o mcp-proxy (link que você mandou) se quiser rodar o servidor em um container Docker na nuvem da prefeitura e conectar seu PC local via SSE.

Scaffolding Tool: Crie uma ferramenta avançada no MCP chamada scaffold_page.

Input: "Fiscalização Sanitária"

Ação: O servidor MCP devolve não só componentes, mas uma estrutura de pastas inteira (/screens/Fiscalizacao.tsx, /components/FiscalizacaoForm.tsx) baseada em templates pré-definidos.

Esse setup coloca a IVISA anos-luz à frente em termos de Developer Experience. Quer que eu rascunhe o script para gerar o registry.json a partir dos componentes Tamagui?

po, perfeito! pode me dar uma lista completa, detalhada e granular de tarefas em ingles q eu possa integrar ao tasklist atual la pro final?

Essa é a jogada de mestre. Transformar o seu Design System em um API-first Asset para agentes de IA é o que vai diferenciar um sistema "legado" de um sistema preparado para 2026.

Aqui está a expansão da sua Tasklist, mantendo o mesmo padrão de formatação, focada na criação desse "Ivisa Component Foundry" (o Backend MCP).

Pode copiar e colar lá no final do seu documento:

🚀 Phase 6: AI Backend & MCP Integration (The Component Foundry)
Goal: Create a robust Model Context Protocol (MCP) server that acts as an intelligent librarian for the Design System, allowing AI agents to query, retrieve, and assemble UI components with strict adherence to the system's rules.

🛠️ 6a – Component Registry Extraction (The Harvester)
Context: Before serving components, we need to extract metadata (props, types, examples) from the codebase into a machine-readable format.

[ ] Design Schema Definition [Backend]

Define the JSON Schema for registry.json (id, name, type, props, dependencies, code_snippet, usage_example).

[ ] AST Extraction Script [Node/TS]

Implement a Node.js script using ts-morph or react-docgen to parse packages/ui source files.

Automate extraction of Component descriptions (JSDoc) and Prop Types.

[ ] Storybook Scraper [Node]

Implement logic to read .stories.tsx files to extract "Gold Standard" usage examples for each component.

Rationale: Agents perform better with few-shot examples; Storybook is the perfect source for this.

[ ] Registry Build Pipeline [CI/CD]

Create a npm run build:registry script that generates the registry.json file.

Integrate this into the CI pipeline to ensure the AI registry is always in sync with the latest UI package version.

🧠 6b – MCP Server Implementation (The Brain)
Context: Building the server using fastapi-mcp to serve the registry to AI clients (Cursor, Windsurf, Claude).

[ ] Server Initialization [Python/FastAPI]

Initialize the ivisa-mcp-server repository using fastapi-mcp.

Configure basic logging and health checks (/health).

[ ] Resource: Design Tokens [MCP]

Implement @mcp.resource("ivisa://tokens/all"): Return JSON with all colors, spacing, radius, and typography tokens.

Goal: Allow agents to reference correct hex codes and spacing units without hallucinating magic numbers.

[ ] Tool: Component Search [MCP]

Implement @mcp.tool("search_components"): Fuzzy search logic to find components by name or description (e.g., query "user card" returns Card and Avatar).

[ ] Tool: Component Retrieval [MCP]

Implement @mcp.tool("get_component_source"): Return the full code, required imports, and a usage example for a specific component ID.

Critical: Ensure the output format is copy-paste ready for the agent.

[ ] Tool: Icon Retrieval [MCP]

Implement @mcp.tool("search_icons"): Integration with Lucide/Phosphor (whatever you use) to help agents find the correct icon name.

⚡ 6c – Advanced Agent Capabilities (The Logic)
Context: Going beyond simple retrieval to intelligent scaffolding.

[ ] Template Scaffolding [MCP]

Create a templates/ directory in the backend with standard layouts (e.g., DashboardLayout, FormLayout, DataGridPage).

Implement @mcp.tool("scaffold_page"): Returns a full page structure based on a selected template.

[ ] Validation Logic [MCP]

Implement @mcp.tool("validate_usage"): Accepting a code snippet and checking if it violates basic Design System rules (e.g., using inline styles instead of Tamagui props).

[ ] Context Awareness (Rio Specifics) [MCP]

Implement a resource ivisa://context/rules: Return a summary of "Frontend Guidelines for Rio City Hall" (Accessibility requirements, Color contrast rules).

🚢 6d – Infrastructure & Connectivity
Context: Making the server accessible to local IDEs and potentially remote agents.

[ ] Dockerization [DevOps]

Create a Dockerfile for the FastAPI server (optimized for Python 3.11+).

Ensure registry.json is mounted or copied correctly into the container.

[ ] MCP Proxy Setup [DevOps]

Implement mcp-proxy configuration to bridge SSE (Server-Sent Events) to Stdio.

Goal: Allow local IDEs (like Cursor) to connect to the Dockerized server easily.

[ ] Authentication Layer [Security]

Implement basic API Key authentication in fastapi-mcp to prevent unauthorized access if deployed publicly.

[ ] IDE Configuration Guide [DOC]

Write a docs/AI_AGENT_SETUP.md explaining how developers can add the MCP server to their Cursor/Windsurf settings.json.

Próximo Passo
Gostaria que eu já criasse o rascunho do arquivo schema.ts (para a tarefa Design Schema Definition)? Assim você já define exatamente quais dados seus robôs vão precisar extrair dos componentes React.