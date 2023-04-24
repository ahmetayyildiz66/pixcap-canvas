import Konva from "konva";

import { IMAGE_SIZE } from "@/constants";
import { imageProps } from "@/types/imageProps";

export const renderImage = ({ group, x, y, svgName }: imageProps) => {
  const img = new window.Image();
  
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = IMAGE_SIZE;
    canvas.height = IMAGE_SIZE;

    canvas.getContext("2d")?.drawImage(img, 0, 0, canvas.width, canvas.height);
    const image = new Konva.Image({
      image: canvas,
      x,
      y,
      draggable: false,
    });
    group.add(image);
  };
  img.src = require(`../components/icons/${svgName}.svg`);
};