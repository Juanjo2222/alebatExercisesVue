<script setup lang="ts">
import TheTitle from './TheTitle.vue'
import { ref } from 'vue'
const counter = ref(0)
</script>

<template>
  <div>
    <TheTitle #title>Título estático</TheTitle>
    <p>Contador = {{ counter }}</p>
    <button class="increment" @click="counter++">Incrementar</button>
    <button class="decrement" @click="counter--">Decrementar</button>
  </div>
</template>

<style></style>
