<script setup>
import { RouterView } from "vue-router";
import TopNav from "./components/TopNav.vue";
</script>

<template>
  <div class="min-h-screen bg-bg-base">
    <div class="max-w-screen-xl mx-auto px-8 py-6">
      <TopNav />
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
