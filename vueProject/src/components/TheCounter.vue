<script setup lang="ts">
import TheTitle from './TheTitle.vue'
import { ref } from 'vue'
const counter = ref(0)
</script>

<template>
  <section>
    <TheTitle #title>Título estático</TheTitle>
    <p>Contador = {{ counter }}</p>
    <div v-if="counter <= 10">
      <button class="increment" @click="counter++">Incrementar</button>
    </div>
    <div v-if="counter !== 0">
      <button class="decrement" @click="counter--">Decrementar</button>
    </div>
  </section>
</template>
