<script setup lang="ts">
import ParentComponent from '@/components/ParentComponent.vue';

const emit = defineEmits<{
  (event: 'message-sent', message: string): void
}>()

const sendMessage = () => {
  emit('message-sent', 'Hola padre')
}

defineProps<{
    parentMessage: string
}>()

</script>

<template>
    <section class="child-component">
        <h1>Este es el hijo</h1>
        <button class="send-button" @click="sendMessage">Enviar al padre</button>
        <h2>{{ parentMessage }}</h2>
    </section>
</template>

<style>
    .child-component{
        background-color: rgb(168, 214, 214);
        padding:2rem;
    }
</style>