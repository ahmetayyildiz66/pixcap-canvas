import Konva from "konva";

import { BLOCK_SIZE } from "@/constants";
import { drawProps } from "@/types/drawProps";

export const renderBlock = ({ group }: drawProps) => {
  console.log("hello group: ", group);
  group.add(
    new Konva.Rect({
      x: window.innerWidth / 2 - BLOCK_SIZE / 2,
      y: 50,
      width: BLOCK_SIZE,
      height: BLOCK_SIZE,
      fill: "red",
    })
  );
};