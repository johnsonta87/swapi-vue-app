<script>
export default {
  props: ["errors"],
};
</script>

<template>
  <ul>
    <li :key="index" v-for="(error, index) in errors">
      {{ error.message }}
    </li>
  </ul>
</template>
