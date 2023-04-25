import { ref } from "vue"

const isModalOpen = ref(false)

export const useToggleModal = () => {
  const closeModal = () => {
    isModalOpen.value = false;
  };

  const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value;
  };

  const openModal = () => {
    isModalOpen.value = true;
  };

  return {
    openModal,
    closeModal,
    isModalOpen,
    toggleModal,
  };
}