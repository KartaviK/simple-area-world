import {NodeDisplay} from "Types/NodeDisplay";

export default function canMove(direction: number): boolean {
  return direction !== NodeDisplay.TREE
    && direction !== NodeDisplay.STONE
    && direction !== NodeDisplay.WATER;
}
