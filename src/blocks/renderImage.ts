import { IMAGE_SIZE } from "@/constants";
import { drawProps } from "@/types/drawProps";
import Konva from "konva";

export const renderImage = ({ group, x, y }: drawProps) => {
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
    });
    group.add(image);
  };
  img.src = require("../assets/logo.png");
};