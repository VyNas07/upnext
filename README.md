# Plataforma de Programas de Formação

Repositório monolítico que contém a aplicação front-end (Next.js) e, futuramente, o back-end (API).  
Este repositório tem foco inicial no **front-end**; o backend será adicionado após a entrega do MVP do front.

---

## Estrutura do repositório

/
├─ frontend/ # Aplicação Next.js (App Router, Chakra, Zustand)
│ ├─ src/
│ │ ├─ app/
│ │ ├─ components/
│ │ ├─ features/
│ │ ├─ lib/
│ │ ├─ mocks/
│ │ ├─ store/
│ │ └─ types/
│ ├─ package.json
│ └─ ...
├─ backend/ # Backend (vazio/placeholder por enquanto)
│ └─ README.md
├─ .gitignore
└─ README.md # Este arquivo

---

## Tecnologias (front)

- Next.js (App Router) + TypeScript  
- Chakra UI (design system)  
- Zustand (estado global, persistência local)  
- ESLint + Prettier (padronização)  

---

## Checklist mínimo para entrega (MVP - Front)

- Next.js (App Router) configurado
- Chakra UI integrado com tema
- Zustand configurado (filtros, favoritos persistência)
- /programas — listagem com filtros e cards
- /programas/[id] — página de detalhe (mock)
- /instituicoes — listagem básica
- /favoritos — exibe programas favoritados (persistente)
- /perfil — interesses simulados
- Loading / Empty / Error states tratados (skeletons/mensagens)
- Deploy público (Vercel) e link no README
- README com instruções e checklist

## Como rodar (apenas front por enquanto)

> Execute os comandos a partir da raiz do repositório.

```bash
# Entrar na pasta do frontend
cd frontend

# Instalar dependências
yarn install   # ou npm install

# Rodar em ambiente de desenvolvimento
yarn dev       # abre em http://localhost:3000

# Build de produção
yarn build
yarn start     # se necessário
```
## Equipe:

Vyktor Nascimento
Luan Martins
Mariana Ferreira
João Lira