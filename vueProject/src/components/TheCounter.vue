<script setup lang="ts">
import TheTitle from './TheTitle.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

const counterStatusTxt = ref('')

const counterStore = useCounterStore()
const { counter, doubleCounter } = storeToRefs(counterStore)
const { increment, decrement } = counterStore

watch(counter, (newValue) => {
  if (newValue === 0) {
    counterStatusTxt.value = 'Estás en el valor mínimo'
  } else if (newValue === 10) {
    counterStatusTxt.value = 'Estás en el valor máximo'
  } else if (newValue >= 1 && newValue <= 9) {
    counterStatusTxt.value = 'Estás en los parámetros adecuados'
  }
})
</script>

<template>
  <section>
    <TheTitle>
      <template #title>Título estático {{ counterStatusTxt }}</template>
    </TheTitle>
    <p :class="counter === 10 ? 'active' : 'inactive'">Contador = {{ counter }}</p>
    <p>Valor doble del contador{{ doubleCounter }}</p>
    <button class="increment" @click="increment" v-if="counter <= 10">Incrementar</button>
    <button class="decrement" @click="decrement" v-if="counter !== 0">Decrementar</button>
  </section>
</template>

<style>
.active {
  color: green;
}
</style>
