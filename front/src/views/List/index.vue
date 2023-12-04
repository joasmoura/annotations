<script setup lang="ts">
import { ref, watch } from 'vue'
import ListItem from '../../components/ListItem/index.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const itemSelected = ref(null)
  const items = ref([
    {
      id: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2020-01-01 10:10',
    },
    {
      id: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2020-01-01 10:10',
    },
  ])

  const selectItem = (id: number) => {
    itemSelected.value = items.value.find(it => it.id === id)
  }

  const deleteItem = (id: number) => {
    items.value = items.value.filter(it => it.id !== id)
  }

  watch(items, (newValues, oldValues) => {
    if (newValues.length === 0) {
      router.push('/')      
    }
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
        @deleteItem="$event => deleteItem($event)"
      />
    </div>

    <div class="w-full bg-white grow p-5" v-if="itemSelected">
      <pre>{{ itemSelected }}</pre>
    </div>
  </main>
</template>