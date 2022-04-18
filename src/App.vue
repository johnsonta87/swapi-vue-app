<script setup>
import Header from "@/components/layouts/Header.vue";
</script>

<template>
  <Header />
</template>

<style>
@import "@/assets/reset.css";
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

a {
  text-decoration: none;
  transition: 0.4s;
}

button {
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 0.5em;
}

strong {
  font-weight: 700;
}

h1,
h2,
h3,
h4 {
  font-weight: 700;
  margin: 0.5em auto;
}

.item {
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 1em 2em;
  margin-bottom: 1.5em;
}
</style>
