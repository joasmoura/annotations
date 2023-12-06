<script setup lang="ts">
import { ref, watch, onBeforeMount } from 'vue'
import ListItem from '../../components/ListItem/index.vue'
import { useRouter } from 'vue-router'
import List from '../../database/AnotationDb'
import AnotationDb from '../../database/AnotationDb'
import BtnCreate from '@/components/BtnCreate/index.vue'
import ModalDelete from '../../components/ModalDelete/index.vue'
import {formatDate} from '../../utils/date'

  const annotation = new AnotationDb()
  const router = useRouter()
  const itemSelected = ref(null)
  const load = ref(false)
  const items = ref([])
  const showModalDelete = ref(false)
  const itemDelete = ref(null)
  
  async function getAll() {
    load.value = true
    items.value = []
    const setList = (e) => {
      if (!e) return

      items.value.push(e.value)
      e.continue()
    }
    await annotation.getAll(e => setList(e))
    load.value = false
  }

  const selectItem = (id: number) => {
    itemSelected.value = items.value.find(it => it.id === id)
  }

  const deleteItem = () => {
    annotation.destroy(itemDelete.value)
    getAll()
    itemSelected.value = null
    showModalDelete.value = false
  } 

  watch(items.value, () => {
    if (items.value.length) {
      router.push('/')
    } 
  })

onBeforeMount(() => {
  setTimeout(() => {
    getAll()
  }, 500)
})
</script>

<template>
  <main class="p-5 flex md:justify-between flex-col md:flex-row gap-4">
    <div class="w-full md:w-2/5 ">
      <ListItem 
        v-for="item in items" 
        :key="item.id" 
        :item="item" 
        @itemSelected="$event => selectItem($event)"
        @deleteItem="$event => {
          itemDelete = $event; 
          showModalDelete = true
        }"
      />
      <BtnCreate/>
    </div>

    <div class="w-full bg-white p-5 flex flex-col justify-between" v-if="itemSelected">
      <p><strong>Descrição: </strong>{{ itemSelected.description }}</p>
      <p><strong>Lembrete: </strong>{{ formatDate(itemSelected.date) }} {{ formatDate(itemSelected.date, true) }}</p>
      <p><strong>Categorização: </strong>{{ itemSelected.category }}</p>
      <p><strong>Potencial do negório: </strong>{{ itemSelected.potential }}</p>

      <router-link :to="`/form/${itemSelected.id}`" class="bg-[#1da1f2] py-3 text-center text-white rounded-full mt-10 w-full md:w-1/4">Editar</router-link>
    </div>
  </main>

  <ModalDelete v-if="showModalDelete" @close="showModalDelete = false" @delete="deleteItem()"/>
</template>