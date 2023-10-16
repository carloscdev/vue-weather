<script setup>
import { reactive, ref } from 'vue';
import { paises } from '../utils/constants';
import Alerta from './Alert.vue';
import { Icon } from '@iconify/vue';

const busqueda = reactive({
    ciudad: '',
    pais: 'PE'
});

const messageError = ref('');

const emit = defineEmits(['obtener-clima']);

const consultarClima = () => {
  if (Object.values(busqueda).includes('')) {
    messageError.value = 'Todos los campos son obligatorios';
    return;
  }

  messageError.value = '';
  emit('obtener-clima', busqueda);
}
</script>

<template>
  <Alerta v-if="messageError">
    {{ messageError }}
  </Alerta>
  <form class="grid gap-5 mb-5" @submit.prevent="consultarClima">
    <div class="relative rounded-full overflow-hidden">
      <select
        v-model="busqueda.pais"
        id="country"
        class="block  bg-dark w-full px-5 h-12 focus:ring-2 focus:ring-purple-500 focus:outline-none caret-purple-500"
      >
        <option v-for="pais in paises" :key="pais.codigo" :value="pais.codigo">{{ pais.nombre }}</option>
      </select>
      <label for="country" class="absolute top-0 right-0 pr-5 bg-dark w-22 h-full flex items-center justify-center">
        <img :src="`https://flagcdn.com/48x36/${busqueda.pais.toLowerCase()}.png`" :alt="busqueda.pais" class="w-6">
      </label>
    </div>
    <input
      type="text"
      placeholder="Search city"
      v-model="busqueda.ciudad"
      class="rounded-full bg-dark w-full px-5 h-12 focus:ring-2  focus:ring-purple-500 focus:outline-none caret-purple-500"
    >
    <button type="submit" class="font-semibold h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-full cursor-pointer hover:shadow-lg hover:shadow-purple-500/30 flex items-center justify-center gap-3">
      Search
      <Icon icon="mingcute:search-3-line" class="mt-1" />
    </button>
  </form>
</template>