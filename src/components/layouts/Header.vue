<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/characters">Characters</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
header {
  line-height: 1.5;
}
</style>
