<script setup lang="ts">
import ParentComponent from '@/components/ParentComponent.vue';

const emit = defineEmits<{
  (event: 'message-sent', message: string): void
}>()

const sendMessage = () => {
  emit('message-sent', 'Hola padre')
}
</script>

<template>
    <section class="child-component">
        <h1>Este es el hijo</h1>
        <button class="send-button" @click="sendMessage">Enviar al padre</button>
    </section>
</template>

<style>
    .child-component{
        background-color: rgb(168, 214, 214);
        padding:2rem;
    }
</style>