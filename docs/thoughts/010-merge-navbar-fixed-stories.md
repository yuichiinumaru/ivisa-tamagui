# 010 — Merge PR #271 Navbar Fixed Stories

## Contexto
- PR aberto: `Spyg1rl:feat/navbar-fixed-stories` para `yuichiinumaru:main`.
- O checkout local já continha a versão estabilizada de `Navbar`/`Sidebar` de `main`, enquanto o PR adicionava cenários de Storybook para navbar fixa/deslogada e suporte a `status` no usuário.

## Decisão de resolução
- Preservar a implementação tipada e estável da `Navbar` em `main`.
- Incorporar o valor funcional do PR: stories `GoldenPath`, `LoggedOut` e `Fixed`, com mocks pt-BR e sem serializar JSX complexo em `args`.
- Aceitar `status` em `UserProfile` como fallback quando `role` não existe, compatibilizando os mocks antigos do PR sem quebrar a API atual.

## Validação esperada
- Jest deve cobrir renderização de perfil com `role` e fallback `status`.
- Build/Storybook devem validar os cenários visuais quando o ambiente permitir execução completa.
