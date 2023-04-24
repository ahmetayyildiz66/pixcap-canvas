import Konva from "konva";

import { BLOCK_SIZE } from "@/constants";
import { drawProps } from "@/types/drawProps";
import { CORNER_RADIUS } from "@/constants/sizes";

export const renderBlock = ({ group, x, y, fill = '#fff', draggable = false }: drawProps) => {
  group.add(
    new Konva.Rect({
      x,
      y,
      draggable,
      width: BLOCK_SIZE,
      height: BLOCK_SIZE,
      fill,
      cornerRadius: CORNER_RADIUS,
      stroke: '#DCDCDC',
    })
  );
};