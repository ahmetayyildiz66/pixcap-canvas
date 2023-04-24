import Konva from "konva";

import { BLOCK_SIZE } from "@/constants";
import { drawProps } from "@/types/drawProps";

export const renderBlock = ({ group, x, y }: drawProps) => {
  console.log("hello group: ", group);
  group.add(
    new Konva.Rect({
      x,
      y,
      width: BLOCK_SIZE,
      height: BLOCK_SIZE,
      fill: "red",
    })
  );
};