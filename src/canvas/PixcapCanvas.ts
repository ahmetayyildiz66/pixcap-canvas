import Konva from "konva"

import { Editor } from "@/Editor";
import { StartBlock } from "@/blocks/StartBlock";
import { renderBlock } from "@/blocks/renderBlock";
import { renderImage } from "@/blocks/renderImage";

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

    blocks.map(() => {
      renderBlock({ group })
      renderImage({ group })
    })
  }
}

export default PixcapCanvas