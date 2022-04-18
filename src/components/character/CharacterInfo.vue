<script>
import LoadingComponent from "../loading/LoadingComponent.vue";
import { store } from "../../stores/store.js";
import CharacterInfoContent from "./CharacterInfoContent.vue";

export default {
  components: { LoadingComponent, CharacterInfoContent },
  props: ["character"],
  data: () => ({
    store,
  }),
};
</script>

<template>
  <div class="character-list-container">
    <h2>Character Details</h2>

    <div v-if="store.character && store.character.length">
      <div
        class="item"
        v-for="character in store.character"
        :key="character.name"
      >
        <CharacterInfoContent :character="character" />
      </div>
    </div>

    <div v-else-if="store.character && store.character.name">
      <div class="item">
        <CharacterInfoContent :character="character" />
      </div>
    </div>

    <LoadingComponent v-else />
  </div>
</template>

<style>
.character-list-container {
  margin: 2em auto;
}
</style>
