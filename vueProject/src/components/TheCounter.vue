<script setup lang="ts">
import TheTitle from './TheTitle.vue'
import { ref } from 'vue'
const counter = ref(0)
</script>

<template>
  <section>
    <TheTitle #title>Título estático</TheTitle>
    <p>Contador = {{ counter }}</p>
    <button class="increment" @click="counter++" v-if="counter <= 10">Incrementar</button>
    <button class="decrement" @click="counter--" v-if="counter !== 0">Decrementar</button>
  </section>
</template>
