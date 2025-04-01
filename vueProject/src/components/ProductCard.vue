<script setup lang="ts">
import { defineProps } from 'vue'
import type { Product } from '../../data/mock'

defineProps<{
  product: Product
}>()
</script>

<template>
  <section class="product-card">
    <img :src="product.image" class="product-image" />
    <h2 class="product-title">{{ product.title }}</h2>
    <span class="product-description">{{ product.description }}</span>
    <span class="product-price">{{ product.price }}€</span>
    <button class="buy-button">Comprar</button>
  </section>
</template>

<style scoped>
.product-card {
  background-color: rgb(125, 143, 150);
  border-radius: 1em;
  width: 12.5rem;
  height: auto;
  padding: 1rem;
}

.product-image {
  width: 100%;
  border-radius: 0.5rem;
}
</style>
