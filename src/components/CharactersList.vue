<script>
import ErrorsMessage from "./errors/ErrorsMessage.vue";
import { store } from "../stores/store.js";

export default {
  components: {
    ErrorsMessage,
  },
  props: ["characters", "errors"],
  data: () => ({
    store,
  }),
  methods: {
    onClickButton(character) {
      if (character) {
        this.$emit("clicked", character);

        store.mutateCharacter(character);
      }
    },
  },
};
</script>

<template>
  <div>
    <ul class="characters-list">
      <li :key="character.name" v-for="character in characters.results">
        <button type="button" @click="onClickButton(character)">
          {{ character.name }}
        </button>
      </li>
    </ul>

    <ErrorsMessage v-if="errors && errors.length" errors="{errors}" />
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
