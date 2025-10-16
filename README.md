# UpNext - Plataforma de Programas de Formação em Tecnologia

Uma plataforma moderna e intuitiva para conectar talentos com oportunidades de formação em tecnologia. Desenvolvida com Next.js, Chakra UI e Zustand.

Link do deploy: https://upnext-seven.vercel.app/
## 🚀 Funcionalidades

### ✅ Implementadas

- **Página Inicial**: Hero section com estatísticas e programas em destaque
- **Lista de Programas** (`/programas`): 
  - Filtros por categoria, nível e formato
  - Busca por texto
  - Cards responsivos com informações dos programas
  - Sistema de favoritos integrado
- **Detalhes do Programa** (`/programas/[id]`):
  - Informações completas do programa
  - Requisitos e benefícios
  - Informações da instituição
  - Status de inscrições
- **Página de Instituições** (`/instituicoes`):
  - Cards com informações das instituições
  - Lista de programas por instituição
  - Links para sites oficiais
- **Sistema de Favoritos** (`/favoritos`):
  - Persistência local com Zustand
  - Contador de favoritos na navegação
  - Gerenciamento completo de favoritos
- **Perfil do Usuário** (`/perfil`):
  - Informações pessoais editáveis
  - Seleção de áreas de interesse
  - Estatísticas do usuário
- **Estados de UI**:
  - Loading states
  - Empty states
  - Error handling
  - Responsive design

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Chakra UI** - Biblioteca de componentes
- **Zustand** - Gerenciamento de estado
- **Framer Motion** - Animações
- **Emotion** - CSS-in-JS

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd upnext
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

4. Acesse [http://localhost:3000](http://localhost:3000)

## 🏗️ Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Executa o build de produção
- `npm run lint` - Executa o linter

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── page.tsx           # Página inicial
│   ├── layout.tsx         # Layout principal
│   ├── providers.tsx      # Providers do Chakra UI
│   ├── theme.ts           # Configuração do tema
│   ├── programas/         # Páginas de programas
│   ├── instituicoes/      # Página de instituições
│   ├── favoritos/         # Página de favoritos
│   └── perfil/            # Página de perfil
├── components/            # Componentes reutilizáveis
│   └── Navigation.tsx     # Componente de navegação
├── store/                 # Gerenciamento de estado
│   └── useAppStore.ts     # Store principal do Zustand
└── data/                  # Dados simulados
    └── mockData.ts        # Dados mock para desenvolvimento
```

## 🎨 Design System

### Cores
- **Brand**: Azul (#0088cc) - Cor principal da marca
- **Success**: Verde - Para estados de sucesso
- **Warning**: Amarelo - Para avisos
- **Error**: Vermelho - Para erros

### Componentes
- Cards responsivos com hover effects
- Badges para categorização
- Loading spinners
- Alertas informativos
- Navegação responsiva

## 📱 Responsividade

A aplicação é totalmente responsiva, adaptando-se a:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
# Adicione suas variáveis de ambiente aqui
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Tema Customizado
O tema do Chakra UI pode ser customizado em `src/app/theme.ts`:

```typescript
export const theme = extendTheme({
  colors: {
    brand: {
      // Suas cores personalizadas
    }
  },
  // Outras customizações
})
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outros Provedores
```bash
npm run build
npm run start
```

## 📊 Dados Simulados

O projeto inclui dados simulados em `src/data/mockData.ts`:
- 6 programas de formação
- 6 instituições parceiras
- Categorias e níveis de experiência
- Usuário de exemplo

## 🔮 Próximas Funcionalidades

- [ ] Sistema de autenticação
- [ ] API backend
- [ ] Notificações por email
- [ ] Sistema de avaliações
- [ ] Chat com mentores
- [ ] Dashboard administrativo
- [ ] Integração com redes sociais

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.


---

**UpNext** - Conectando talentos com o futuro da tecnologia 🚀
