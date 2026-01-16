# 🌺 Floriografia - A Linguagem das Flores

Uma aplicação web interativa que explora o fascinante mundo da floriografia, a linguagem vitoriana das flores. Cada flor possui significados únicos, histórias mitológicas e simbolismos culturais que foram usados por séculos para expressar sentimentos de forma discreta e elegante.

## ✨ Sobre o Projeto

Este projeto é baseado no livro **"Floriografia - A Linguagem das Flores"** e apresenta um catálogo digital completo com:

- 🌸 **Significados** - Descubra o significado oculto em cada flor
- 💐 **Combinações** - Crie mensagens únicas combinando diferentes flores
- 🌹 **Buquês** - Arranjos especiais para cada ocasião
- 📖 História e mitologia de cada flor
- 🎨 Variações de cores e seus significados
- 🗓️ Estações de floração e origens
- 🔍 Sistema de busca e filtros avançados

## 🛠️ Tecnologias

- **React 19** - Biblioteca JavaScript para UI
- **Vite** - Build tool e dev server ultra-rápido
- **Tailwind CSS 4** - Framework CSS utility-first
- **React Router DOM** - Sistema de roteamento SPA
- **JSON** - Banco de dados estático

## 📁 Estrutura do Projeto

```
Floriography/
├── public/
│   ├── fonts/                # Fontes personalizadas (Yeseva One, Josefin Slab)
│   └── images/
│       └── flowers/          # Imagens das flores
├── src/
│   ├── components/           # Componentes React reutilizáveis
│   │   ├── Layout.jsx        # Layout padrão com Navbar
│   │   └── navbar.jsx        # Barra de navegação
│   ├── pages/                # Páginas da aplicação
│   │   ├── Home.jsx          # Página inicial
│   │   ├── Significados.jsx  # Catálogo de flores
│   │   ├── Combinacoes.jsx   # Combinações de flores
│   │   └── Buques.jsx        # Buquês especiais
│   ├── routes/
│   │   └── index.jsx         # Configuração de rotas
│   ├── data/
│   │   ├── flowers.json      # Dados completos das flores
│   │   └── categories.json   # Categorias de significados
│   ├── hooks/
│   │   └── useFlowers.js     # Hook customizado para gerenciar flores
│   └── utils/
│       └── searchFilters.js  # Utilitários de busca e filtros
├── DATA_STRUCTURE.md         # Documentação da estrutura de dados
├── Floriografia.pdf          # Livro de referência
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta do projeto
cd Floriography

# Instale as dependências
npm install

# Execute o projeto em modo desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 📊 Banco de Dados

### Flores Catalogadas (10)

1. Rosa Vermelha
2. Violeta
3. Lírio Branco
4. Girassol
5. Tulipa Vermelha
6. Lavanda
7. Margarida
8. Orquídea
9. Crisântemo
10. Peônia

### Categorias (9)

- 💕 Amor e Romance
- 🤍 Pureza e Inocência
- 🌞 Alegria e Felicidade
- 🌸 Modéstia e Humildade
- 🕊️ Serenidade e Calma
- 🌼 Inocência e Simplicidade
- 👑 Elegância e Sofisticação
- 🤝 Lealdade e Honestidade
- 🍀 Prosperidade e Fortuna

## 🎯 Funcionalidades Planejadas

### Fase 1 (Atual) ✅

- [x] Estrutura de dados JSON
- [x] Hook customizado para gerenciamento
- [x] Utilitários de busca e filtro
- [ ] Componentes básicos (Cards, Filtros)
- [ ] Páginas principais (Home, Lista, Detalhes)

### Fase 2 (Próxima)

- [ ] Sistema de busca em tempo real
- [ ] Filtros avançados (categoria, cor, estação)
- [ ] Página de detalhes de cada flor
- [ ] Galeria de imagens
- [ ] Animações e transições

### Fase 3 (Futura)

- [ ] Sistema de favoritos
- [ ] Modo escuro
- [ ] Compartilhamento social
- [ ] Quiz sobre significados
- [ ] Blog sobre floriografia
- [ ] PWA (Progressive Web App)

## 🎨 Design

O design segue uma estética romântica e elegante, inspirada na Era Vitoriana:

- Paleta de cores pastéis e suaves
- Tipografia elegante
- Elementos florais decorativos
- Layout responsivo e acessível

## 📖 Como Adicionar Novas Flores

Consulte o arquivo [DATA_STRUCTURE.md](./DATA_STRUCTURE.md) para instruções detalhadas sobre como adicionar novas flores ao banco de dados.

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFlor`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova flor: Jasmim'`)
4. Push para a branch (`git push origin feature/NovaFlor`)
5. Abra um Pull Request

## 📚 Referências

- Livro: **Floriografia - A Linguagem das Flores**
- História e simbolismo da Era Vitoriana
- Mitologia grega, romana e nórdica
- Tradições culturais asiáticas

## � Créditos das Imagens

Todas as fotografias utilizadas neste projeto foram obtidas de fontes de alta qualidade:

### Unsplash

Agradecimentos especiais aos fotógrafos que disponibilizaram suas lindas imagens na plataforma Unsplash:

- **[@user_id_1]** - Rosa Vermelha
- **[@user_id_2]** - Combinações de Tulipas
- **[@user_id_3]** - Buquê de Flores Mistas
- **[@felipepelaquim]** - Exemplos de flores diversas
- **[@anniespratt]** - Flores silvestres e arranjos
- **[@lianamikah]** - Detalhes florais
- **[@zoeybennett]** - Composições florais
- **[@micheile]** - Arranjos vintage

> 💡 **Nota**: Se você é um dos fotógrafos e deseja que seu ID/nome seja adicionado ou alterado nos créditos, por favor, entre em contato!

### Outras Fontes

- **Pexels** - Imagens adicionais de flores
- **Pixabay** - Ilustrações botânicas

Todas as imagens são de uso gratuito sob suas respectivas licenças (Unsplash License, Pexels License, etc.).

## 🎨 Design e Tipografia

### Fontes

- **Yeseva One** - Google Fonts (SIL Open Font License)
- **Josefin Slab** - Google Fonts (SIL Open Font License)

### Paleta de Cores

- **Cream**: `#F5F5DC` - Fundo principal
- **Burgundy**: `#800020` - Texto e detalhes
- **Gold**: `#D4AF37` - Bordas e acentos

## �📝 Licença

Este projeto é um portfólio pessoal e está disponível para fins educacionais.

**Direitos das Imagens**: Todas as imagens pertencem aos seus respectivos autores. Os créditos estão listados na seção "Créditos das Imagens" acima.

## 👤 Autora

**Natália Bastos**

- GitHub: [@natybastosp](https://github.com/natybastosp)
- Portfolio: [Floriography](https://github.com/natybastosp/Portifolio)

---

<div align="center">
  <p>Feito com 💜 e ☕ por Natália Bastos</p>
  <p>🌸 "As flores são o alfabeto da natureza" 🌸</p>
</div>

## 🌟 Agradecimentos

- Inspirado no livro de Floriografia
- Comunidade React e Vite
- Designers e desenvolvedores que compartilham conhecimento

---

**Desenvolvido com 💜 e muitas flores 🌸**
