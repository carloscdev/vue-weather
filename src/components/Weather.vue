<script setup>
import useClima from '../composables/useClima';
import { Icon } from '@iconify/vue';

const { formatearTemperatura } = useClima();
defineProps({
  clima: {
    type: Object,
    required: true
  }
});

const convertirHora = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const formattedTime = hours + ':' + minutes.substr(-2);
  return formattedTime;
}
</script>

<template>
<div class="grid gap-5">
  <section class="backdrop-blur bg-dark rounded-3xl grid sm:grid-cols-2 items-center">
    <img :src="`https://openweathermap.org/img/wn/${clima.weather[0].icon}@4x.png`"  alt="Weather Icon" class="mx-auto min-h-[150px]">
    <h2 class="text-[4rem] font-bold grid leading-[1] text-center sm:text-left mb-5 sm:mb-0 -mt-5 sm:mt-0 justify-self-center">
      <span class="font-semibold text-sm capitalize">
        {{ clima.weather[0].description }}
      </span>
      <span>{{ formatearTemperatura(clima.main.temp) }}&deg</span>
    </h2>
  </section>
  <section class="bg-dark rounded-3xl p-5">
    <ul class="grid grid-cols-2 sm:grid-cols-3 gap-5">
      <li class="text-center">
        <Icon icon="mingcute:cloud-windy-line" class="mx-auto text-2xl" />
        <span class="text-sm font-bold">{{ clima.wind.speed }}m/s</span>
        <span class="block text-xs font-light opacity-50">Wind</span>
      </li>
      <li class="text-center">
        <Icon icon="mingcute:wiper-line" class="mx-auto text-2xl" />
        <span class="text-sm font-bold">{{ clima.main.pressure }}hPa</span>
        <span class="block text-xs font-light opacity-50">Pressure</span>
      </li>
      <li class="text-center">
        <Icon icon="mingcute:drop-line" class="mx-auto text-2xl" />
        <span class="text-sm font-bold">{{ clima.main.humidity }}%</span>
        <span class="block text-xs font-light opacity-50">Humidity</span>
      </li>
      <li class="text-center">
        <Icon icon="mingcute:eye-line" class="mx-auto text-2xl" />
        <span class="text-sm font-bold">{{ clima.visibility/1000 }}Km</span>
        <span class="block text-xs font-light opacity-50">Visibility</span>
      </li>
      <li class="text-center">
        <Icon icon="mingcute:clouds-line" class="mx-auto text-2xl" />
        <span class="text-sm font-bold">{{ clima.clouds.all }}%</span>
        <span class="block text-xs font-light opacity-50">Clouds</span>
      </li>
      <li class="text-center">
        <Icon icon="mingcute:sweats-line" class="mx-auto text-2xl" />
        <span class="text-sm font-bold">{{ formatearTemperatura(clima.main.feels_like) }}&deg</span>
        <span class="block text-xs font-light opacity-50">Feels Like</span>
      </li>
    </ul>
  </section>
  <section class="bg-dark rounded-3xl p-5 grid grid-cols-[0.7fr,1fr,0.7fr] items-center">
    <p class="text-center">
      <span class="text-sm font-bold">{{ convertirHora(clima.sys.sunrise) }}</span>
      <span class="block text-xs font-light opacity-50">sunrise</span>
    </p>
    <div>
    <svg class="w-full h-5 rotate-180">
      <line x1="0" y1="0" x2="100%" y2="0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="5 5" />
      <circle cx="50%" cy="15%" r="10" class="fill-yellow-400" />
    </svg>
    </div>
    <p class="text-center">
      <span class="text-sm font-bold">{{ convertirHora(clima.sys.sunset) }}</span>
      <span class="block text-xs font-light opacity-50">sunset</span>
    </p>
  </section>
</div>
</template>
