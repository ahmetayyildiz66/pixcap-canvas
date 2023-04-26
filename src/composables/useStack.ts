import { ref } from "vue";

const stackCount = ref(0)
const redoStackCount = ref(0)

export const useStack = () => {
  const getStackCount = () => {
    return stackCount.value
  }
  
  const getRedoStackCounter = () => {
    return redoStackCount.value
  }

  const setStackCounter = (value: number) => {
    stackCount.value =  value
  }

  const setRedoStackCounter = (value: number) => {
    redoStackCount.value =  value
  }

  return {
    getStackCount,
    setStackCounter,
    getRedoStackCounter,
    setRedoStackCounter,
  }
}