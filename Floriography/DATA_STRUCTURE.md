# 🌸 Floriografia - Estrutura de Dados

## 📋 Visão Geral

Este documento descreve a estrutura de dados JSON usada no projeto Floriografia para armazenar informações sobre flores e seus significados.

## 🗂️ Arquivos de Dados

### `flowers.json`

Contém o array principal com todas as flores e suas informações detalhadas.

### `categories.json`

Contém as categorias de significados das flores (amor, pureza, alegria, etc.).

---

## 📊 Estrutura de uma Flor

```json
{
  "id": "string", // Identificador único (slug)
  "name": "string", // Nome popular da flor
  "scientificName": "string", // Nome científico
  "category": "string", // ID da categoria
  "meanings": ["string"], // Array de significados
  "description": "string", // Descrição geral
  "history": "string", // História e mitologia
  "symbolism": {
    "primary": "string", // Simbolismo principal
    "secondary": ["string"], // Simbolismos secundários
    "negative": "string | null" // Significado negativo (se houver)
  },
  "colorVariations": [
    {
      "color": "string", // Nome da cor
      "meaning": "string" // Significado desta cor
    }
  ],
  "season": "string", // Estação(ões) de floração
  "origin": "string", // Origem geográfica
  "bloomTime": "string", // Período de floração
  "images": ["string"], // Array de caminhos de imagens
  "tags": ["string"], // Tags para busca
  "occasionSuggestions": ["string"], // Sugestões de ocasiões
  "references": "string" // Referência ao livro
}
```

---

## 📌 Estrutura de Categoria

```json
{
  "id": "string", // Identificador único
  "name": "string", // Nome da categoria
  "description": "string", // Descrição
  "icon": "string", // Emoji representativo
  "color": "string" // Cor HEX
}
```

---

## 🎨 Categorias Disponíveis

1. **amor** - Amor e Romance 💕
2. **pureza** - Pureza e Inocência 🤍
3. **alegria** - Alegria e Felicidade 🌞
4. **modestia** - Modéstia e Humildade 🌸
5. **serenidade** - Serenidade e Calma 🕊️
6. **inocencia** - Inocência e Simplicidade 🌼
7. **elegancia** - Elegância e Sofisticação 👑
8. **lealdade** - Lealdade e Honestidade 🤝
9. **prosperidade** - Prosperidade e Fortuna 🍀

---

## 🌺 Flores Atualmente no Banco de Dados

1. **Rosa Vermelha** - Amor profundo e paixão
2. **Violeta** - Modéstia e humildade
3. **Lírio Branco** - Pureza e inocência
4. **Girassol** - Adoração e lealdade
5. **Tulipa Vermelha** - Declaração de amor
6. **Lavanda** - Serenidade e calma
7. **Margarida** - Inocência e amor leal
8. **Orquídea** - Beleza exótica e elegância
9. **Crisântemo** - Lealdade e honestidade
10. **Peônia** - Romance e prosperidade

---

## 🔍 Como Adicionar Novas Flores

Para adicionar uma nova flor ao banco de dados:

1. Abra `src/data/flowers.json`
2. Adicione um novo objeto seguindo a estrutura acima
3. Certifique-se de usar um `id` único (formato: `nome-da-flor`)
4. Adicione as imagens em `public/images/flowers/`
5. Use uma `category` existente ou crie uma nova em `categories.json`

### Exemplo Mínimo:

```json
{
  "id": "cravo-vermelho",
  "name": "Cravo Vermelho",
  "scientificName": "Dianthus caryophyllus",
  "category": "amor",
  "meanings": ["Admiração", "Amor profundo"],
  "description": "O cravo vermelho simboliza admiração e amor profundo.",
  "history": "Usado desde a antiguidade...",
  "symbolism": {
    "primary": "Admiração",
    "secondary": ["Amor maternal"],
    "negative": null
  },
  "colorVariations": [
    {
      "color": "Vermelho",
      "meaning": "Amor profundo"
    }
  ],
  "season": "Primavera",
  "origin": "Mediterrâneo",
  "bloomTime": "Abril a Junho",
  "images": ["/images/flowers/cravo-vermelho-1.jpg"],
  "tags": ["amor", "admiração"],
  "occasionSuggestions": ["Dia das Mães"],
  "references": "Floriografia - Capítulo X"
}
```

---

## 🛠️ Hooks e Utilitários

### `useFlowers` Hook

Hook customizado que fornece:

- `flowers` - Array de todas as flores
- `categories` - Array de categorias
- `getFlowerById(id)` - Buscar por ID
- `getFlowersByCategory(categoryId)` - Filtrar por categoria
- `searchFlowers(searchTerm)` - Buscar por termo
- `filterFlowers({ category, season, tags })` - Filtro avançado
- `getAllTags` - Todas as tags disponíveis
- `getAllSeasons` - Todas as estações

### `searchFilters` Utils

Funções utilitárias para:

- `normalizeText()` - Normalizar texto para busca
- `sortFlowers()` - Ordenar flores
- `groupByCategory()` - Agrupar por categoria
- `getFlowersByMeaning()` - Buscar por significado
- `getFlowersForOccasion()` - Buscar por ocasião
- `getFlowerStatistics()` - Estatísticas do banco de dados

---

## 📸 Gerenciamento de Imagens

### Convenções de Nomenclatura:

- Formato: `nome-da-flor-numero.jpg`
- Exemplo: `rosa-vermelha-1.jpg`, `rosa-vermelha-2.jpg`
- Localização: `public/images/flowers/`

### Recomendações:

- Usar imagens de alta qualidade
- Formato preferencial: JPG ou WebP
- Tamanho máximo: 1MB por imagem
- Dimensões recomendadas: 800x600px ou maior

---

## 🚀 Expansão Futura

### Para adicionar mais funcionalidades:

1. **Filtros de cor** - Adicionar campo `primaryColor`
2. **Dificuldade de cultivo** - Adicionar campo `careLevel`
3. **Compatibilidade** - Flores que combinam bem juntas
4. **Usos medicinais** - Adicionar campo `medicinalUses`
5. **Perfume** - Adicionar campo `fragrance`
6. **Toxicidade** - Adicionar campo `toxicity`

### Exemplo de campos adicionais:

```json
{
  "primaryColor": "#FF0000",
  "careLevel": "fácil | moderado | difícil",
  "fragrance": "forte | suave | ausente",
  "toxicity": {
    "pets": true,
    "humans": false,
    "notes": "Tóxico para gatos e cães"
  },
  "medicinalUses": ["Chá calmante", "Uso tópico"]
}
```

---

## 📚 Referências

- Livro: **Floriografia - A Linguagem das Flores**
- Estrutura baseada em dados históricos e culturais
- Simbolismos da Era Vitoriana
- Mitologia grega, romana e nórdica
- Tradições asiáticas (China e Japão)

---

## 🔄 Versionamento

**Versão atual:** 1.0.0

- 10 flores catalogadas
- 9 categorias definidas
- Estrutura completa de dados
- Hooks e utilitários implementados

---

## 📝 Notas

- Sempre adicione referências ao livro original
- Mantenha consistência nos IDs (use kebab-case)
- Verifique se as imagens existem antes de adicionar
- Teste a busca e filtros após adicionar novas flores
- Mantenha este README atualizado
