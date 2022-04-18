<script>
import axios from "axios";
import { debounce } from "lodash";
import { store } from "../stores/store.js";

export default {
  props: ["name"],
  data: () => ({
    keyword: "",
    hasError: false,
    store,
  }),
  created() {
    this.debounceName = debounce(this.searchName, 1000);
  },
  methods: {
    searchName() {
      axios
        .get(`https://swapi.dev/api/people/`, {
          params: {
            search: this.keyword,
          },
        })
        .then((response) => {
          store.mutateCharacter(response.data.results);
        })
        .catch((e) => {
          console.log(e);
          this.hasError = true;
        });
    },
  },
  watch: {
    keyword() {
      if (!this.keyword) return;
      this.debounceName();
    },
  },
};
</script>

<template>
  <div class="search" :class="{ 'text-danger': hasError }">
    <input v-model="keyword" placeholder="Enter name" />
    <button @click.prevent="searchName">Search</button>
  </div>
</template>

<style>
.search {
  margin-bottom: 2em;
}

input {
  width: 100%;
  padding: 0.5em;
  line-height: 1.5;
  background: transparent;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #fff;
  margin-bottom: 1em;
}
</style>
