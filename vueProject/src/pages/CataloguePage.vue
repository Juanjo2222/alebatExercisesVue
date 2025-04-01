<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { products } from '../../data/mock'

const counterStore = useCounterStore()
const { counter } = storeToRefs(counterStore)
</script>

<template>
  <div class="product-container">
    <div v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
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

.product-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
