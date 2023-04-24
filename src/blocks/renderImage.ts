import { BLOCK_SIZE, IMAGE_SIZE } from "@/constants";
import { drawProps } from "@/types/drawProps";
import Konva from "konva";

export const renderImage = ({ group }: drawProps) => {
  const img = new window.Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = IMAGE_SIZE;
    canvas.height = IMAGE_SIZE;
    
    canvas.getContext("2d")?.drawImage(img, 0, 0, canvas.width, canvas.height);
    const image = new Konva.Image({
      image: canvas,
      x: window.innerWidth / 2 - BLOCK_SIZE / 2 + 25,
      y: 75,
    });
    group.add(image);
  };
  img.src = require("../assets/logo.png");
};