<script setup lang="ts">
import { products } from '@/data/mock'
</script>

<template>
  <div class="product-container">
    <div v-for="product in products" :key="product.id" class="product-card">
      <img src="/public/product1.jpg" class="product-image" />
      <h2 class="product-title">{{ product.title }}</h2>
      <span class="product-description">{{ product.description }}</span>
      <span class="product-price">{{ product.price }}€</span>
      <button class="buy-button">Comprar</button>
    </div>
  </div>
</template>

<style>
.prodcut-container {
  display: grid;
  grid-template-rows: repeat(1fr, 1fr, 1fr);
  gap: 1rem;
}

.product-card {
  background-color: rgb(125, 143, 150);
  border-radius: 1em;
  width: 12.5rem;
  height: auto;
}
img {
  width: 100%;
}
</style>
