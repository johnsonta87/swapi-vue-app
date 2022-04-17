<script>
import axios from "axios";
import { debounce } from "lodash";

export default {
  props: ["name"],
  data: () => ({
    keyword: "",
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
          console.log(response.data.results);
        })
        .catch((e) => {
          console.log(e);
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
  <input v-model="keyword" placeholder="Enter name" />
  <button @click.prevent="searchName">Search</button>
</template>

<style>
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
