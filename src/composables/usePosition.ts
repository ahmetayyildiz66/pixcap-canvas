import { ref } from "vue";

const positionX = ref(0);
const positionY = ref(0);

export const usePosition = () => {
  const getPositionX = (): number => {
    return positionX.value;
  };

  const getPositionY = (): number => {
    return positionY.value;
  };

  const updatePosition = (x: number, y: number) => {
    positionX.value = x;
    positionY.value = y;
  };

  return {
    getPositionX,
    getPositionY,
    updatePosition,
  };
};