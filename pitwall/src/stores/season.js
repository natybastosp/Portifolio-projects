import { defineStore } from "pinia";

export const useSeasonStore = defineStore("season", {
  state: () => ({
    selectedSeason: 2025,
    availableSeasons: [2025, 2024, 2023, 2022, 2021],
  }),
  actions: {
    setSeason(year) {
      this.selectedSeason = year;
    },
  },
});

// src/stores/team.js — tema dinâmico por equipe
export const useTeamStore = defineStore("team", {
  state: () => ({
    activeTeam: null,
    teams: {
      /* objeto com cores de cada equipe */
    },
  }),
  actions: {
    setTeam(teamId) {
      this.activeTeam = teamId;
      // Atualiza CSS vars globais
      const t = this.teams[teamId];
      document.documentElement.style.setProperty(
        "--color-team-primary",
        t.primary,
      );
      document.documentElement.style.setProperty(
        "--color-team-secondary",
        t.secondary,
      );
    },
  },
});
