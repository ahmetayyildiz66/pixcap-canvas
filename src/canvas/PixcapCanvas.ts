import Konva from "konva"

import { Editor } from "@/Editor";
import { StartBlock } from "@/blocks/StartBlock";
import { renderBlock } from "@/blocks/renderBlock";
import { renderImage } from "@/blocks/renderImage";
import { BLOCK_SIZE, BLOCK_SPACING, CANVAS_CENTER, CANVAS_POSITION_Y, IMAGE_SIZE } from "@/constants/sizes";

class PixcapCanvas {
  stage: Konva.Stage;
  layer: Konva.Layer
  editor: Editor

  // eslint-disable-next-line
  constructor(container: any) {
    this.stage = new Konva.Stage({
      container,
      width: window.innerWidth,
      height: window.innerHeight
    })

    this.layer = new Konva.Layer({
      draggable: true
    })

    this.editor = new Editor()
  }

  render() {
    this.stage.add(this.layer)

    const group = new Konva.Group({
      draggable: true,
      name: "floating"
    })

    this.layer.add(group)
    const blocksGroup = new Konva.Group({ name: "blocks" })
    group.add(blocksGroup)

    if (!this.editor.getBlocks().length) {
      const startBlock = new StartBlock()
      this.editor.createBlock(startBlock)
    }

    const blocks = this.editor.getBlocks()

    blocks.map((_, index) => {
      renderBlock({
        group,
        x: CANVAS_CENTER,
        y: CANVAS_POSITION_Y + BLOCK_SIZE * index
      })

      renderImage({
        group,
        x: CANVAS_CENTER + IMAGE_SIZE /2,
        y: CANVAS_POSITION_Y + IMAGE_SIZE / 2 + BLOCK_SPACING * index
      })
    })
  }
}

export default PixcapCanvas