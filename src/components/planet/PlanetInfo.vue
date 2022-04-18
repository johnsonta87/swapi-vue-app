<script>
import InfoListItem from "../InfoListItem.vue";
export default {
  props: ["planets"],
  components: { InfoListItem },
};
</script>

<template>
  <div
    class="planet item"
    :key="index"
    v-for="(planet, index) in planets.results"
  >
    <h3>{{ planet.name }}</h3>

    <ul>
      <InfoListItem title="Population" :value="planet.population" />
      <InfoListItem title="Residents" :value="planet.residents" />
      <InfoListItem title="Climate" :value="planet.climate" />
    </ul>
  </div>
</template>
