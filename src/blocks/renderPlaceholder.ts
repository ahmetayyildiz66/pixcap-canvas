import { imageProps } from "@/types/imageProps";
import Konva from "konva";

export const renderPlaceholder = ({ group, x, y, svgName }: imageProps) => {
  const img = new window.Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 2;
    canvas.height = 70;
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