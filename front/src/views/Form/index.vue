<script setup lang="ts">
  import TextInput from '../../components/Form/TextInput/index.vue'
  import TextArea from '../../components/Form/TextArea/index.vue'
  import Select from '../../components/Form/Select/index.vue'
  import AnotationDb from '../../database/AnotationDb'
  import Categorie from '../../database/Categorie'
  import { ref, watch, onBeforeMount, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import ModalDelete from '../../components/ModalDelete/index.vue'

  const annotation = new AnotationDb()
  const categories = new Categorie
  const router = useRouter()
  const route = useRoute()
  const description = ref(null)
  const category = ref(null)
  const date = ref(null)
  const potential = ref(null)
  const error = ref({})
  const showModalDelete = ref(false)

  const verifyForm = () => {
    error.value = {}
      
    if(!description.value) error.value.description = 'Descricão obrigatória'
    if(!category.value) error.value.category = 'Categorização obrigatória'
    if(!date.value) error.value.date = 'Data obrigatória'
    if(!potential.value) error.value.potential = 'Potencial obrigatório'
  }
  
  const save = () => {
    verifyForm()
    if (Object.keys(error.value).length) return
      
      annotation.setDescription(description.value)
      annotation.setCategory(category.value)
      annotation.setDate(date.value)
      annotation.setPotential(potential.value)

      annotation.create()

      router.push('/list')
  }
  
const getItem = (id: number) => {
    const setData = (e) => {
      description.value = e.description
      potential.value = e.potential
      category.value = e.category
      date.value = e.date
    }
    annotation.getItem(id, setData)
}

  const deleteItem = () => {
    annotation.destroy(parseInt(route.params.id))
    showModalDelete.value = false

    router.push('/list')
  } 
  
  onMounted(() => {
    setTimeout(() => {
      if(!route.params.id) return 
      getItem(parseInt(route.params.id))
    }, 300)
  })
</script>

<template>
  <div class="md:w-6/12 m-auto px-10 md:p-0">
    <form @submit.prevent="save" class="flex flex-col gap-4">
      <TextArea placeholder="Exp.: Ao falar com Luiza" rows="7" v-model="description" :error="error?.description"/>

      <label for="potencial">Potencial do negócio</label>
      <TextInput type="text" id="potencial" placeholder="Potencial do negócio" v-model="potential" :error="error?.potential"/>
      
      <label for="categorizacao">Categorização</label>
      <Select :options="categories.getAll()" v-model="category"  :error="error?.category"/>

      <label for="lembrete">Lembrete</label>
      <TextInput id="lembrete" placeholder="Selecione uma data" type="datetime-local" v-model="date"  :error="error?.date"/>

      <div class="flex flex-row gap-4 mt-5">
        <button type="button" class="bg-red-400 p-3 rounded-full" v-if="route.params.id" @click="showModalDelete = true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-7 h-7"><title>trash-can-outline</title><path fill="white" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
        </button>

        <button type="submit" class="bg-[#1da1f2] py-3 px-10 rounded-full w-full text-white">Salvar</button>
      </div>
    </form>

    <ModalDelete v-if="showModalDelete" @close="showModalDelete = false" @delete="deleteItem()"/>
  </div>
</template>


<style>

</style>