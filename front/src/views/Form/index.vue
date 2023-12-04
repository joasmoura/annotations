<script setup lang="ts">
import TextInput from '../../components/Form/TextInput/index.vue'
import TextArea from '../../components/Form/TextArea/index.vue'
import Select from '../../components/Form/Select/index.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

  const save = () => {
    console.log('save')
  }
</script>

<template>
  <div class="md:w-6/12 m-auto px-10 md:p-0">
    <form @submit.prevent="save" class="flex flex-col gap-4">
      <TextArea placeholder="Exp.: Ao falar com Luiza" rows="7"/>

      <label for="potencial">Potencial do negócio</label>
      <TextInput id="potencial" placeholder="Potencial do negócio"/>
      
      <label for="categorizacao">Categorização</label>
      <Select placeholder="Selecione uma categoria"/>

      <label for="lembrete">Lembrete</label>
      <TextInput id="lembrete" placeholder="Selecione uma data" type="date"/>

      <div class="flex flex-row gap-4 mt-5">
        <button type="submit" class="bg-red-400 p-3 rounded-full" v-if="route.params.id">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-7 h-7"><title>trash-can-outline</title><path fill="white" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
        </button>

        <button type="submit" class="bg-[#1da1f2] py-3 px-10 rounded-full w-full text-white">Salvar</button>
      </div>
    </form>
  </div>
</template>


<style>

</style>