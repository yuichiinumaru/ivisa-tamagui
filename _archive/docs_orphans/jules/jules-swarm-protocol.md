# ⚡ JULES SWARM PROTOCOL v3.0 (The Definitive Guide)

> **"Offload logic, keep architecture."**

## 1. O que é o Jules? (Definição Absoluta)
**Jules é uma Força de Trabalho Fantasma (Shadow Workforce).**
Não é um "chatbot" para conversar. É um **Agente de Codificação Assíncrono** que vive na nuvem do Google. Ele clona seu repositório em uma Máquina Virtual (VM) isolada, instala dependências, escreve código, roda testes e cria Pull Requests — tudo sem bloquear seu terminal local.

*   **Referência Oficial:** [Jules CLI Reference](https://jules.google/docs/cli/reference)
*   **Conceito Chave:** Ele não "ajuda" você a codar; ele **coda para você** em background.

## 2. Para que serve?
Serve para **multiplicar sua capacidade de execução**. Enquanto você pensa na arquitetura (o "quê" e o "porquê"), o Jules executa a implementação (o "como").

## 3. A Vantagem do Remoto (Parallel / Async)
A maior vantagem não é a velocidade de um único agente, mas a **escalabilidade horizontal**.
*   **Humano:** 1 tarefa por vez (Serial).
*   **Jules Swarm:** 15+ tarefas por vez (Paralelo).
*   **Custo Cognitivo Zero:** Você dispara o comando e esquece. Volta 10 minutos depois com 15 PRs prontos para review.

---

## 4. 法 As Leis da Delegação (The Laws of Delegation)

Para garantir sucesso, **TODA** tarefa delegada deve obedecer a estas leis:

### 1. Lei do "Contexto Primeiro" (The Ritual)
**MANDATÓRIO:** Toda tarefa que você der ao Julesdeve começar instruindo o agente a ler a teoria antes da prática.
> *"1. Examine a documentação em `docs/*` (leia todos os arquivos) e em seguida examine comparativamente a codebase para avaliar o estado atual. Só então execute a tarefa a seguir:"*

### 2. Lei da Granularidade Coesa (Cohesive Granularity)
**NÃO FRAGMENTE O INSEPARÁVEL.**
*   ❌ **Errado:** Agente A faz o estilo, Agente B faz a lógica.
*   ✅ **Correto:** Agente A faz o componente COMPLETO (Estilo + Lógica + Testes).
*   **Regra:** 1 Componente = 1 Agente.

### 3. Lei da Abstração Estratégica
**NÃO MICROGERENCIE VERSÕES.**
*   ❌ **Errado:** "Use a versão 1.4.5.6 do axios."
*   ✅ **Correto:** "Pesquise e use a versão estável mais recente compatível."
*   **Confie na Inteligência:** Dê o objetivo, deixe ele resolver o "como".

### 4. Lei da Verificação (Trust -> 0, Verify -> 100)
**SEM TESTE = SEM PR.**
*   Toda tarefa deve incluir a instrução explícita: *"Crie testes (unitários ou de integração) para validar que a tarefa foi concluída com sucesso."*

### 5. Lei da Metodologia
Instrua o agente a **refletir** sobre qual metodologia aplicar (TDD, FDD, DDD) antes de escrever código.

---

## 5. Ψ A Estratégia do Enxame (The Swarm Strategy)

### Fase 1: A Sonda (The Probe)
**OBJETIVO:** Testar a conexão e o contexto antes de gastar recursos em massa.
**COMANDO EXATO:** Execute isto no seu terminal agora para validar:

```bash
# 1. Verifique se está logado
jules login

# 2. Dispare a Sonda (Substitua pelo SEU repo)
jules remote new --repo yuichiinumaru/ivisa-tamagui --session "Check README.md and print the project name. This is a connectivity test."
```

*   **Se falhar:** Verifique o nome do repo no GitHub ou sua autenticação.
*   **Se funcionar:** Prossiga para a Fase 2.

### Fase 2: O Script (The Script)
Este é um **TEMPLATE**. Copie e adapte para o seu projeto.
**Melhoria:** Use numeração nas tarefas para rastreabilidade com `tasks.md`.

```bash
#!/bin/bash
# scripts/launch_swarm.sh

# 1. Defina o Repo EXPLICITAMENTE (Copie da URL do GitHub)
REPO="yuichiinumaru/ivisa-tamagui"

declare -a tasks=(
    # Task #15 do docs/02-tasks.md
    "Implement OTPInput component (Logic + Style + Tests)"
    
    # Task #16 do docs/02-tasks.md
    "Implement Pagination component (Logic + Style + Tests)"
)

for task in "${tasks[@]}"; do
    echo "🚀 Dispatching: $task"
    
    # O '&' é o segredo do paralelismo
    jules remote new --repo $REPO --session "
    [CONTEXT] 
    Read docs/* then src/.
    
    [TASK] 
    $task.
    
    [METHOD] 
    Use TDD.
    
    [EXPECTED OUTPUT]
    1. Source code in packages/ui/src/...
    2. Storybook file (.stories.tsx)
    3. Unit test file (.test.tsx) passing.
    4. No lint errors.
    " & 
    
    sleep 1
done
wait
echo "✅ Swarm Dispatched! Check status with: jules remote list --repo $REPO"
```

### Fase 3: O Orquestrador (The Orchestrator)
Para projetos grandes, atue como o **General**:
1.  **Scan:** Leia `docs/tasks.md`.
2.  **Filter:** Identifique tarefas pendentes (`[ ]`) que são atômicas.
3.  **Launch:** Dispare um agente para cada tarefa pendente.
4.  **Monitor:** Use `jules remote list` para ver o progresso.

---

## 6. 🛠️ Tooling & Aliases (CLI Efficiency Pack)

Adicione ao seu `.zshrc` ou `.bashrc` para velocidade máxima:

```bash
# 1. JFEATURE: Implementa uma feature completa
# Uso: jfeature "NomeDoComponente" "Descrição detalhada"
function jfeature() {
  jules remote new --repo . --session "
  1. READ docs/* and compare with codebase.
  2. REFLECT: Choose methodology (TDD/DDD) for '$1'.
  3. IMPLEMENT: $2
  4. VERIFY: Create/Run tests to ensure success.
  "
}

# 2. JSWARM: Processamento em lote por arquivo
# Uso: jswarm "*.ts" "Adicionar tipagem explícita"
function jswarm() {
  find . -name "$1" -not -path "*/node_modules/*" | while read file; do
    echo "🚀 Launching Jules for $file..."
    jules remote new --repo . --session "In file $file: $2" &
  done
  wait
  echo "✅ Swarm complete."
}

# 3. JFIX: Correção rápida de diffs
alias jfix='jules remote new --repo . --session "Analyze git diff. Fix linting errors and type mismatches in changed files only."'
```

---

## 7. Ω Master Prompt Template

Copie esta estrutura para garantir qualidade máxima em delegações manuais:

```text
[PHASE 1: CONTEXT UPLOAD]
INSTRUCTION:
1. Examine all documentation in `docs/*` to understand the architectural vision.
2. Examine the current codebase to understand the implementation reality.
3. Identify gaps between Docs and Code for this specific task.

[PHASE 2: METHODOLOGY REFLECTION]
INSTRUCTION:
- Before coding, explicitly state which methodology fits best (TDD, FDD, DDD).
- Example: "Since this is a UI primitive, I will use TDD with Snapshot testing."

[PHASE 3: EXECUTION]
TASK: [Insert Task Name]
DETAILS:
- Implement [Subtask A]
- Implement [Subtask B]
- Keep them cohesive in the same module (Rule of Cohesive Granularity).
- Use your knowledge to pick the best/latest library versions compatible with the stack.

[PHASE 4: VERIFICATION]
REQUIREMENT:
- You must write a test (Unit or Integration) to validate your work.
- The task is only "Done" if the test passes.

!EXECUTE_PROTOCOL
```

---

## 8. ⚠️ Considerações Críticas (Leia antes de lançar)

### 1. O Fator `AGENTS.md`
O Jules (assim como outros agentes) lê o arquivo `AGENTS.md` na raiz do repositório se ele existir.
*   **Dica:** Mantenha suas "Leis do Projeto" (estrutura de pastas, libs permitidas) neste arquivo. O Jules respeitará essas regras automaticamente.

### 2. Limitações da VM (Cloud Environment)
O ambiente do Jules é efêmero e tem limites de recursos.
*   **Evite:** Rodar containers Docker pesados, builds de Android/iOS completos, ou treinar modelos de ML.
*   **Foco:** Código, Testes Unitários, Refatoração de Texto, Scripts Leves.

### 3. GitHub é a Fonte da Verdade
O Jules clona o repositório **do GitHub**, não da sua máquina local.
*   **Regra de Ouro:** Antes de disparar o swarm, faça **PUSH** de tudo.
    ```bash
    git add . && git commit -m "wip: pre-swarm" && git push
    ```
*   Se você não der push, o Jules trabalhará em uma versão desatualizada do código.

### 4. Entrega via Pull Requests
O Jules não edita seus arquivos locais magicamente. Ele abre **Pull Requests**.
*   **Workflow:** Disparar Swarm -> Esperar -> Revisar PRs -> Merge.
*   **Conflitos:** Se dois agentes editarem o mesmo arquivo (ex: `index.ts`), haverá conflitos de merge.
    *   *Solução:* Tente isolar tarefas por arquivos diferentes (Lei da Granularidade Coesa).
