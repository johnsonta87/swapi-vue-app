import { reactive } from "vue";

export const store = reactive({
  character: null,
  mutateCharacter(data) {
    this.character = data;
  },

  planet: null,
  mutatePlanet(data) {
    this.planet = data;
  },
});
