/**
 * Utilitários para busca e filtragem de flores
 */

/**
 * Normaliza texto para busca (remove acentos e converte para minúsculas)
 * @param {string} text - Texto a ser normalizado
 * @returns {string} Texto normalizado
 */
export const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

/**
 * Verifica se um termo de busca está presente em um texto
 * @param {string} text - Texto onde buscar
 * @param {string} searchTerm - Termo de busca
 * @returns {boolean} True se encontrado
 */
export const matchesSearchTerm = (text, searchTerm) => {
  return normalizeText(text).includes(normalizeText(searchTerm));
};

/**
 * Ordena flores por diferentes critérios
 * @param {array} flowers - Array de flores
 * @param {string} sortBy - Critério de ordenação
 * @returns {array} Array ordenado
 */
export const sortFlowers = (flowers, sortBy = "name") => {
  const sorted = [...flowers];

  switch (sortBy) {
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));

    case "scientificName":
      return sorted.sort((a, b) =>
        a.scientificName.localeCompare(b.scientificName)
      );

    case "season":
      return sorted.sort((a, b) => a.season.localeCompare(b.season));

    default:
      return sorted;
  }
};

/**
 * Agrupa flores por categoria
 * @param {array} flowers - Array de flores
 * @returns {object} Objeto com flores agrupadas por categoria
 */
export const groupByCategory = (flowers) => {
  return flowers.reduce((acc, flower) => {
    const category = flower.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(flower);
    return acc;
  }, {});
};

/**
 * Obtém sugestões de flores baseadas em significado
 * @param {array} flowers - Array de todas as flores
 * @param {string} meaning - Significado desejado
 * @returns {array} Flores que correspondem ao significado
 */
export const getFlowersByMeaning = (flowers, meaning) => {
  return flowers.filter((flower) =>
    flower.meanings.some((m) => matchesSearchTerm(m, meaning))
  );
};

/**
 * Obtém flores recomendadas para uma ocasião
 * @param {array} flowers - Array de todas as flores
 * @param {string} occasion - Ocasião
 * @returns {array} Flores recomendadas
 */
export const getFlowersForOccasion = (flowers, occasion) => {
  return flowers.filter((flower) =>
    flower.occasionSuggestions?.some((occ) => matchesSearchTerm(occ, occasion))
  );
};

/**
 * Calcula estatísticas das flores
 * @param {array} flowers - Array de flores
 * @returns {object} Objeto com estatísticas
 */
export const getFlowerStatistics = (flowers) => {
  const stats = {
    total: flowers.length,
    byCategory: {},
    bySeason: {},
    totalTags: new Set(),
    averageImagesPerFlower: 0,
  };

  let totalImages = 0;

  flowers.forEach((flower) => {
    // Contagem por categoria
    stats.byCategory[flower.category] =
      (stats.byCategory[flower.category] || 0) + 1;

    // Contagem por estação
    flower.season.split("/").forEach((season) => {
      const s = season.trim();
      stats.bySeason[s] = (stats.bySeason[s] || 0) + 1;
    });

    // Tags únicas
    flower.tags.forEach((tag) => stats.totalTags.add(tag));

    // Total de imagens
    totalImages += flower.images.length;
  });

  stats.averageImagesPerFlower = (totalImages / flowers.length).toFixed(1);
  stats.totalTags = stats.totalTags.size;

  return stats;
};
