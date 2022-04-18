<script>
import axios from "axios";
import CharactersList from "@/components/CharactersList.vue";
import SearchField from "../components/SearchField.vue";
import CharacterInfo from "../components/CharacterInfo.vue";
import LoadingComponent from "../components/loading/LoadingComponent.vue";

export default {
  components: {
    CharactersList,
    SearchField,
    CharacterInfo,
    LoadingComponent,
  },
  data() {
    return {
      character: null,
      characters: [],
      name: null,
      errors: [],
    };
  },
  created() {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then((response) => {
        this.characters = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    getCharacter(value) {
      if (value) {
        this.character = value;
      }
    },
  },
};
</script>

<template>
  <main>
    <SearchField :name="name" />

    <div v-if="characters.results && characters.results.length">
      <CharactersList :characters="characters" @clicked="getCharacter" />

      <CharacterInfo v-if="character" :character="character" />
    </div>
    <LoadingComponent v-else />
  </main>
</template>
