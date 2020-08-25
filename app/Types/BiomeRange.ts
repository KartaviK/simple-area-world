import {Biome} from "Types/Biome";
import {NodeDisplay} from "Types/NodeDisplay";

export type BiomesRangeType = {
  [biome in Biome]: {
    80: NodeDisplay.PLAIN,
    85: NodeDisplay.STONE,
    100: NodeDisplay.TREE,
  } | {
    10: NodeDisplay.PLAIN,
    15: NodeDisplay.STONE,
    100: NodeDisplay.TREE
  } | {
    5: NodeDisplay.PLAIN,
    95: NodeDisplay.STONE,
    100: NodeDisplay.TREE,
  } | {
    100: NodeDisplay.WATER,
  }
}

export const  BiomeRange: BiomesRangeType = {
  [Biome.GRASSLAND]: {
    80: NodeDisplay.PLAIN,
    85: NodeDisplay.STONE,
    100: NodeDisplay.TREE,
  },
  [Biome.FOREST]: {
    10: NodeDisplay.PLAIN,
    15: NodeDisplay.STONE,
    100: NodeDisplay.TREE
  },
  [Biome.MOUNTAINS]: {
    5: NodeDisplay.PLAIN,
    95: NodeDisplay.STONE,
    100: NodeDisplay.TREE,
  },
  [Biome.WATER]: {
    100: NodeDisplay.WATER,
  }
}
