<script setup lang="ts">
import BtnCreate from '@/components/BtnCreate/index.vue'
</script>

<template>
  <main class="flex-1 flex flex-col justify-center items-center min-h-[90vh] text-center">
    <RouterLink to="/list">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-20 h-20 rotate-[125deg] m-auto"><title>attachment</title><path fill="gray" d="M7.5,18A5.5,5.5 0 0,1 2,12.5A5.5,5.5 0 0,1 7.5,7H18A4,4 0 0,1 22,11A4,4 0 0,1 18,15H9.5A2.5,2.5 0 0,1 7,12.5A2.5,2.5 0 0,1 9.5,10H17V11.5H9.5A1,1 0 0,0 8.5,12.5A1,1 0 0,0 9.5,13.5H18A2.5,2.5 0 0,0 20.5,11A2.5,2.5 0 0,0 18,8.5H7.5A4,4 0 0,0 3.5,12.5A4,4 0 0,0 7.5,16.5H17V18H7.5Z" /></svg>
      <h2 class="text-4xl font-bold text-[#1da1f2]">Anotações</h2>
      <p>by Speedio</p>
    </RouterLink>

    <BtnCreate/>
  </main>
</template>
