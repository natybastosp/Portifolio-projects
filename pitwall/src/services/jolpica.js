import axios from "axios";

const api = axios.create({
  baseURL: "https://api.jolpi.ca/ergast/f1",
  timeout: 10000,
});

export const jolpica = {
  // Standings de pilotos
  getDriverStandings: (season) => api.get(`/${season}/driverstandings.json`),

  // Standings de construtores
  getConstructorStandings: (season) =>
    api.get(`/${season}/constructorstandings.json`),

  // Calendário da temporada
  getSchedule: (season) => api.get(`/${season}.json`),

  // Resultado de uma corrida
  getRaceResult: (season, round) => api.get(`/${season}/${round}/results.json`),

  // Classificação (quali)
  getQualifying: (season, round) =>
    api.get(`/${season}/${round}/qualifying.json`),
};

// src/services/openf1.js
const of1 = axios.create({ baseURL: "https://api.openf1.org/v1" });

export const openf1 = {
  getPitStops: (sessionKey) => of1.get(`/pit?session_key=${sessionKey}`),
  getLapPositions: (sessionKey, driverNum) =>
    of1.get(`/position?session_key=${sessionKey}&driver_number=${driverNum}`),
};
