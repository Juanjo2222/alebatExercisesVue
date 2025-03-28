<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h2>{{ title }}</h2>
</template>

<style>
h2 {
  font-family: Arial, Helvetica, sans-serif;
  color: blue;
  padding: 1em;
  background-color: rgb(121, 240, 212);
}
</style>
