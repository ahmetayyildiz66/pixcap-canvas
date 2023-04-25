import { Block } from "@/blocks/Block";

export interface drawProps {
  group: any;
  blocks: Block[]
  type?: string;
  x: number;
  y: number;
  fill?: string;
  draggable?: boolean;
  svgName?: string
}