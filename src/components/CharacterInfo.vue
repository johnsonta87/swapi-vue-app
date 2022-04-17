<script>
import axios from "axios";
import Loading from "./loading/Loading.vue";
import InfoListItem from "./InfoListItem.vue";

export default {
  components: { Loading, InfoListItem },
  props: ["character"],
};
</script>

<template>
  <h2>Information</h2>

  <div v-if="character && character">
    <h3>{{ this.character.name }}</h3>

    <ul>
      <InfoListItem>Born {{ this.character.birth_year }}</InfoListItem>
      <InfoListItem>Homeworld</InfoListItem>
      <InfoListItem>Hair Color {{ this.character.hair_color }}</InfoListItem>
      <InfoListItem>Skin Color {{ this.character.skin_color }}</InfoListItem>
      <InfoListItem>Height {{ this.character.height }} cm</InfoListItem>
    </ul>
  </div>

  <Loading v-else />
</template>
