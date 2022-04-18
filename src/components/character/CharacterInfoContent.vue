<script>
import InfoListItem from "../InfoListItem.vue";

export default {
  props: ["character"],
  components: { InfoListItem },
};
</script>

<template>
  <h3>{{ character.name }}</h3>

  <ul>
    <InfoListItem title="Born" :value="character.birth_year" />
    <InfoListItem title="Homeworld" :value="character.homeworld" />
    <InfoListItem title="Hair Color" :value="character.hair_color" />
    <InfoListItem title="Skin Color" :value="character.skin_color" />
    <InfoListItem title="Height" :value="character.height + ' cm'" />
    <InfoListItem title="Vehicles" :value="character.vehicles" />
  </ul>
</template>
