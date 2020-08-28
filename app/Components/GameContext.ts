import React from "react";
import {NodeDisplay} from "Types/NodeDisplay";

export const WorldContext = React.createContext({
  nodes: [] as NodeDisplay[][],
  hero: {
    row: 0,
    col: 0,
  }
});
