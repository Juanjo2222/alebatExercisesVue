import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const counter = ref(0)

  const increment = () => {
    counter.value++
  }

  const decrement = () => {
    counter.value--
  }

  const doubleCounter = computed(() => counter.value * 2)

  return {
    counter,
    increment,
    decrement,
    doubleCounter,
  }
})
