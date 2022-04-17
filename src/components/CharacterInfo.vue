<script>
import axios from "axios";
import Loading from "./loading/Loading.vue";
import InfoListItem from "./InfoListItem.vue";

export default {
  components: { Loading, InfoListItem },
  props: ["character"],
  mounted() {
    console.log(this.character);
    axios.get(this.character.url).then((response) => {
      // get parent local state object and display into this current component with new data
      this.character = response.data;
    });
  },
};
</script>

<template>
  <h2>Information</h2>

  <div v-if="character && character">
    <h3>{{ character.name }}</h3>

    <ul>
      <InfoListItem>Born {{ character.birth_year }}</InfoListItem>
      <InfoListItem>Homeworld</InfoListItem>
      <InfoListItem>Hair Color {{ character.hair_color }}</InfoListItem>
      <InfoListItem>Skin Color {{ character.skin_color }}</InfoListItem>
      <InfoListItem>Height {{ character.height }} cm</InfoListItem>
    </ul>
  </div>

  <Loading v-else />
</template>
