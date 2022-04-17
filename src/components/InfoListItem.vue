<script>
export default {
  props: ["title"],
};
</script>

<template>
  <li>
    {{ this.title }}
    <slot />
  </li>
</template>
