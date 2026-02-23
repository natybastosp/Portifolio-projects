<script setup>
//import SeasonSelector from "./SeasonSelector.vue";
const routes = [
  { to: "/standings", label: "Classificação" },
  { to: "/drivers", label: "Drivers" },
  { to: "/constructors", label: "Construtores" },
  { to: "/calendar", label: "Calendário" },
];
</script>

<template>
  <nav
    class="flex items-center gap-1 bg-bg-card border border-border-base rounded-2xl px-8 py-2 shadow-sm"
  >
    <span
      class="text-red font-display font-black text-3xl tracking-tight mr-3 px-2"
      >PITWALL</span
    >

    <RouterLink
      v-for="route in routes"
      :key="route.to"
      :to="route.to"
      class="font-mono text-sm text-text-ghost px-3 py-1.5 rounded-lg hover:bg-bg-hover hover:text-text-secondary transition-all"
      active-class="bg-bg-surface text-text-primary font-semibold"
      >{{ route.label }}</RouterLink
    >

    <SeasonSelector class="ml-auto" />
  </nav>
</template>
