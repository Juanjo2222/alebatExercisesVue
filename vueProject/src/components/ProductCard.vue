<script setup lang="ts">
import { products } from '../../data/mock'
</script>

<template>
  <div class="product-container">
    <section v-for="product in products" :key="product.id" class="product-card">
      <img :src="product.image" class="product-image" />
      <h2 class="product-title">{{ product.title }}</h2>
      <span class="product-description">{{ product.description }}</span>
      <span class="product-price">{{ product.price }}€</span>
      <button class="buy-button">Comprar</button>
    </section>
  </div>
</template>

<style scoped>
.product-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

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
