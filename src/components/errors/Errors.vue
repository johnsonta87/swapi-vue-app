<script>
export default {
  props: ["errors"],
};
</script>

<template>
  <ul>
    <li v-for="error of errors">
      {{ error.message }}
    </li>
  </ul>
</template>
