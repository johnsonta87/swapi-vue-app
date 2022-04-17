<script>
import Errors from "./errors/Errors.vue";

export default {
  components: {
    Errors,
  },
  props: ["characters", "errors"],
  methods: {
    onClickButton(character) {
      if (character) {
        this.$emit("clicked", character);
      }
    },
  },
};
</script>

<template>
  <div>
    <ul class="characters-list">
      <li :key="character.name" v-for="character of characters.results">
        <button type="button" @click="onClickButton(character)">
          {{ character.name }}
        </button>
      </li>
    </ul>

    <Errors v-if="errors && errors.length" errors="{errors}" />
  </div>
</template>

<style>
.characters-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding-bottom: 2em;
  border-bottom: 1px solid #fff;
}

.characters-list li {
  margin: 0.25em;
}
</style>
