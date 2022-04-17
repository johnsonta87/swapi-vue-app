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
  <h2>Character Details</h2>

  <div v-if="character && character">
    <h3>{{ this.character.name }}</h3>

    <ul>
      <InfoListItem title="Born">{{ this.character.birth_year }}</InfoListItem>
      <InfoListItem title="Homeworld"></InfoListItem>
      <InfoListItem title="Hair Color">
        {{ this.character.hair_color }}</InfoListItem
      >
      <InfoListItem title="Skin Color">
        {{ this.character.skin_color }}</InfoListItem
      >
      <InfoListItem title="Height">
        {{ this.character.height }} cm</InfoListItem
      >
    </ul>
  </div>

  <Loading v-else />
</template>
