<script setup>
import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    modelValue: String,
    error: String
  })

  defineEmits(['update:modelValue'])
</script>
<template>
    <textarea ref="textarea" class="rounded-lg p-4" :class="!!props.error ? 'border-red-500 border' : ''" :value="modelValue" @input="$event => $emit('update:modelValue', $event.target.value)"></textarea>
</template>
