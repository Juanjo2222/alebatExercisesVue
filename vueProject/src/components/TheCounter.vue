<script setup lang="ts">
import TheTitle from './TheTitle.vue'
import { increment, decrement, counter } from '@/composables/TheCounter.vue'
</script>

<template>
  <section>
    <TheTitle>
      <template #title>Título estático</template>
    </TheTitle>
    <p :class="counter === 10 ? 'active' : 'inactive'">Contador = {{ counter }}</p>
    <button class="increment" @click="increment" v-if="counter <= 10">Incrementar</button>
    <button class="decrement" @click="decrement" v-if="counter !== 0">Decrementar</button>
  </section>
</template>

<style>
.active {
  color: green;
}
</style>
