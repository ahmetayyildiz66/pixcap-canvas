import { ref } from "vue"

interface BlockType {
  id: number,
  type: string
}

const allBlocks = ref<BlockType[]>([])
const blockId = ref(0)
export const selectedBlockId = ref(0)

export const useSelectedBlock = () => {
  const addBlock = (type: string, id: number) => {
    const select: BlockType = { type, id }
    allBlocks.value.push(select)
  }

  const getSelectedBlock = (id: number) => {
    return allBlocks.value.find(block => block.id === id)
  }

  const selectedBlock = (id: number) => {
    selectedBlockId.value = id
  }

  const getAllBlocks = () => allBlocks

  const increaseId = () => blockId.value++

  const getBlockId = () => blockId.value

  return {
    addBlock,
    getAllBlocks,
    increaseId,
    getBlockId,
    getSelectedBlock,
    selectedBlock
  }
}