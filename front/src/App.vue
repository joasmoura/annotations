<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="py-4 px-10 text-3xl flex justify-between">
    <h1 class="font-bold">Anotações</h1>
    <RouterLink to="/" v-if=" route.name !== 'home'">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-7 h-7"><title>close</title><path fill="gray" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
    </RouterLink>
  </div>

  <RouterView />
</template>
