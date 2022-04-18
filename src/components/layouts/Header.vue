<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/characters">Characters</RouterLink>
        <RouterLink to="/planets">Planets</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
header {
  line-height: 1.5;
}

nav {
  margin-bottom: 1em;
}

nav a {
  color: #fff;
  margin-right: 1em;
}
</style>
