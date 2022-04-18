<script>
import InfoListItem from "./InfoListItem.vue";

export default {
  props: ["character"],
  components: { InfoListItem },
};
</script>

<template>
  <h3>{{ character.name }}</h3>

  <ul>
    <InfoListItem title="Born">{{ character.birth_year }}</InfoListItem>
    <InfoListItem title="Homeworld"></InfoListItem>
    <InfoListItem title="Hair Color"> {{ character.hair_color }}</InfoListItem>
    <InfoListItem title="Skin Color"> {{ character.skin_color }}</InfoListItem>
    <InfoListItem title="Height"> {{ character.height }} cm</InfoListItem>
  </ul>
</template>
