<script>
import axios from "axios";
import CharactersList from "@/components/CharactersList.vue";
import SearchField from "../components/SearchField.vue";
import CharacterInfo from "../components/CharacterInfo.vue";
import Loading from "../components/loading/Loading.vue";

export default {
  components: {
    CharactersList,
    SearchField,
    CharacterInfo,
    Loading,
  },
  data() {
    return {
      character: null,
      characters: [],
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

      return null;
    },
  },
};
</script>

<template>
  <main>
    <SearchField />

    <div v-if="characters.results && characters.results.length">
      <CharactersList :characters="characters" @clicked="getCharacter" />
      <CharacterInfo v-if="character" :character="character" />
    </div>
    <Loading v-else />
  </main>
</template>
