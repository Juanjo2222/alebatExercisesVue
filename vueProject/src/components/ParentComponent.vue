<script setup lang="ts">
import { ref } from "vue"
import ChildComponent from "@/components/ChildComponent.vue"

const childsMessage = ref('');

const showMessage = (message: string) => {
    childsMessage.value = message;
}
</script>

<template>
    <section class="parent-component">
        <h1>Este es el padre</h1>
        <ChildComponent @message-sent="showMessage" />
        <h1>{{ childsMessage }}</h1>
    </section>
</template>

<style>
    .parent-component{
        background-color: antiquewhite;
        padding: 2rem;
    }
</style>