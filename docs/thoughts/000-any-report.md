---
title: Relatório inicial de ocorrências de `any`
created: 2026-01-15
---

Resumo:

- Objetivo: remover usos de `any` progressivamente, priorizando `packages/ui`.
- Ação realizada: varredura inicial (`grep`) em arquivos `*.ts, *.tsx, *.js, *.jsx`.

Principais locais (amostra):

- `packages/ui/src/atoms/Avatar.stories.tsx` — vários casts `as any` e `Meta<any>`.
- `packages/ui/src/organisms/WizardForm/WizardForm.tsx` — uso intensivo em schemas e form handlers.
- `packages/ui/src/molecules/Sheet/Sheet.tsx` — casts com Tamagui components (`as any`).
- `packages/ui/src/molecules/Resizable.tsx` — aliases `const FooAny: any = Foo`.
- Muitos testes e stories usam `any` para mocks e stubs.

Próximos passos recomendados:

1. Priorizar `packages/ui` (já em progresso). Corrigir em 3 sub-passos:
   - Stories/tests: substituir `any` por tipos concretos ou `unknown` com validações mínimas; onde for mock, usar tipos de teste (`Partial<...>`).
   - Componentes: substituir `as any` por `unknown` ou tipos concretos; introduzir tipos auxiliares (ex: `TamaguiFrameProps`).
   - Tamagui interop: quando necessário, criar tipos auxiliares locais para evitar cast repetido (`type TamaguiAny = React.ComponentType<any>` -> preferir `unknown` e conversões explícitas).

2. Após correções locais, executar `yarn build:ci` e `yarn test` e iterar nas quebras.

Observações:

- Alguns `any` estão em testes e stories; podemos tratá-los por último se causarem muito ruído.
- Evitar mudanças globais em `tsconfig.json` que causem conflitos com Tamagui; preferir corrigir tipos locais.

Arquivo gerado automaticamente pelo agente — use como referência inicial.
