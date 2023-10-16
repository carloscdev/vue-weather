<script setup>
import { onMounted, ref } from 'vue';

const isActive = ref(true);

onMounted(() => {
  setTimeout(() => {
    isActive.value = false;
  }, 3000);
});
</script>
<template>
  <div v-if="isActive" class="text-lg absolute bottom-5 right-0 left-0 shadow-lg w-96 max-w-full rounded-xl p-5 mx-auto text-center font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <slot></slot>
  </div>
</template>
