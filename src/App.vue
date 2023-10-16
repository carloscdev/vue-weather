<script setup>
import Formulario from './components/Formulario.vue';
import Weather from './components/Weather.vue';
import useClima from './composables/useClima';
import Loader from './components/Loader.vue';
import Alert from './components/Alert.vue';
const { obtenerClima, clima, mostrarClima, isLoading, hasError } = useClima();
</script>

<template>
  <section class="bg-gray min-h-screen flex sm:items-center justify-center overflow-auto">
    <main class="bg-black p-5 sm:p-10 sm:rounded-3xl shadow text-white sm:w-[440px] w-full">
      <header class="mb-10">
        <h1 class="text-3xl font-bold"><span class="text-purple-500">Vue</span>Weather</h1>
        <span class="opacity-50 text-xs block">{{ new Date().toLocaleDateString('en-EN', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
      </header>
      <div class="contenedor buscador-clima">
        <Formulario @obtener-clima="obtenerClima"  />
        <Weather :clima="clima" v-if="mostrarClima" />
        <Loader v-if="!mostrarClima && isLoading" />
        <Alert v-if="hasError">{{ hasError }}</Alert>
      </div>
    </main>
  </section>
</template>

