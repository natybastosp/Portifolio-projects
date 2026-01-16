import { useState, useEffect, useMemo } from "react";
import flowersData from "../data/flowers.json";
import categoriesData from "../data/categories.json";

/**
 * Hook customizado para gerenciar dados de flores
 * Fornece funcionalidades de busca, filtro e acesso aos dados
 */
export const useFlowers = () => {
  const [flowers, setFlowers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento de dados (pode ser substituído por fetch de API)
    setFlowers(flowersData);
    setCategories(categoriesData);
    setLoading(false);
  }, []);

  /**
   * Busca uma flor específica por ID
   * @param {string} id - ID da flor
   * @returns {object|undefined} Objeto da flor ou undefined
   */
  const getFlowerById = (id) => {
    return flowers.find((flower) => flower.id === id);
  };

  /**
   * Busca flores por categoria
   * @param {string} categoryId - ID da categoria
   * @returns {array} Array de flores da categoria
   */
  const getFlowersByCategory = (categoryId) => {
    return flowers.filter((flower) => flower.category === categoryId);
  };

  /**
   * Busca flores por termo de pesquisa
   * @param {string} searchTerm - Termo de busca
   * @returns {array} Array de flores que correspondem à busca
   */
  const searchFlowers = (searchTerm) => {
    if (!searchTerm) return flowers;

    const term = searchTerm.toLowerCase();
    return flowers.filter(
      (flower) =>
        flower.name.toLowerCase().includes(term) ||
        flower.scientificName.toLowerCase().includes(term) ||
        flower.meanings.some((meaning) =>
          meaning.toLowerCase().includes(term)
        ) ||
        flower.tags.some((tag) => tag.toLowerCase().includes(term))
    );
  };

  /**
   * Filtra flores por múltiplos critérios
   * @param {object} filters - Objeto com filtros { category, season, tags }
   * @returns {array} Array de flores filtradas
   */
  const filterFlowers = ({ category, season, tags }) => {
    let filtered = [...flowers];

    if (category) {
      filtered = filtered.filter((flower) => flower.category === category);
    }

    if (season) {
      filtered = filtered.filter((flower) =>
        flower.season.toLowerCase().includes(season.toLowerCase())
      );
    }

    if (tags && tags.length > 0) {
      filtered = filtered.filter((flower) =>
        tags.some((tag) => flower.tags.includes(tag))
      );
    }

    return filtered;
  };

  /**
   * Obtém todas as tags únicas
   * @returns {array} Array de tags únicas
   */
  const getAllTags = useMemo(() => {
    const tagsSet = new Set();
    flowers.forEach((flower) => {
      flower.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, [flowers]);

  /**
   * Obtém todas as estações únicas
   * @returns {array} Array de estações
   */
  const getAllSeasons = useMemo(() => {
    const seasonsSet = new Set();
    flowers.forEach((flower) => {
      // Separa estações compostas (ex: "Primavera/Verão")
      flower.season
        .split("/")
        .forEach((season) => seasonsSet.add(season.trim()));
    });
    return Array.from(seasonsSet).sort();
  }, [flowers]);

  return {
    flowers,
    categories,
    loading,
    getFlowerById,
    getFlowersByCategory,
    searchFlowers,
    filterFlowers,
    getAllTags,
    getAllSeasons,
  };
};
