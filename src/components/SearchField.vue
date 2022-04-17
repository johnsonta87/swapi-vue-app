<script>
export default {
  props: ["name"],
  emits: ["update:name"],
};
</script>

<template>
  <input :value="name" @input="$emit('update:name', $event.target.value)" />
</template>

<style>
input {
  width: 100%;
  padding: 0.5em;
  background: transparent;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #fff;
  margin-bottom: 1em;
}
</style>
