<script setup>
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white z-50 w-2/6 m-auto rounded">
      <div class="border-b border-b-zinc-200 py-4 px-10 flex justify-between">
        <h6 class="text-[20px] text-black">Deseja excluir esta anotação</h6>
        <button class="text-red-500" @click="$emit('close')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-7 h-7"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg></button>
      </div>

      <div class="p-10">
        Você está prestes a deletar uma anotação e esta ação não poderá ser desfeita.
        Tem certeza que deseja excluí-la?
      </div>

      <div class="flex justify-end px-10 py-3 gap-4">
        <button class="bg-white border  text-zinc-500 py-2 px-8 rounded-full hover:bg-zinc-100" @click="$emit('close')">Cancelar</button>
        <button class="bg-red-500 border  text-white py-2 px-8 rounded-full hover:bg-red-600" @click="$emit('delete')">Excluir</button>
      </div>
    </div>
  </div>
</template>
