import { StartBlock } from "@/blocks/StartBlock";
import { Editor } from "@/Editor";
import Konva from "konva";
import { renderBlock } from "@/blocks/renderBlock";
import { renderImage } from "@/blocks/renderImage";
import {
  CANVAS_CENTER,
  CANVAS_POSITION_Y,
  IMAGE_SIZE,
} from "@/constants/sizes";
import { useGroup } from "@/composables/useGroup";
import { usePosition } from "@/composables/usePosition";

class AutomationCanvas {
  stage;
  layer: any;
  editor: Editor;

  constructor(container: any) {
    this.stage = new Konva.Stage({
      container,
      width: window.innerWidth,
      height: window.innerHeight,
    });

    this.editor = new Editor();
  }

  render() {
    const { updatePosition } = usePosition()

    this.layer = new Konva.Layer();
    const { allGroups } = useGroup();

    this.stage.add(this.layer);

    this.layer.add(allGroups);
    const blocksGroup = new Konva.Group({ name: "blocks" });
    allGroups.add(blocksGroup);

    if (!this.editor.getBlocks().length) {
      const block = new StartBlock();
      this.editor.createBlock(block);
    }

    const blocks = this.editor.getBlocks();

    blocks.map((_, index) => {
      renderBlock({
        group: allGroups,
        blocks,
        x: CANVAS_CENTER,
        y: CANVAS_POSITION_Y,
      });
      renderImage({
        group: allGroups,
        x: CANVAS_CENTER + IMAGE_SIZE / 2,
        y: CANVAS_POSITION_Y + IMAGE_SIZE / 2,
        svgName: "IconFlag",
      });
    });

    updatePosition(CANVAS_CENTER, CANVAS_POSITION_Y)
  }
}

export default AutomationCanvas;