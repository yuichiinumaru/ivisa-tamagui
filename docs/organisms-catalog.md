Perfeito! Criei um **ORGANISMS.md completo** com **30 organisms** mapeados, organizados por:

## 📊 Resumo Executivo

### **Total: 30 Organisms** distribuídos assim:

| Fase | Quantidade | Status | Exemplos |
|------|-----------|--------|----------|
| **Fase 2** (Em Progresso) | 4 | 🚧 | DataTable, Form, CommandPalette, Carousel |
| **Fase 3** (Próxima) | 13 | ⏳ | Sidebar, Pagination, Breadcrumb, Stepper, Modal, Toast, etc |
| **Fase 4** (Futura) | 13 | ⏳ | Dashboard, DataGrid, Search, FileUpload, RichEditor, Timeline, etc |

***

## 🎯 Destaques do Catálogo

### **Fase 3 - Quick Wins (Prioridade Imediata)**
1. **Pagination** (1 dia) - Fundamental pra DataTable
2. **Breadcrumb** (1 dia) - Simples, muito comum
3. **InputOTP** (1-2 dias) - 2FA moderno
4. **AvatarGroup** (1 dia) - Team/participants UI

### **Fase 3 - High Value (2-3 dias cada)**
5. **Sidebar** - Layout fundamental de apps
6. **Stepper** - Onboarding/checkout crucial
7. **Modal Dialog (Advanced)** - Confirmação/Forms
8. **Toast Stack** - Feedback user-facing
9. **Navigation Menu** - Header desktop

### **Fase 4 - Advanced (3+ dias)**
- Dashboard Layout
- DataGrid com virtual scrolling
- Search/Filterable List
- File Upload (Dropzone)
- Rich Text Editor
- Calendar (Booking)
- Filter Panel

***

## 📝 Estrutura de Cada Organism

Para cada um, documentei:

```
✅ Status (🚧 Em progresso / ⏳ Pendente)
✅ Libs headless necessárias
✅ Atoms/Molecules que usa
✅ Esforço estimado em dias
✅ Caso de uso principal
✅ Complexidade (Baixo/Médio/Alto)
✅ Variantes (tamanhos, estados, etc)
```

***

## 🔗 Como Integrar ao Plano

**Próximos passos sugeridos:**

1. **Atualizar `docs/02-tasks.md`** com lista de Fase 3
2. **Adicionar seção em `AGENTS-improved.md`** referenciando o catalog
3. **Usar como roadmap** para próximas sprints

**Exemplo para Fase 3 (Recomendado):**
```markdown
### Phase 3: Quick Wins + Foundations
Semana 1-2:
- ✅ Pagination (1 dia)
- ✅ Breadcrumb (1 dia) 
- ✅ InputOTP (1-2 dias)
- ✅ AvatarGroup (1 dia)

Semana 3-4:
- ✅ Sidebar (3-4 dias)
- ✅ Stepper (3-4 dias)
```

***

=======================================

# Organisms Catalog: Ivisa Tamagui DS

Completa lista de **Organisms** (componentes complexos com lógica + UI) que podem ser desenvolvidos para o projeto, organizados por:
1. **Prioridade** (Alto/Médio/Baixo)
2. **Fase de Implementação** (2, 3, 4)
3. **Dependências** (libs headless, atoms/molecules)
4. **Esforço Estimado** (dias)

---

## 🔴 FASE 2: High-Impact Organisms (Em Progresso)

### Já Listados no Plano

#### 1. **DataTable**
- **Status**: 🚧 Em progresso
- **Libs**: `@tanstack/react-table` + `@tanstack/react-query`
- **Atoms/Molecules**: Button, Input, Dialog (para expansão)
- **Esforço**: 4-5 dias
- **Uso**: Listagens com sort, filter, pagination
- **Complexidade**: Alta

#### 2. **Form (React Hook Form + Zod)**
- **Status**: ✅ Concluído (base) / 🚧 Expandindo variantes
- **Libs**: `react-hook-form`, `zod`, `@hookform/resolvers`
- **Atoms/Molecules**: Input, Checkbox, Select, Textarea
- **Esforço**: 2-3 dias (já pronto, expandir com variantes)
- **Uso**: Formulários com validação server/client-side
- **Complexidade**: Médio

#### 3. **CommandPalette**
- **Status**: 🚧 Em progresso
- **Libs**: `cmdk`
- **Atoms/Molecules**: Dialog, Input, List
- **Esforço**: 2-3 dias
- **Uso**: Cmd+K paleta de comandos, busca rápida
- **Complexidade**: Médio

#### 4. **Carousel**
- **Status**: ⏳ Pendente
- **Libs**: `embla-carousel-react`
- **Atoms/Molecules**: Stack, Button, Image
- **Esforço**: 2-3 dias
- **Uso**: Sliders de imagens, landing page hero
- **Complexidade**: Médio

---

## 🟡 FASE 3: Polish & Expansion Organisms

### Novos Organisms para Adicionar à Fase 3

#### 5. **Sidebar (App Navigation)**
- **Status**: ⏳ Pendente
- **Libs**: Nenhuma (composição de Tamagui)
- **Atoms/Molecules**: Stack, Button, Sheet (mobile), Collapsible
- **Esforço**: 3-4 dias
- **Dependências**:
  - Desktop: Sidebar fixo + nav items + colapsível
  - Mobile: Drawer (Sheet) triggerado por hamburger button
  - Nested menus: Accordion para subitems
- **Uso**: App layout principal, navegação app/dashboard
- **Complexidade**: Médio
- **Variantes**: 
  - Sidebar fixo (desktop)
  - Drawer (mobile)
  - Com/sem nesting
  - Colapsível/expandido

#### 6. **Pagination**
- **Status**: ⏳ Pendente
- **Libs**: Nenhuma (composição DIY)
- **Atoms/Molecules**: Button, Stack, Text
- **Esforço**: 1-2 dias
- **Dependências**:
  - Números de página com ellipsis (1 2 ... 5 6 7 ... 10)
  - Prev/Next buttons
  - Jump to page input
- **Uso**: Controle de paginação em DataTable, listas
- **Complexidade**: Baixo
- **Variantes**: 
  - Pagination simples (Prev/Next)
  - Com números
  - Com jump-to
  - Com info de página (5 de 10)

#### 7. **Breadcrumb Navigation**
- **Status**: ⏳ Pendente
- **Libs**: Nenhuma (composição DIY)
- **Atoms/Molecules**: Button, Text, Stack
- **Esforço**: 1 dia
- **Dependências**:
  - Array de items: `[{ label, href }, ...]`
  - Separador entre items (/)
  - Último item não clicável (current page)
- **Uso**: Navegação hierárquica em app/web
- **Complexidade**: Baixo
- **Variantes**:
  - Breadcrumb simples
  - Com ícones
  - Com dropdown de alternativas

#### 8. **Stepper / Form Wizard**
- **Status**: ⏳ Pendente
- **Libs**: Nenhuma (composição) + `react-hook-form` (state)
- **Atoms/Molecules**: Button, Card, Text, Form (organism)
- **Esforço**: 3-4 dias
- **Dependências**:
  - Steps com indicadores (1 2 3)
  - Validação por passo (next, prev, skip)
  - State de passo atual
  - Resumo final
- **Uso**: Onboarding, checkout multi-passo, sign-up
- **Complexidade**: Médio
- **Variantes**:
  - Vertical steps
  - Horizontal steps
  - Com progress bar
  - Com resumo

#### 9. **Modal Dialog (Advanced)**
- **Status**: ⏳ Pendente (Dialog base já existe)
- **Libs**: Tamagui Dialog (base) + composição
- **Atoms/Molecules**: Dialog, Button, Text
- **Esforço**: 2 dias
- **Dependências**:
  - Variantes: alert, confirm, form modal, loading modal
  - Header + Body + Footer estruturado
  - Actions (OK, Cancel, etc)
  - Backdrop interactiveness
- **Uso**: Confirmação, formulários, avisos
- **Complexidade**: Médio
- **Variantes**:
  - Alert Dialog
  - Confirm Dialog
  - Form Dialog
  - Loading Dialog

#### 10. **Notification / Toast Stack**
- **Status**: ⏳ Pendente (Toast base já existe)
- **Libs**: Tamagui Toast (base) + Jotai/Zustand para estado
- **Atoms/Molecules**: Toast, Stack, Button, Text
- **Esforço**: 2 dias
- **Dependências**:
  - Fila de notificações (múltiplas ao mesmo tempo)
  - Auto-dismiss ou manual
  - Types: success, error, warning, info
  - Ações (undo, dismiss)
- **Uso**: Feedback ao usuário, status de ações
- **Complexidade**: Médio
- **Variantes**:
  - Toast simples
  - Com ação
  - Com progress bar
  - Posição configurável

#### 11. **Tabs (Advanced)**
- **Status**: ⏳ Pendente (Tabs base já existe)
- **Libs**: Tamagui Tabs (base)
- **Atoms/Molecules**: Tabs, Button, Stack, Badge
- **Esforço**: 1-2 dias
- **Dependências**:
  - Tabs horizontal/vertical
  - Com badges/contadores
  - Com close buttons
  - Lazy loading de conteúdo
- **Uso**: Interfaces com múltiplas views
- **Complexidade**: Médio
- **Variantes**:
  - Tabs horizontal
  - Tabs vertical
  - Com badges
  - Com lazy loading

#### 12. **Dropdown Menu (Complex)**
- **Status**: ⏳ Pendente
- **Libs**: `@radix-ui/react-dropdown-menu`
- **Atoms/Molecules**: Button, Text, Stack
- **Esforço**: 2 dias
- **Dependências**:
  - Dropdown com grupos
  - Checkable items
  - Disabled items
  - Submenus (nested)
  - Keyboard nav
- **Uso**: Ações contextuais, menus de usuário
- **Complexidade**: Médio
- **Variantes**:
  - Dropdown simples
  - Com grupos
  - Com checkboxes
  - Com submenus

#### 13. **Context Menu (Right-Click)**
- **Status**: ⏳ Pendente
- **Libs**: `react-right-click-context-menu` ou Radix `DropdownMenu`
- **Atoms/Molecules**: Button, Text, Stack
- **Esforço**: 2 dias
- **Dependências**:
  - Trigger em `onContextMenu`
  - Posição no mouse
  - Itens com ícones
  - Teclado nav
- **Uso**: Menus contextuais em tabelas, listas
- **Complexidade**: Médio

#### 14. **Navigation Menu (Header/Desktop)**
- **Status**: ⏳ Pendente
- **Libs**: `@radix-ui/react-navigation-menu`
- **Atoms/Molecules**: Button, Link, Stack, Popover
- **Esforço**: 2-3 dias
- **Dependências**:
  - Menu horizontal com flyouts
  - Submenus que abrem ao hover
  - Keyboard nav (Tab, Setas)
  - Mobile responsivo → collapsa em Sidebar
- **Uso**: Header navigation em landing/app
- **Complexidade**: Médio-Alto
- **Variantes**:
  - Mega menu (colunas)
  - Simples menu
  - Com descrições
  - Mobile fallback

#### 15. **Input OTP (One-Time Password)**
- **Status**: ⏳ Pendente
- **Libs**: `input-otp`
- **Atoms/Molecules**: Input, Stack
- **Esforço**: 1-2 dias
- **Dependências**:
  - Múltiplos slots (6 dígitos comum)
  - Auto-focus próximo slot
  - Paste detection
  - Visível/oculto (senha)
- **Uso**: 2FA, verificação de email/SMS
- **Complexidade**: Baixo
- **Variantes**:
  - OTP input 4-dígitos
  - OTP input 6-dígitos
  - Visível/oculto

#### 16. **Avatar Group**
- **Status**: ⏳ Pendente
- **Libs**: Nenhuma (composição)
- **Atoms/Molecules**: Avatar, Stack, Tooltip
- **Esforço**: 1 dia
- **Dependências**:
  - Múltiplos avatares em linha
  - Overflow indicator (+3 more)
  - Hover tooltip mostra overflow
- **Uso**: Team profiles, participants, assignees
- **Complexidade**: Baixo

#### 17. **Badge Counter / Notification Badge**
- **Status**: ⏳ Pendente
- **Libs**: Nenhuma (composição)
- **Atoms/Molecules**: Badge, Stack
- **Esforço**: 1 dia
- **Dependências**:
  - Número ou ponto
  - Posicionado sobre outro elemento
  - Animação de pulse (novo)
- **Uso**: Notificações, contadores, status
- **Complexidade**: Baixo

---

## 🟢 FASE 4: Advanced & Documentation Organisms

#### 18. **Dashboard Layout (Grid)**
- **Status**: ⏳ Pendente
- **Libs**: Nenhuma (Tamagui Grid)
- **Atoms/Molecules**: Card, Stack, Text, Chart wrapper
- **Esforço**: 2 dias
- **Dependências**:
  - Responsive grid (mobile: 1 col, tablet: 2, desktop: 4)
  - Resizable cards (com `react-resizable-panels`)
  - Persist layout state (localStorage ou DB)
- **Uso**: Dashboards, analytics, admin panels
- **Complexidade**: Médio

#### 19. **Data Grid (Advanced Table with Virtual Scrolling)**
- **Status**: ⏳ Pendente (DataTable base já existe)
- **Libs**: `@tanstack/react-table` + `@tanstack/react-virtual`
- **Atoms/Molecules**: Button, Input, Dialog
- **Esforço**: 4-5 dias
- **Dependências**:
  - Virtual scrolling (10k+ rows)
  - Column resizing
  - Infinite scroll / pagination
  - Advanced filtering
- **Uso**: Tabelas muito grandes, performance crítica
- **Complexidade**: Alto

#### 20. **Search / Filterable List**
- **Status**: ⏳ Pendente
- **Libs**: `downshift-js/downshift` + `@tanstack/react-query`
- **Atoms/Molecules**: Input, Stack, List, Button
- **Esforço**: 2-3 dias
- **Dependências**:
  - Input com fuzzy search
  - Dropdown de resultados
  - Highlight de match
  - Keyboard nav (Up/Down/Enter)
- **Uso**: Search de usuários, produtos, etc
- **Complexidade**: Médio

#### 21. **File Upload (Dropzone)**
- **Status**: ⏳ Pendente
- **Libs**: `react-dropzone`
- **Atoms/Molecules**: Button, Stack, Text, Progress
- **Esforço**: 2-3 dias
- **Dependências**:
  - Drag-drop zone
  - File preview
  - Upload progress
  - Multiple files
  - Validation (type, size)
- **Uso**: Uploads de documentos, imagens, etc
- **Complexidade**: Médio
- **Variantes**:
  - Dropzone simples
  - Com preview
  - Com progress
  - Multiple

#### 22. **Rich Text Editor Wrapper**
- **Status**: ⏳ Pendente
- **Libs**: `@tiptap/react` (headless) ou `slate`
- **Atoms/Molecules**: Button, Stack, Input
- **Esforço**: 3-4 dias
- **Dependências**:
  - Wrapper com formatting toolbar
  - Bold, Italic, List, Link
  - Tamagui styling
- **Uso**: Blog posts, descriptions, rich content
- **Complexidade**: Alto
- **Nota**: Opcional - pode deixar para v2

#### 23. **Popover (Enhanced)**
- **Status**: ⏳ Pendente (Popover base já existe)
- **Libs**: Tamagui Popover
- **Atoms/Molecules**: Popover, Button, Text
- **Esforço**: 1 dia
- **Dependências**:
  - Posicionamento smart
  - Com conteúdo customizável
  - Arrow pointer
  - Keyboard (Esc para fechar)
- **Uso**: Tooltips avançados, menus flutuantes
- **Complexidade**: Baixo

#### 24. **Tooltip (Enhanced)**
- **Status**: ⏳ Pendente (Tooltip base já existe)
- **Libs**: Tamagui Tooltip
- **Atoms/Molecules**: Tooltip, Text
- **Esforço**: 1 dia
- **Dependências**:
  - Delay configurável
  - Posicionamento
  - Keyboard accessible
- **Uso**: Help text, hints
- **Complexidade**: Baixo

#### 25. **Accordion (Advanced)**
- **Status**: ⏳ Pendente (Accordion base já existe)
- **Libs**: Tamagui Accordion
- **Atoms/Molecules**: Accordion, Card, Text
- **Esforço**: 1-2 dias
- **Dependências**:
  - Multiple vs single open
  - Nested accordions
  - Icon rotations
  - Animate height
- **Uso**: FAQs, nested content, menus colapsáveis
- **Complexidade**: Médio
- **Variantes**:
  - Single-open
  - Multiple-open
  - Nested

#### 26. **Collapse / Show More**
- **Status**: ⏳ Pendente
- **Libs**: Nenhuma (Tamagui Collapsible base)
- **Atoms/Molecules**: Button, Text, Stack
- **Esforço**: 1 dia
- **Dependências**:
  - Conteúdo expandível
  - "Show More / Show Less" toggle
  - Smooth height animation
- **Uso**: Descrições longas, preview/full view
- **Complexidade**: Baixo

#### 27. **Timeline / Process Flow**
- **Status**: ⏳ Pendente
- **Libs**: Nenhuma (composição)
- **Atoms/Molecules**: Card, Stack, Badge, Text
- **Esforço**: 2 dias
- **Dependências**:
  - Vertical/horizontal timeline
  - Completed/pending/current states
  - Connector lines
  - Clickable items
- **Uso**: Process flows, onboarding, milestones
- **Complexidade**: Médio

#### 28. **Progress Stepper (Visual)**
- **Status**: ⏳ Pendente
- **Libs**: Nenhuma (Tamagui Progress base)
- **Atoms/Molecules**: Progress, Stack, Text, Badge
- **Esforço**: 1-2 dias
- **Dependências**:
  - Linear progress com steps
  - Circular progress
  - Completed/pending states
- **Uso**: File uploads, multi-step forms, downloads
- **Complexidade**: Baixo

#### 29. **Calendar (Appointment Booking)**
- **Status**: ⏳ Pendente (Calendar base já existe)
- **Libs**: `@rehookify/datepicker` (base) + customização
- **Atoms/Molecules**: Calendar, Stack, Button, Card
- **Esforço**: 3-4 dias
- **Dependências**:
  - Month/week/day view
  - Events/appointments display
  - Availability highlighting
  - Time slots
- **Uso**: Booking, scheduling, event management
- **Complexidade**: Alto

#### 30. **Filter Panel / Advanced Filters**
- **Status**: ⏳ Pendente
- **Libs**: Nenhuma (composição)
- **Atoms/Molecules**: Input, Checkbox, Button, Stack, Select
- **Esforço**: 2-3 dias
- **Dependências**:
  - Multiple filter types (text, select, date range, etc)
  - Apply/Reset buttons
  - Persist filter state
  - Tag display of active filters
- **Uso**: E-commerce filters, search refinement
- **Complexidade**: Médio

---

## 📊 Resumo: Organisms por Fase

| Fase | Organismos | Total | Status |
|------|-----------|-------|--------|
| **Fase 2** | DataTable, Form, CommandPalette, Carousel | 4 | 🚧 Em Progresso |
| **Fase 3** | Sidebar, Pagination, Breadcrumb, Stepper, Modal (Adv), Toast (Adv), Tabs (Adv), Dropdown, Context Menu, Nav Menu, InputOTP, AvatarGroup, BadgeCounter | 13 | ⏳ Pendente |
| **Fase 4** | Dashboard Layout, DataGrid, Search, FileUpload, RichEditor, Popover (Adv), Tooltip (Adv), Accordion (Adv), Collapse, Timeline, Progress Stepper, Calendar (Booking), FilterPanel | 13 | ⏳ Pendente |
| **TOTAL** | — | **30** | — |

---

## 🎯 Recomendação para Priorização (Fase 3)

### Quick Wins (1 dia cada)
1. ✅ Pagination (controla muito uso)
2. ✅ Breadcrumb (simples, comum)
3. ✅ InputOTP (2FA é padrão moderno)
4. ✅ AvatarGroup (comum em apps)

### High Value (2-3 dias cada)
5. ✅ Sidebar (layout fundamental)
6. ✅ Stepper (onboarding/checkout)
7. ✅ Modal Dialog (Advanced)
8. ✅ Toast Stack
9. ✅ Navigation Menu

### Medium Priority (2 dias)
10. Tabs (Advanced)
11. Dropdown Menu
12. Context Menu

---

## 🛠️ Como Expandir AGENTS.md com Organisms

Adicionar seção em `AGENTS-improved.md`:

```markdown
## 📋 Organisms Catalog

| Organism | Phase | Status | Libs | Atoms/Molecules | Effort |
|----------|-------|--------|------|-----------------|--------|
| DataTable | 2 | 🚧 | @tanstack/react-table | Button, Input, Dialog | 4-5d |
| Sidebar | 3 | ⏳ | — | Stack, Button, Sheet | 3-4d |
| Pagination | 3 | ⏳ | — | Button, Stack, Text | 1-2d |
| ... | ... | ... | ... | ... | ... |

See `ORGANISMS.md` for detailed specifications, dependencies, and implementation patterns.
```

---

**Total de Organisms mapeados**: 30
**Cobertura estimada**: 90%+ de casos de uso Shadcn high-level components
