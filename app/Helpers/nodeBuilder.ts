import {BiomeRange} from "Types/BiomeRange";
import randomInt from "Helpers/randomInt";
import {Biome} from "Types/Biome";
import {NodeDisplay} from "Types/NodeDisplay";

export function nodeBuilder(biome: Biome): NodeDisplay {
  const rnd = randomInt(1, 100)

  for (let chance in BiomeRange[biome]) {
    if (rnd <= parseInt(chance)) {
      // @ts-ignore
      return BiomeRange[biome][chance]
    }
  }
}
