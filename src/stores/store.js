import { reactive } from "vue";

export const store = reactive({
  character: null,
  mutateCharacter(data) {
    this.character = data;
  },
});
