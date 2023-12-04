<script setup lang="ts">
  import { defineProps } from 'vue'
  interface typeProps {
    item: Object
  } 

  const props = defineProps<typeProps>()

const limitString = (str: string) => {
    const limit = 28
    if (str.length > limit) {
      return str.slice(0, limit) + '...'
    }
  }
</script>
<template>
  <div class="bg-white rounded-md p-2 flex justify-between items-center flex-row w-full mb-3">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 rotate-[125deg]"><title>attachment</title><path fill="gray" d="M7.5,18A5.5,5.5 0 0,1 2,12.5A5.5,5.5 0 0,1 7.5,7H18A4,4 0 0,1 22,11A4,4 0 0,1 18,15H9.5A2.5,2.5 0 0,1 7,12.5A2.5,2.5 0 0,1 9.5,10H17V11.5H9.5A1,1 0 0,0 8.5,12.5A1,1 0 0,0 9.5,13.5H18A2.5,2.5 0 0,0 20.5,11A2.5,2.5 0 0,0 18,8.5H7.5A4,4 0 0,0 3.5,12.5A4,4 0 0,0 7.5,16.5H17V18H7.5Z" /></svg>
    </div>

    <div class="flex flex-col">
      <a href="javascript:void(0)" class="underline"  @click="$emit('itemSelected', props.item.id)">{{ limitString(props.item?.description) }}</a>
      <span>{{ props.item?.date }}</span>
    </div>

    <button @click="$emit('deleteItem', props.item.id)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5"><title>trash-can-outline</title><path fill="red" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
    </button>
  </div>
</template>