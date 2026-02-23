<script setup>
import { RouterView } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<template>
  <RouterView v-slot="{ Component }">
    <DefaultLayout>
      <component :is="Component" />
    </DefaultLayout>
  </RouterView>
</template>
