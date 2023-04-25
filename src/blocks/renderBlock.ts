import Konva from "konva";

import { useToggleModal } from "@/composables/useToggleModal";
import { BLOCK_SIZE } from "@/constants";
import { drawProps } from "@/types/drawProps";
import { CORNER_RADIUS } from "@/constants/sizes";

export const renderBlock = ({ group, type, x, y, fill = '#fff', draggable = false }: drawProps) => {
  const { openModal } = useToggleModal()
  // console.log('hey yhey. ', type)
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

  rect.on('click', () => {
    if (type === 'Move' || type === 'Output') {
      openModal()
    }
  })

  group.add(rect);
};