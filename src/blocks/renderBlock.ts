import Konva from "konva";

import { useToggleModal } from "@/composables/useToggleModal";
import { useSelectedBlock } from "@/composables/useSelectedBlock";
import { BLOCK_SIZE } from "@/constants";
import { drawProps } from "@/types/drawProps";
import { CORNER_RADIUS } from "@/constants/sizes";

export const renderBlock = ({ group, type, x, y, fill = '#fff' }: drawProps) => {
  const { openModal } = useToggleModal()
  const { addBlock, getAllBlocks, increaseId, getBlockId, selectedBlock } = useSelectedBlock()

  const rect = new Konva.Rect({
    x,
    y,
    draggable: false,
    width: BLOCK_SIZE,
    height: BLOCK_SIZE,
    fill,
    cornerRadius: CORNER_RADIUS,
    stroke: '#DCDCDC',
  })

  if (type === 'Move') {
    increaseId()
    const id = getBlockId()
    addBlock(type, id)
  }

  rect.on('click', () => {
    if (type === 'Move') {
      const clickedBlock = getAllBlocks().value.find(bl => bl.type === type)
      selectedBlock(clickedBlock!.id)
      openModal()
    }
  })

  group.add(rect);
};