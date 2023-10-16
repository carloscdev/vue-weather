import { computed, ref } from "vue";
import axios from "axios";

export default function useClima() {

  const isLoading = ref(false);
  const hasError = ref('');
  const clima = ref({});

  const obtenerClima = async ({ ciudad, pais }) => {
    try {
      hasError.value = '';
      clima.value = {};
      isLoading.value = true;
      const key = import.meta.env.VITE_API_KEY;

      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;

      const { data } = await axios.get(url);
      const { lat, lon } = data[0];

      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
      const { data: dataClima } = await axios.get(urlClima);
      clima.value = dataClima;
    } catch (error) {
      console.error(error);
      hasError.value = 'Ciudad no encontrada.';
    } finally {
      isLoading.value = false;
    }
  }

  const mostrarClima = computed(() => {
    return Object.values(clima.value).length > 0;
  });

  const formatearTemperatura = (temperatura) => {
    return (temperatura - 273.15).toFixed(0);
  }

  return {
    obtenerClima,
    mostrarClima,
    clima,
    formatearTemperatura,
    isLoading,
    hasError,
  }
}