<script>
import axios from "axios";
import LoadingComponent from "../components/loading/LoadingComponent.vue";
import PlanetInfo from "../components/planet/PlanetInfo.vue";

export default {
  components: {
    LoadingComponent,
    PlanetInfo,
  },
  data() {
    return {
      planet: null,
      planets: [],
      errors: [],
    };
  },
  created() {
    axios
      .get(`https://swapi.dev/api/planets/`)
      .then((response) => {
        this.planets = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    getPlanet(value) {
      if (value) {
        this.planet = value;
      }
    },
  },
};
</script>

<template>
  <h1>Planets</h1>

  <div v-if="planets.results && planets.results.length">
    <PlanetInfo :planets="planets" @click="getPlanet" />
  </div>
  <LoadingComponent v-else />
</template>
