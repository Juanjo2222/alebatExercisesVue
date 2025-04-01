<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheCounter from '@/components/TheCounter.vue'
import ParentComponent from '@/components/ParentComponent.vue'
import LinkedinComponent from '@/components/icons/LinkedinComponent.vue'
import InstagramComponent from '@/components/icons/InstagramComponent.vue'

const socialComponents = {
  instagram: InstagramComponent,
  linkedin: LinkedinComponent,
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

      <TheCounter></TheCounter>

      <RouterLink to="/catalogue">
        <button class="catalogue-button">Ver Catálogo</button>
      </RouterLink>

      <ParentComponent></ParentComponent>
    </div>
  </header>

  <div class="social-menu">
    <component
      v-for="(component, name) in socialComponents"
      :key="name"
      :is="component"
      class="social-icon"
    />
  </div>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.catalogue-button {
  margin-top: 1rem;
  background-color: rgb(228, 228, 179);
  border-radius: 1.5rem;
  padding: 0.5rem;
}
</style>
