import { ref } from "vue";

const isOpen = ref(true);
export const useLeftPanel = () => {
  const closePanel = () => {
    isOpen.value = false;
  };

  const toggleSidebar = () => {
    isOpen.value = !isOpen.value;
  };

  const openPanel = () => {
    isOpen.value = true;
  };

  return {
    openPanel,
    closePanel,
    isOpen,
    toggleSidebar,
  };
};