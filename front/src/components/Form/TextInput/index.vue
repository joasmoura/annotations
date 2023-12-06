<script setup>
  const props = defineProps({
    modelValue: String,
    error: String
  })

  defineEmits(['update:modelValue'])  
</script>

<template>
  <input type="text" class="rounded-full p-4"  :class="!!props.error ? 'border-red-500 border' : ''" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>