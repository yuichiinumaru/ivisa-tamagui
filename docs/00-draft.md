Perdao faltaram alguns prints, mas veja que tem uma lista enorme de componentes, agora preciso enriquecer mais. Also, tem um monte de tipos de charts doidos do ShadCN q eu queria botar tbm. Queria uma ajuda nisso, de onde trabalhar pra melhorar primeiro. Ta bem cru, mas a parte mais chata de fazer funcionar foi eu acho, agora é fazer ele ficar bom

[screenshots]

=======================================

Isso está ficando muito bom! Dá para ver que a infraestrutura (a parte "chata" de configurar Storybook, rotas, imports e garantir que o CSS do Tailwind carregue) está sólida. Ter essa lista lateral já populada é um marco enorme.

Como você disse que está "cru" e quer enriquecer (especialmente com os gráficos), aqui está um roteiro prático do que priorizar para transformar isso de um "catálogo de componentes" para um "Showcase de UI de alto nível":

### 1. Onde Trabalhar Primeiro (Low Hanging Fruit)

Antes de criar gráficos complexos, garanta que a apresentação base venda o seu peixe:

* **Variações de Estado (Obrigatório):**
    * No seu *Login Form* (Imagem 2), adicione uma variante com **Erro**. Mostre como o `Input` fica vermelho e a mensagem de erro aparece embaixo. UI Kits são julgados por como lidam com falhas, não só com o "caminho feliz".
    * No *Button*, mostre o estado `Loading` (com um spinner).
* **"Show Code" / Copy-Paste:**
    * Se essa plataforma for para outros devs usarem, a feature mais importante é um botão de **"Copiar Código"** (JSX/TSX) embaixo de cada exemplo. Se você já tem os `Controls` (como vi na Imagem 3), o próximo passo é expor o *source code* dinâmico.
* **Theming (Dark Mode):**
    * As suas prints estão todas no Light Mode. O Shadcn brilha no Dark Mode. Adicionar um *toggle* de tema na navbar superior vai dobrar a percepção de qualidade do projeto instantaneamente.

---

### 2. O "Ouro": Gráficos Shadcn (Charts)

Você mencionou que quer os "charts doidos". O Shadcn usa **Recharts** por baixo dos panos, mas com uma camada de abstração que permite estilizar via CSS variables.

Aqui estão os gráficos que você deve implementar para impressionar (em ordem de impacto visual):

#### A. Area Chart (Com Gradiente)
O gráfico de barras (Imagem 3) é funcional, mas "seco".
* **O que fazer:** Implemente um `AreaChart`.
* **O truque:** Use `<defs>` e `<linearGradient>` dentro do componente para criar aquele efeito de *fade* embaixo da linha. Isso dá um ar muito moderno de "Dashboard Financeiro".
* **Diferencial:** Faça um "Stacked Area Chart" para mostrar comparação de categorias ao longo do tempo.

#### B. Radar Chart (Spider Chart)
* **Por que:** É visualmente distinto e ótimo para comparar atributos (ex: stats de um personagem de RPG ou métricas de performance: Performance, SEO, Acessibilidade).
* **Dica:** Use cores translúcidas (com opacidade) para os preenchimentos se sobreporem.

#### C. Radial Bar Chart (Gauge)
* **Uso:** Excelente para mostrar progresso único (ex: "75% da meta atingida") ou armazenamento usado.
* **Estilo:** Tente o estilo onde o fundo do círculo é cinza claro e a barra de progresso tem uma cor vibrante (ou gradiente).

#### D. Tooltips Customizados
Nas suas imagens, o gráfico de barras está limpo.
* **Enriquecimento:** O segredo dos charts do Shadcn é o `ChartTooltip` e `ChartTooltipContent`. Customize eles para mostrar não só o valor, mas um ícone ou um indicador de % de crescimento em relação ao mês anterior.

---

### 3. Organismos Complexos (Onde o valor real está)

Você tem muitos componentes atômicos (botão, input, toast). Para enriquecer o portfólio, crie exemplos de **Páginas ou Organismos completos**:

1.  **Dashboard Shell:** Junte o seu *Sidebar*, *Header*, e uma *Grid* de conteúdo.
2.  **Settings Page:** Use o componente de *Tabs* (Imagem 8) na vertical ou horizontal para criar uma página de configurações completa (Perfil, Conta, Aparência).
3.  **Data Table Real:**
    * Vi que você tem `DataTable` na lista. A implementação padrão do Shadcn/TanStack Table é poderosa.
    * **Desafio:** Adicione *Filtros Facetados* (ex: filtrar por Status com checkboxes), *Paginação* e *Ordenação*. É chato de fazer, mas é o que diferencia um Júnior de um Sênior.

### 4. Sugestão de Layout para os Exemplos

Nas imagens, os componentes estão soltos num fundo branco enorme.
* **Dica de Design:** Envolva os exemplos menores (como Toast, Stepper, Switch) em um **Card** com uma borda sutil. Isso delimita a área do componente e deixa a apresentação menos "vazia".

---

**Próximo passo sugerido:**
Você quer que eu gere o código base para um **Area Chart com Gradiente** usando a sintaxe nova do Shadcn (com `ChartConfig` e `ChartContainer`), ou prefere focar em montar uma "Dashboard View" combinando esses componentes que você já tem?


=======================================

Exatamente! Eu tava com essa ideia de trazer mais organismos maneiros, mas como a parte mais chata era organizar e lançar um monte de coisa com dependência conflitante, eu foquei nos atomos primeiro.

Dai agora organizando as ideias de upgrade por ordem de criticidade
- Ainda falta os charts foda do Shadcn, mas tenho que ver ainda se precisa de atomos e moleculas e pegar esses caras se necessário 
- mas dai era bom dar um up na parte de stories e opções de atomos e moleculas antes pra deixar mais robusto

De forma geral, quais são as coisas q fazem um BOM storybook, da mais basica à mais avançada, que nao podemos errar?

=======================================

Essa abordagem de "Átomos primeiro" é a mais sensata. Se a base (botões, inputs, cards) estiver frágil, os organismos (dashboards, formulários complexos) vão quebrar ou ficar inconsistentes rapidinho.

Para transformar seu Storybook de um "visualizador de componentes" em uma **ferramenta de documentação robusta**, aqui está o checklist do que é essencial, dividido por maturidade.

Se você seguir essa escada, vai cobrir exatamente o que precisa antes de pular para os charts complexos.

---

### Nível 1: O Básico "Higiênico" (Não pode faltar)
*Sem isso, o Storybook é só uma vitrine estática.*

1.  **Args e Controls (Adeus Hardcode):**
    * Nunca deixe texto ou booleanos fixos no código da story.
    * **Meta:** Tudo que é prop do React (`label`, `disabled`, `variant`, `isLoading`) deve ser controlável no painel lateral.
    * *Exemplo:* Em vez de criar uma story "ButtonDisabled", use a story "Default" e mude o controle `disabled` para `true`.
2.  **Autodocs (Documentação Grátis):**
    * Adicione `tags: ['autodocs']` no default export da story.
    * Isso gera aquela aba "Docs" automática que mostra a tabela de props, tipos e descrição. É vital para quem vai consumir a lib.
3.  **Actions (Console Log visual):**
    * Configure os eventos (`onClick`, `onSubmit`, `onChange`) para aparecerem na aba "Actions".
    * *Por que?* Para garantir que o botão está realmente clicável e disparando o evento, não apenas "parecendo" ativo.

### Nível 2: A Experiência do Desenvolvedor (Onde brilha)
*Aqui você facilita a vida de quem vai usar (inclusive a sua no futuro).*

4.  **Source Code Limpo:**
    * Garanta que o botão "Show Code" mostre o código limpo que o dev vai copiar (`<Button variant="outline">Texto</Button>`), e não o código cheio de decorators do Storybook.
5.  **Decorators de Layout (Centralização):**
    * Componentes como `Card` ou `Form` não devem tocar nas bordas da tela.
    * Use um `Decorator` global ou local para dar padding ou centralizar o componente na tela de preview.
    * *Dica:* Para os **Charts**, você vai precisar de um Decorator que force uma largura/altura fixa (ex: `w-[500px] h-[300px]`), senão o gráfico responsivo pode colapsar ou explodir na tela.
6.  **Variantes Explícitas:**
    * Embora os *Controls* sejam legais, deixe as variantes mais críticas já expostas.
    * Exemplo: Tenha stories separadas para `Destructive Button`, `Ghost Button`, `Input with Error`. Quem entra quer ver o visual rápido, não ficar brincando de configurar.

### Nível 3: O Padrão Ouro (Profissional)
*Isso diferencia um projeto de hobby de um Design System sério.*

7.  **Dark Mode / Theming Integrado:**
    * **Crítico para Shadcn:** Instale o `storybook-dark-mode` ou configure o toggle nativo para trocar a classe `dark` no elemento `<html>` ou `<body>` do iframe.
    * Seu componente TEM que funcionar nos dois modos sem o dev precisar fazer malabarismo.
8.  **Addon de Acessibilidade (a11y):**
    * Instale o `@storybook/addon-a11y`.
    * Ele cria uma aba que grita se o contraste estiver ruim ou se faltar um `aria-label`. Isso "audita" seus componentes automaticamente.
9.  **Play Functions (Testes de Interação):**
    * Isso é o supra-sumo. Em vez de só renderizar o componente, você escreve um script dentro da story que clica, digita e valida.
    * *Exemplo:* O `Combobox` ou `Dropdown`. A story carrega, a play function clica no trigger, abre o menu e seleciona uma opção. O snapshot é tirado com o menu ABERTO.

---

### Sobre os "Charts Doidos" e Dependências

Para os gráficos do Shadcn, você **não precisa** de muitos átomos novos, mas precisa preparar o terreno dos **Moleculas/Wrappers**:

1.  **Card Wrapper:** Quase todo gráfico do Shadcn vive dentro de um componente `Card` (com `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`).
    * *Tarefa:* Garanta que seus componentes de `Card` estejam 100% (com stories de card vazio, card com footer, etc).
2.  **Tooltip Provider:** Os gráficos usam muito tooltips. Verifique se o `Tooltip` atômico está funcionando e se o z-index dele não está ficando preso dentro do container do gráfico (problema clássico de CSS).

**Resumo do plano de ataque:**
1.  **Hoje:** Revise os átomos (Button, Input, Card). Ative o `autodocs`, limpe os `args` e instale o addon de `a11y`.
2.  **Amanhã:** Configure o **Dark Mode** no Storybook. Sem isso, os gráficos vão ficar estranhos.
3.  **Depois:** Implemente o primeiro gráfico (`BarChart`) dentro de um `Card`, usando um Decorator para limitar o tamanho.

Quer ajuda para configurar o **Dark Mode** no `.storybook/preview.tsx` para ele conversar direitinho com o Tailwind? É onde a maioria trava.

=======================================

Excelente. O que alem da lista q vc mandou não pode faltar nos atomos e moleculas, pra construir bons organismos facilmente?

Vamos pegar esse screenshot, é de um menubar, ta tosco ainda. O que tem que ter idealmente num cara desse? Que tipos de variação e exemplos, controls actions interactions

=======================================


Para transformar esse `Menubar` de "texto solto na tela" para um componente profissional e preparar o terreno para organismos complexos, você precisa focar em **Composição** e **Densidade de Informação**.

O segredo para construir organismos facilmente depois é garantir que seus átomos/moléculas suportem **conteúdo aninhado complexo** sem quebrar o layout.

Aqui está o diagnóstico do `Menubar` e a lista do que não pode faltar nos seus átomos:

-----

### 1\. O Caso Específico: Melhorando o `Menubar`

Olhando seu print, ele parece "tosco" porque está faltando a hierarquia visual e a funcionalidade que esperamos de um menu de aplicativo desktop.

Para deixar ele "Nível Profissional" no Storybook, você precisa criar stories que demonstrem:

#### A. Variações Visuais (Stories)

1.  **Complex Example (Obrigatório):** Não faça só "File, Edit". Faça um menu real completo.
      * *Estrutura:* Ícone à esquerda + Texto + Atalho de teclado (`⌘P`) à direita.
      * *Por que:* Isso testa se o seu flexbox está alinhando ícones, texto e atalhos corretamente.
2.  **Nested Submenus:**
      * Crie um item "Share" que abre um submenu "Email", "Twitter".
      * *Teste:* Garanta que o submenu não fique cortado pela borda da tela (o Radix cuida disso, mas o CSS pode estragar).
3.  **Stateful Items (Checkboxes & Radios):**
      * Adicione um menu "View" com itens `CheckboxItem` (ex: "Show Sidebar" marcado) e `RadioGroup` (ex: Theme: "Light", "Dark").
      * Isso é vital para *Settings Pages*.

#### B. Controls & Args

No painel lateral, você deve ser capaz de controlar:

  * `loop`: (boolean) Se chegar no final da lista, volta pro topo?
  * `disabled`: Desabilitar o menu inteiro ou itens específicos.

#### C. Actions & Interactions

  * **Keyboard Navigation:** O `Menubar` deve ser navegável por setas. Use a função `play` do Storybook para simular: *Tab para focar -\> Seta Baixo para abrir -\> Seta Direita para submenu*.

-----

### 2\. Regra de Ouro para Átomos e Moléculas

Para que seus organismos (Dashboard, Forms) sejam fáceis de montar, seus átomos precisam ter essas características "invisíveis":

#### A. O "Slot Pattern" (`asChild`)

Isso é crucial no Shadcn. Seus botões e itens de lista devem aceitar o padrão `asChild`.

  * *O Problema:* As vezes você quer que um botão seja um `<Link>` do Next.js, ou um `<a>` simples.
  * *A Solução:* Se o componente suporta `asChild`, você pode fazer isso sem quebrar o estilo. Se não suportar, você vai sofrer montando a Sidebar.

#### B. Prefixos e Sufixos (Slots de Ícone)

Todo input, botão ou item de menu decente deve ter props ou slots para:

  * `leftIcon` (ou `startContent`): Para ícones de busca, user, etc.
  * `rightIcon` (ou `endContent`): Para setas, atalhos de teclado (⌘K), spinners de loading.
  * *Teste:* Coloque um ícone grande e um pequeno. O texto alinha no centro verticalmente? Se não, corrija agora.

#### C. Truncamento de Texto

Em organismos reais, o texto vai estourar.

  * Seus átomos de texto (ou itens de lista) devem ter uma variante ou prop `truncate` que aplica `text-overflow: ellipsis;`.
  * Sem isso, uma tabela quebra inteira quando vem um nome muito longo do backend.

#### D. Estados de Feedback Integrados

Não espere o organismo para tratar erros.

  * **Input:** Deve ter a prop `error` (boolean ou string) que já pinta a borda de vermelho e mostra o ícone de alerta.
  * **Avatar:** O que acontece se a imagem falhar? O átomo deve ter um *fallback* (iniciais "JD" ou ícone de user) já configurado.

-----

### Exemplo Prático: Código para o Story do Menubar

Aqui está como um story rico do `Menubar` deveria se parecer para ser útil (usando o formato CSf3):

```tsx
// Menubar.stories.tsx
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "./menubar"; // Ajuste seus imports

export const ComplexExample = {
  render: () => (
    <Menubar className="w-fit border rounded-md shadow-sm">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled>Share (Disabled)</MenubarItem>
          <MenubarSeparator />
          <MenubarItem className="text-red-600 focus:text-red-600 focus:bg-red-50">
            Delete...
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      {/* Adicione outros menus (Edit, View) aqui */}
    </Menubar>
  ),
};
```

**Próximo Passo:**
Quer que eu gere o código desse story completo com as sub-opções de "View" (Checkboxes e Radios) para você copiar e colar e ver a mágica acontecer no seu Storybook? Isso vai dar outra cara para o print.


=======================================

Hahaahaha sim! Música boa começa afinando os instrumentos!
Daí excelente, vou fazer esse esquema que voce sugeriu! Ai vamos supor que este algoritmo trnha sido executado para os atomos, como seria algoritmo de upgrade de moleculas?

=======================================

Música para os meus ouvidos! Se os átomos são as notas afinadas, as moléculas são os **acordes**. Se um acorde desafina, a música inteira cai, não importa quão boa seja a nota individual.

Enquanto o algoritmo dos átomos foca em *integridade interna*, o algoritmo das moléculas foca em **harmonia e comunicação**.

Aqui está o **"Protocolo de Orquestração de Moléculas"**:

---

### O Algoritmo: Protocolo de Upgrade de Moléculas

#### 1. O Teste de Colisão (Layout & Spacing)
*Átomos são egoístas; eles não sabem quem está do lado. A molécula é o juiz que impede que eles se matem.*

* [ ] **Validação de Alinhamento Vertical:** Coloque seus átomos lado a lado (ex: Ícone + Texto + Botão). Trace uma linha horizontal no meio. O centro ótico de todos bate?
    * *Erro comum:* O `Button` tem 40px de altura, mas o `Input` tem 38px. O desalinhamento de 1px é visível. Corrija no container da molécula (`items-center`).
* [ ] **A "Zona de Respiro" (Gaps):** Nunca use margens nos átomos (`mr-2`). A molécula deve controlar o espaço usando `gap` no Flexbox ou Grid.
    * *Check:* Se eu remover o átomo do meio, o espaço entre o primeiro e o terceiro fica duplo? (Se sim, você usou margin. Se não, usou gap. Ponto pra você).
* [ ] **Teste de "Esmagamento":** O que acontece se a molécula for colocada num container de 200px?
    * Quem encolhe? (O input?)
    * Quem mantém o tamanho fixo? (O botão de ícone?)
    * Quem quebra linha? (O texto?)
    * *Ação:* Defina `flex-shrink-0` nos elementos que NÃO podem ser esmagados (ícones, avatares).

#### 2. Unificação de Estado (O "Puppeteer Pattern")
*Uma molécula tem que parecer um organismo único, não um saco de gatos.*

* [ ] **Propagação de Estado de Erro:** Se a molécula "SearchField" der erro:
    * O `Label` fica vermelho?
    * A borda do `Input` fica vermelha?
    * O `Icon` de alerta aparece?
    * *Regra:* O estado `error` deve ser passado para a molécula pai, que distribui para os átomos filhos. Não obrigue o dev a setar `error` em 3 lugares diferentes.
* [ ] **Tratamento de Loading Unificado:** Se a molécula está carregando (ex: um Card de Login):
    * O botão fica `disabled` e com spinner?
    * Os inputs ficam `readOnly` para o usuário não digitar?
    * Tudo isso deve acontecer com **uma única prop** na molécula: `isLoading`.

#### 3. A "Fachada" de API (DX Simplificada)
*Ninguém quer importar 10 sub-componentes só para fazer um Search Bar simples.*

* [ ] **Exportação Composta vs. Pronta:**
    * *Shadcn Way:* Você deve permitir a composição (`<Card><CardHeader>...</CardHeader></Card>`).
    * *Molecules Upgrade:* Crie presets "Prontos para Uso" para os casos de 80%.
    * *Exemplo:* Crie um `<UserCard user={data} />` que internamente já monta o Avatar + Nome + Badge, sem o dev ter que montar o LEGO toda vez.
* [ ] **Smart Defaults:** Se a molécula é um `DatePicker` com presets (Ontem, Hoje, Amanhã), o preset "Hoje" já deve vir pré-selecionado ou configurado para facilitar?

#### 4. O Teste do "Slot Coringa"
*Moléculas rígidas morrem cedo. Moléculas flexíveis evoluem.*

* [ ] **Extensibilidade de Ações:** Imagine um `ListTile` (Avatar + Nome + Ação).
    * Hoje a ação é um botão de "Deletar".
    * Amanhã pode ser um `Switch`, um `Checkbox` ou um `Menu Kebab`.
    * *Ação:* Garanta que a área de ação da molécula aceite `ReactNode` genérico, não apenas um tipo específico de componente.

#### 5. Simulação de Realidade (Skeleton & Async)
*Moléculas geralmente dependem de dados que ainda não chegaram.*

* [ ] **Skeleton Screen Integrado:** A molécula deve ter uma variante (ou story) que renderiza sua versão de esqueleto.
    * Não use um bloco cinza genérico. Use um esqueleto que imita o layout da molécula (uma bola para o avatar, uma barra para o título).
    * *Dica Pro:* No Storybook, crie um controle `loading: true` que troca o componente real pelo Skeleton automaticamente.

---

### Exemplo Prático: Upgrade na Molécula "Comment Item"
*(Avatar + Nome + Data + Texto do Comentário + Ações)*

1.  **Layout:** O texto do comentário é longo. Ele empurra as ações para fora da tela? (Teste de Esmagamento). O Avatar fica espremido oval? (Fixar `shrink-0`).
2.  **Estado:** Se o comentário falhar ao ser enviado, o texto fica com opacidade reduzida e aparece um botão "Tentar novamente"? (Orquestração de Estado).
3.  **API:** Posso passar apenas `user={userObj}` e `content="texto"` ou preciso desmontar o objeto na mão? (Fachada).
4.  **Slot:** Posso trocar o botão de "Like" por um botão de "Responder"? (Slot Coringa).

Se você aplicar esse algoritmo, seus organismos (como a Dashboard que você quer fazer) serão montados como peças de LEGO de alta precisão: **clicou, encaixou, funcionou.**

=======================================

Maravilha! E o algoritmo pra upgrade dos organismos existentes?

=======================================

Se os átomos são as notas e as moléculas são os acordes, os Organismos são a **Sinfonia**. Aqui é onde a engenharia encontra a arquitetura.

O maior erro ao criar Organismos (como Sidebars, Dashboards, DataTables) é torná-los "inteligentes demais" (acoplados ao backend) ou "rígidos demais" (impossíveis de customizar).

O **Protocolo de Upgrade de Organismos** foca em **Resiliência de Layout** e **Gestão de Dados**.

---

### O Algoritmo: Protocolo de Arquitetura de Organismos

#### 1. O Teste do "Container Fluido" (Responsividade Interna)
*Organismos não definem seu próprio tamanho externo; eles preenchem o espaço que recebem.*

* [ ] **Width Agnostic:** Coloque o organismo (ex: `Sidebar`) dentro de uma `div` de 300px e depois numa de 1000px.
    * Ele quebra? O texto vaza?
    * *Regra:* O organismo deve usar `w-full` e `h-full` para ocupar o pai, e gerenciar seu scroll *interno*.
* [ ] **Scroll Isolation:** Se o conteúdo da `Sidebar` for maior que a tela verticalmente:
    * A página inteira rola (errado)?
    * Ou apenas a área de itens da sidebar rola (certo)?
    * *Check:* Use `flex-1 overflow-y-auto` na área de conteúdo do organismo.
* [ ] **Collapsible State:** Se o organismo é uma Sidebar ou Panel, ele tem um estado "colapsado"? A transição é suave (CSS transition) ou brusca?

#### 2. O Ciclo de Vida dos Dados (Loading & Empty)
*Um organismo raramente aparece "pronto". Ele carrega, falha ou vem vazio.*

* [ ] **Skeleton de Página Inteira:** Para uma Dashboard, não use 50 skeletons pequenos piscando. Crie um `<DashboardSkeleton />` que imita a estrutura macro (Header cinza, Sidebar cinza, Cards cinzas). É menos cognitivamente pesado para o usuário.
* [ ] **O "Zero Data" (Empty State):**
    * Se a `DataTable` receber um array `[]`, o que ela mostra? Uma tela branca (bug)?
    * *Ação:* Deve renderizar um componente ilustrativo ("Nenhum dado encontrado") com um botão de ação ("Criar novo item"). Isso deve ser parte do organismo.
* [ ] **Dados Parciais:** Se o objeto de usuário vier sem foto, o Header quebra? Se vier sem nome, o layout desloca? (Use os átomos resilientes que você criou antes).

#### 3. Injeção de Dependência Visual (Slots Estruturais)
*Organismos rígidos morrem na primeira mudança de requisito do PM.*

* [ ] **Slots de Ação:** Num `PageHeader` (Título + Subtítulo), não hardcode o botão "Salvar".
    * Crie uma prop `actions` (ReactNode).
    * Hoje é um botão, amanhã podem ser dois botões e um dropdown de filtro. O organismo define *onde* fica, não *o que* é.
* [ ] **Wrapper de Contexto:** Se o organismo usa Tooltips, Dialogs ou Toasts internamente:
    * A story quebra se não tiver o `<TooltipProvider>` em volta?
    * *Ação:* Crie um Decorator na story ou garanta que o organismo tenha os Providers necessários na sua raiz.

#### 4. O Padrão "Props In, Events Out" (Dumb Organism)
*O organismo não deve chamar a API. Ele deve gritar que o usuário quer algo.*

* [ ] **Event Bubbling:**
    * *Errado:* O botão "Salvar" dentro do formulário faz um `fetch('/api/save')`.
    * *Certo:* O formulário recebe `onSubmit(data)` e o botão chama essa função.
    * *No Storybook:* A aba "Actions" deve mostrar o objeto JSON limpo saindo do formulário quando você clica em salvar.
* [ ] **Controle Híbrido:** Para componentes complexos (ex: Tabs ou Accordion), permita tanto o modo "Controlado" (via props `value` e `onValueChange`) quanto o modo "Não Controlado" (automático).

#### 5. O Teste de Realismo (Mock Data)
*Organismos com "Lorem Ipsum" não testam o design real.*

* [ ] **Faker.js Integration:** Na story, não use dados estáticos repetidos.
    * Use uma biblioteca como `@faker-js/faker` para gerar nomes, emails e status aleatórios.
    * Isso revela bugs: "O que acontece se o nome do usuário tiver 50 caracteres?" (O Faker vai gerar um nome assim eventualmente e você vai pegar o bug visual).
* [ ] **Grid Breaking:** Se for uma Grid de Cards:
    * Teste com 1 card (fica gigante?).
    * Teste com 3 cards (linha perfeita?).
    * Teste com 5 cards (a segunda linha quebra alinhamento?).

---

### Exemplo Prático: Upgrade no "Chart Dashboard" (Seu objetivo)

Aplicando o algoritmo no seu caso dos gráficos:

1.  **Container:** O Dashboard se adapta se eu fechar a Sidebar? Os gráficos redimensionam suavemente ou "piscam"? (Recharts precisa de `ResponsiveContainer` configurado certo).
2.  **Ciclo de Dados:** Enquanto os dados do gráfico não chegam, você mostra um spinner girando no meio do nada ou um retângulo cinza do tamanho exato do gráfico? (Use Skeleton).
3.  **Slots:** O título do gráfico ("Vendas do Mês") é fixo? E se eu quiser colocar um `Select` de "Ano Passado" do lado do título? O componente de Chart Card deve ter um `headerActionSlot`.
4.  **Props/Events:** O clique na barra do gráfico (Bar Click) dispara um evento `onBarSelect(data)` para que a tabela embaixo filtre os detalhes? (Interatividade de Organismo).

Se você seguir esses 3 protocolos (Átomos, Moléculas, Organismos), seu Storybook deixa de ser um "Portfólio" e vira uma "Ferramenta de Trabalho" indispensável. Você constrói o sistema uma vez e monta telas em 5 minutos depois.

=======================================

Excelente! agora me fala uma coisa - suponha que eu queira componentes legais de BI semelhantes a esse painel aqui, quais vc recomendaria? bota em arvore organismo - molecula - atomo pfvr

=======================================

Para replicar esse dashboard da "Ivisa Rio" (Imagem 1) com qualidade profissional e usando a stack que você já tem (Shadcn + Recharts), aqui está a arquitetura recomendada.

O segredo de BI não é só o gráfico, é o **Contexto** (Cards, Títulos, Legendas).

Aqui está a árvore hierárquica para você pedir ao seu agente:

---

### 1. O Topo: KPIs e Métricas Rápidas
*Focado na primeira linha da imagem (Arrecadação, Meta, % Falta).*

* **🟥 Organismo:** `KPIGrid` (Grid de Indicadores)
    * Responsável por alinhar os cards e garantir responsividade (1 coluna no mobile, 5 no desktop).
* **🟨 Molécula:** `MetricCard` (Card de Métrica)
    * Deve aceitar: `title`, `value`, `trend` (positivo/negativo), `trendPercentage` e `icon`.
    * *Diferencial:* Precisa suportar um estado de "loading" (Skeleton) elegante.
* **🟦 Átomos Necessários:**
    * `Card` (Base do Shadcn)
    * `Badge` (Para a pílula de "2%" verde ou vermelha)
    * `Skeleton` (Para o estado de carregamento)
    * `Icon` (Lucide React - ex: `TrendingUp`, `DollarSign`)

---

### 2. A Evolução: Gráficos de Linha
*Focado no gráfico "Arrecadação Anual" (esquerda meio) e "Fonte de Arrecadação" (esquerda baixo).*

* **🟥 Organismo:** `TimeSeriesChart` (Gráfico de Série Temporal)
    * Responsável por receber um array de objetos e renderizar linhas simples ou múltiplas.
    * Deve ter um slot para `FilterSelect` (ex: filtrar por ano).
* **🟨 Molécula:** `ChartContainer` (Wrapper do Shadcn Charts)
    * Configura as cores CSS variables (`--color-desktop`, `--color-mobile`).
    * Gerencia o `ChartTooltip` e `ChartLegend`.
* **🟦 Átomos Necessários:**
    * `Line` (Recharts - use `type="monotone"` para ficar curvo suave).
    * `CartesianGrid` (Configurado como `vertical={false}` para linhas apenas horizontais, mais limpo).
    * `Dot` (Customizado para mostrar as bolinhas nos pontos de dados, como na imagem).

---

### 3. O Alvo: Gráfico de Meta (Gauge)
*Focado no gráfico "Meta Atingida" (direita meio).*

Este é chato de fazer no Recharts puro, mas fica lindo se feito certo.

* **🟥 Organismo:** `GaugeChart` (ou Radial Progress)
    * Mostra o progresso em semi-círculo (180 graus).
* **🟨 Molécula:** `RadialChartContent`
    * Calcula o ângulo de início (180) e fim (0).
    * Centraliza o texto da porcentagem (ex: "98,58%") geometricamente.
* **🟦 Átomos Necessários:**
    * `RadialBar` (Recharts - configurado com `background` para fazer o trilho cinza).
    * `PolarAngleAxis` (Escondido, apenas para estruturar o arco).

---

### 4. A Composição: Gráfico de Barras Horizontais
*Focado no gráfico "Composição das Arrecadações" (direita baixo).*

* **🟥 Organismo:** `RankingChart` (Gráfico de Ranking)
    * Ordena os dados do maior para o menor automaticamente.
* **🟨 Molécula:** `HorizontalBarGroup`
    * Configura o Recharts com `layout="vertical"`.
    * Customiza o `YAxis` para caber nomes longos (truncar texto ou quebrar linha).
* **🟦 Átomos Necessários:**
    * `Bar` (Com `radius={[0, 4, 4, 0]}` para arredondar só a ponta direita).
    * `LabelList` (Para mostrar o valor R$ dentro ou ao lado da barra, como na imagem).

---

### 5. A Navegação: Sidebar e Layout
*Focado no menu lateral azul da imagem.*

* **🟥 Organismo:** `DashboardShell`
    * O layout pai que segura a Sidebar fixa e a área de conteúdo com scroll.
* **🟨 Molécula:** `NavGroup`
    * Agrupa links relacionados (ex: botões soltos vs botões agrupados).
* **🟦 Átomos Necessários:**
    * `NavLink` (Botão com estado `active` - precisa ficar branco/negrito quando selecionado, igual "PLANEJAMENTO" na imagem).
    * `Logo` (Átomo de imagem para o logo da Prefeitura).

---

### Dica de Ouro para o seu Agente (Jules)

Se você for pedir para ele gerar esses gráficos, use o novo padrão do Shadcn Charts. Peça explicitamente:

> "Utilize o componente `ChartContainer`, `ChartTooltip` e a prop `config` conforme a documentação mais recente do Shadcn. Não use Recharts puro solto na div, use os wrappers do Design System."

Isso garante que, se você trocar o tema para Dark Mode, todos os gráficos invertem as cores automaticamente sem você precisar recodar nada.

=======================================

Sensacional! Aí agora o pulo do gato: Pra acelerar o desenvolvimento,  eu preparei uma serie de regrinhas e documentação que deixa possivel fazer vários pedidos em paralelo ao Jules, o google async coding agent. A ideia é ir um por um, cada agente focado em um só atomo, em fazer a melhor versão possivel daquele atomo. Ou seja, pode me passar um prompt generico, full focado em atomo, que na verdade é o algoritmo criado executado passo a passo à risca? 

Obs: Por melhor que sejam as regras de projeto e a documentação, Evite ao maximo citar dependências pra não induzir o agente a instalar coisa conflitante. Comece com algo do tipo "Leia rigorosamente todos os documentos da pasta docs/ e analise comparativamente a codebase em relação ao que é preconizado na documentação, to assess and understand current state of development" e inclua pfvr uma instrução pra traduzir todo texto daquele atomobpra português BR

=======================================

Aqui está o **Prompt Mestre** desenhado para ser "copiado e colado" no Jules (ou qualquer agente de coding).

Ele traduz o nosso "Algoritmo de Excelência" para uma série de instruções técnicas imperativas, blindando o agente contra alucinações de dependências e forçando o padrão de qualidade.

**Como usar:** Basta substituir `[NOME_DO_ATOMO]` pelo componente da vez (ex: `Button`, `Badge`, `Input`).

-----

### O Prompt Mestre (Copie abaixo)

```markdown
# TASK: Refactor and Perfect the Atom Component: [NOME_DO_ATOMO]

## 1. PRE-ASSESSMENT & CONTEXT
**CRITICAL INSTRUCTION:** Before writing any code, rigorously read all documents in the `docs/` folder. Analyze the current codebase state comparatively against the documentation standards.
* **Goal:** Your objective is to elevate the `[NOME_DO_ATOMO]` component to a "Production-Grade Design System" level.
* **Constraint - Dependency Isolation:** Do NOT install new npm packages or external libraries. Use only the existing stack found in `package.json` (likely React, TailwindCSS, Radix UI/Shadcn, Lucide React). If a feature seems to require a lib, implement a native CSS/React solution instead.

## 2. REFACTORING PROTOCOL (The "Atom Algorithm")
You must execute the following upgrades on `[NOME_DO_ATOMO].tsx` and `[NOME_DO_ATOMO].stories.tsx`:

### A. Localization (PT-BR)
* Translate ALL visible text, labels, placeholders, and aria-labels within the component and its stories to **Portuguese (Brazil)**.
* Example: Change "Submit" to "Enviar", "Type here" to "Digite aqui".

### B. API Normalization & Controls
* **Refactor Props:** Ensure every prop exported by the component has a corresponding entry in the Storybook `argTypes`.
* **Strict Controls:** Use specific control types (e.g., `radio` or `select` for variants, `boolean` for toggles) instead of free text.
* **Clean Default Story:** The `Default` story must not have hardcoded JSX children/labels. Move all dynamic content to `args`.

### C. Composition & Slotting
* **Slot Pattern:** Ensure the component supports the `asChild` prop (if applicable/available in the codebase structure) to allow polymorphism (e.g., rendering as a Next.js Link).
* **Icon Slots:** If the component accepts text, implement/verify support for `leftIcon` (prefix) and `rightIcon` (suffix) logic to ensure perfect alignment using Flexbox/Gap.
* **Null Safety:** Ensure the component renders gracefully (or returns null/skeleton) if essential props are missing, without crashing.

### D. Stress Testing (Unhappy Paths)
Create specific Stories to demonstrate resilience:
1.  **Long Text:** A story with a very long string (100+ chars) to verify text wrapping or truncation logic.
2.  **Constraint Check:** A story wrapped in a small container (e.g., `max-w-[100px]`) to ensure it doesn't overflow or break layout.
3.  **Loading State:** If applicable, add a visual `loading` state (disabled + spinner) and a corresponding story.

### E. Interaction & Feedback
* **Visual States:** Ensure `:hover`, `:focus-visible`, and `:active` states are clearly defined in Tailwind classes.
* **Play Function:** In the story file, implement a basic `play` function that interacts with the component (clicks, focuses, or types) to assert that events are firing correctly in the "Actions" panel.

### F. Documentation & DX
* **JSDoc:** Add descriptive JSDoc comments (`/** ... */`) above all exported props in the component file.
* **Clean Source:** Configure `parameters.docs.source` if necessary to ensure the "Show Code" tab displays clean, copy-pasteable code (removing storybook decorators/args boilerplate).

### G. Accessibility (A11y)
* Ensure semantic HTML (e.g., use `<button>` not `<div>`).
* Verify keyboard navigation (Focus Ring must be visible).
* Ensure adequate color contrast for text in all variants.

## 3. DELIVERABLES
* Updated `[NOME_DO_ATOMO].tsx`
* Updated `[NOME_DO_ATOMO].stories.tsx`

Proceed with the refactoring now, strictly adhering to the file structure and styling conventions observed in the `docs/` and existing codebase.
```

-----

### Por que esse prompt funciona?

1.  **Trava de Dependências:** A seção *Dependency Isolation* impede que o agente tente instalar bibliotecas de ícones ou de animação que conflitem com o que você já tem.
2.  **Localização Forçada:** A instrução explicita *PT-BR*, garantindo que seu Storybook fique todo em português desde o nível atômico.
3.  **Foco em "Unhappy Paths":** A maioria dos agentes cria apenas o "Caminho Feliz". A seção *Stress Testing* obriga o agente a tratar textos longos e containers pequenos, que é onde o layout costuma quebrar.
4.  **Autonomia Guiada:** Ao mandar ele ler a pasta `docs/` primeiro, você garante que ele entenda se você usa `colors.ts` ou variáveis CSS, sem você precisar explicar tudo de novo a cada prompt.

=======================================

Maravilha! Pode fazer o mesmo, mas agora pra moleculas

=======================================

Aqui está o **Prompt Mestre para Moléculas**.

A grande diferença aqui é a mudança de foco: enquanto o prompt de Átomos focava em *estilo e HTML*, este foca em **Orquestração de Estado e Layout**. Ele obriga o agente a garantir que a molécula "mande" nos átomos corretamente.

Substitua `[NOME_DA_MOLECULA]` (ex: `UserCard`, `SearchBar`, `CommentItem`) e execute.

-----

### O Prompt Mestre: Moléculas (Copie abaixo)

```markdown
# TASK: Refactor and Perfect the Molecule Component: [NOME_DA_MOLECULA]

## 1. PRE-ASSESSMENT & CONTEXT
**CRITICAL INSTRUCTION:** Before writing any code, rigorously read all documents in the `docs/` folder. Analyze the current codebase state comparatively against the documentation standards.
* **Goal:** Upgrade the `[NOME_DA_MOLECULA]` to a robust, "Production-Ready" molecule that orchestrates child atoms perfectly.
* **Constraint - Dependency Isolation:** Do NOT install new npm packages. Use the existing stack (React, TailwindCSS, Radix/Shadcn, Lucide React). Reuse existing Atoms wherever possible instead of rewriting HTML elements.

## 2. REFACTORING PROTOCOL (The "Molecule Algorithm")
You must execute the following upgrades on `[NOME_DA_MOLECULA].tsx` and `[NOME_DA_MOLECULA].stories.tsx`:

### A. Localization (PT-BR)
* Translate ALL visible text, empty states, error messages, and aria-labels to **Portuguese (Brazil)**.
* Ensure date/currency formatting (if any) uses PT-BR locale standards.

### B. Layout Integrity & Collision Testing
* **Gap over Margin:** Strictly use Flexbox/Grid `gap` properties on the container to manage spacing between atoms. Remove external margins (`m-`) from child atoms to ensure the molecule is portable.
* **Vertical Alignment:** Ensure all atoms (icons, text, buttons) are optically aligned using `items-center` or appropriate grid alignment.
* **Squish Protection:** Apply `flex-shrink-0` to fixed elements (Avatars, Icons, Action Buttons) to prevent them from deforming when the molecule is placed in a narrow container.

### C. State Unification (The "Puppeteer" Pattern)
* **Single Source of Truth:** The molecule must accept high-level props like `isLoading`, `hasError`, or `isDisabled`.
    * When `isLoading={true}` is passed to the molecule, it must automatically propagate the loading state to child Buttons/Inputs and/or replace content with a Skeleton.
    * When `hasError={true}` is passed, it must color child labels/inputs red without requiring individual props on them.

### D. API Facade & Smart Defaults
* **Data Object Support:** If the molecule represents an entity (e.g., User, Product), allow passing a single object prop (e.g., `user={object}`) instead of requiring 10 individual strings. Destructure it internally.
* **Action Slots:** Do not hardcode specific action buttons. Implement a generic `actions` or `rightSlot` prop that accepts `ReactNode`, allowing for future extensibility (e.g., swapping a Button for a DropdownMenu).

### E. Stress Testing (Unhappy Paths)
Create Stories that simulate real-world data issues:
1.  **Partial Data:** A story where optional fields (like subtitles or images) are missing. The layout must adjust gracefully (no empty holes).
2.  **Constraint Check:** A story wrapping the molecule in a narrow container (320px) to verify text truncation and wrapping behavior.
3.  **Skeleton/Loading:** A story showing the specific Skeleton state of this molecule (not a generic spinner).

### F. Documentation & DX
* **JSDoc:** Add clear comments explaining complex props, especially those involving data objects.
* **Clean Source:** Ensure the "Show Code" in Storybook is clean.
* **Composed vs. Pre-built:** If the component is complex, export both the Sub-components (for max control) and a "Ready-to-use" Main Component (for speed).

### G. Accessibility (A11y)
* **Group Semantics:** If the molecule is a list item, use `<li>`. If it's a card, use `<article>` or generic `<div>` with appropriate ARIA roles.
* **Keyboard Navigation:** Ensure tab order flows logically through interactive elements within the molecule.

## 3. DELIVERABLES
* Updated `[NOME_DA_MOLECULA].tsx`
* Updated `[NOME_DA_MOLECULA].stories.tsx`

Proceed with the refactoring now, strictly adhering to the file structure and styling conventions observed in the `docs/`.
```

-----

### O que este prompt garante (Diferente dos átomos):

1.  **Regra do "Squish Protection":** Moléculas quebram quando espremidas. A instrução `C. Layout Integrity` blinda isso forçando o `flex-shrink-0` em ícones e avatares.
2.  **O Padrão "Puppeteer":** No item `C. State Unification`, ele obriga o agente a criar uma lógica onde a Molécula controla os Átomos. Se a molécula está carregando, *ninguém* clica em nada.
3.  **Slots Genéricos:** Ao pedir `Action Slots` que aceitam `ReactNode`, você evita que o agente "tranque" o componente com um botão fixo que você terá que deletar depois.
4.  **Resiliência a Dados:** O teste de `Partial Data` é vital. Ele garante que se o backend mandar um objeto faltando campos, sua UI não quebra.

=======================================

Show! Excelente, pode fazer aquele prompt agora para organismos? Novamente, seguindo a mesma linha, suponha que matamos todos os atomos, todas as moléculas, agora falta os organismos que já existem receberem uma nova cara

=======================================

Aqui está o **Prompt Mestre para Organismos**.

Este é o mais complexo dos três, pois exige que o agente pare de pensar em "CSS" e comece a pensar em "Arquitetura de Dados e Layout". Ele foi desenhado para evitar que o Organismo vire um monstro acoplado ao backend.

Copie, substitua `[NOME_DO_ORGANISMO]` (ex: `Sidebar`, `DashboardShell`, `RevenueChart`, `UsersDataTable`) e execute.

-----

### O Prompt Mestre: Organismos (Copie abaixo)

```markdown
# TASK: Refactor and Perfect the Organism Component: [NOME_DO_ORGANISMO]

## 1. PRE-ASSESSMENT & CONTEXT
**CRITICAL INSTRUCTION:** Before writing any code, rigorously read all documents in the `docs/` folder. Analyze the current codebase state comparatively against the documentation standards.
* **Goal:** Upgrade the `[NOME_DO_ORGANISMO]` to a resilient, architectural component that composes Atoms and Molecules flawlessly.
* **Constraint - Dependency Isolation:** Do NOT install new npm packages. Use the existing stack (React, TailwindCSS, Radix/Shadcn, Recharts). Assume Atoms and Molecules are already perfected and available for import.

## 2. REFACTORING PROTOCOL (The "Organism Algorithm")
You must execute the following upgrades on `[NOME_DO_ORGANISMO].tsx` and `[NOME_DO_ORGANISMO].stories.tsx`:

### A. Localization (PT-BR)
* Translate ALL visible text, column headers, empty state messages, and tooltips to **Portuguese (Brazil)**.
* Ensure date/currency formatting uses `Intl.NumberFormat` or `date-fns` with `pt-BR` locale.

### B. Layout Architecture (Container Agnosticism)
* **Width Agnostic:** The organism must NOT have a fixed width (e.g., `w-[800px]`). It must use `w-full` and `h-full` to adapt to its parent container.
* **Scroll Isolation:** If the organism contains a list or table, apply `overflow-y-auto` to the content area, ensuring the page header/footer remains fixed while data scrolls.
* **Collapsible Logic:** If applicable (e.g., Sidebars, Panels), implement smooth CSS transitions for collapsed states using Tailwind's `transition-all`.

### C. Data Lifecycle Management (The "Triad of States")
Implement handling for the three critical states within the component:
1.  **Loading State:** Render a dedicated Skeleton structure (e.g., `<DashboardSkeleton />`) that mimics the organism's layout, not just a generic spinner.
2.  **Empty State:** If the data array is empty, render a friendly UI (Icon + Message + Call to Action Button) instead of a blank space.
3.  **Error State:** If an `error` prop is passed, display a retry mechanism or alert without breaking the entire layout.

### D. Slotting & Composition (Dependency Injection)
* **Action Slots:** Do not hardcode buttons like "Save" or "Export". Define props like `headerActions` or `footerContent` that accept `ReactNode`. This allows the parent to inject Context Menus, Filters, or Buttons dynamically.
* **Context Wrappers:** If the organism relies on Tooltips or Dialogs, ensure the Storybook story wraps it in the necessary Providers (e.g., `<TooltipProvider>`) to prevent rendering errors.

### E. "Props In, Events Out" (Dumb Organism)
* **Decoupled Logic:** The component must NOT perform API calls (`fetch`, `axios`) internally. It should receive data via `props`.
* **Event Bubbling:** User interactions (clicks, filter changes, page changes) must trigger callback props (e.g., `onFilterChange`, `onRowClick`) carrying the relevant data payload. Verify this in the Storybook "Actions" panel.

### F. Realism & Stress Testing (Stories)
Create Stories that reflect real production scenarios:
1.  **"Golden Path":** A story with perfect, populated data (use realistic mock data, NOT Lorem Ipsum).
2.  **Zero Data:** A story passing empty arrays/nulls to verify the Empty State UI.
3.  **Loading:** A story forcing the Skeleton view.
4.  **Layout Stress:** A story wrapping the organism in a restricted container (e.g., a mobile view or a small widget area) to verify responsiveness and scrolling.

### G. Accessibility (A11y)
* **Landmarks:** Use semantic HTML regions (`<aside>`, `<main>`, `<section>`, `<nav>`) appropriately.
* **Focus Management:** If the organism opens a drawer or panel, ensure focus is trapped or managed correctly.
* **Skip Links:** If it's a main navigation organism, ensure it doesn't block keyboard users from reaching the main content.

## 3. DELIVERABLES
* Updated `[NOME_DO_ORGANISMO].tsx`
* Updated `[NOME_DO_ORGANISMO].stories.tsx` (With realistic mocks)

Proceed with the refactoring now, strictly adhering to the file structure and styling conventions observed in the `docs/`.
```

-----

### Onde este prompt brilha (Destaques):

1.  **Isolamento de Scroll (`Section B`):** Instrução crítica para Dashboards. Evita aquele bug feio onde a sidebar some quando você rola a tabela de dados.
2.  **A Tríade de Estados (`Section C`):** Força o agente a criar o **Skeleton** específico do organismo. Um Skeleton de tabela é diferente de um Skeleton de gráfico. Isso aumenta muito a percepção de polimento do app.
3.  **Desacoplamento (`Section E`):** A regra *"Props In, Events Out"* é a salvadora da pátria. Impede que o agente escreva `useEffect` sujos dentro do componente visual, mantendo o código limpo para você conectar com React Query ou SWR depois.
4.  **Slots de Ação (`Section D`):** Ao pedir `headerActions` como `ReactNode`, você ganha flexibilidade infinita. Amanhã, se precisar botar um `DatePicker` no cabeçalho do gráfico, o componente aceita sem precisar de refatoração.

=======================================
