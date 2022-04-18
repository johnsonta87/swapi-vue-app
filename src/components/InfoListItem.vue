<script>
export default {
  props: ["title", "value"],
};
</script>

<template>
  <li v-if="Array.isArray(this.value)">
    <h4>{{ this.title }}</h4>
    <p :key="index" v-for="(value, index) in this.value">
      {{ value }}
    </p>
  </li>

  <li v-else>
    <h4>{{ this.title }}</h4>
    <p>{{ this.value }}</p>
  </li>
</template>
