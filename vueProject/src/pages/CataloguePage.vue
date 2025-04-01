<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { counter } = storeToRefs(counterStore)
</script>

<template>
  <ProductCard></ProductCard>
  <RouterLink to="/home">
    <button class="home-button">Ver Home</button>
  </RouterLink>
  <p>Contador = {{ counter }}</p>
</template>

<style scoped>
.home-button {
  margin-top: 1rem;
  background-color: rgb(228, 228, 179);
  border-radius: 1.5rem;
  padding: 0.5rem;
}
</style>
