import { ref } from 'vue';

export function StateAdd() {
  const index = ref(0);

  const addState = () => {
    index.value++;
  }

  return { index, addState }
}