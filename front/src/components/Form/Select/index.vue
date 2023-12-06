<script setup>
  const props = defineProps({
    modelValue: String,
    options: Object,
    error: String
  })

  defineEmits(['update:modelValue'])
</script>
<template>
  <div class="bg-white rounded-full px-3" :class="!!props.error ? 'border-red-500 border' : ''">
    <select class="p-4 w-full bg-transparent"  @input="$emit('update:modelValue', $event.target.value)">
      <option v-for="(option, key) in props.options" :selected="option.id == props.modelValue ? 'selected' : ''" :key="key" :value="option.id">{{ option.name }}</option>
    </select>
  </div>
</template>