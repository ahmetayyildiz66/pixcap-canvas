import { Block } from "./blocks/Block";

export class Editor {
  blocks: Block[];

  constructor() {
    this.blocks = []
  }

  public createBlock(block: Block) {
    this.blocks.push(block)
  }

  public getBlocks(): Block[] {
    return this.blocks
  }
}