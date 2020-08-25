import React from "react";
import {NodeDisplay} from "Types/NodeDisplay";
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faIcicles,
  faSlidersH,
  faTree,
  faWater
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Direction} from "Types/Direction";

export interface INodeProps {
  definition: NodeDisplay
  rotate: boolean
  direction?: Direction
}

const icons = {
  [NodeDisplay.PLAIN]: faSlidersH,
  [NodeDisplay.TREE]: faTree,
  [NodeDisplay.STONE]: faIcicles,
  [NodeDisplay.WATER]: faWater,
}
const directions = {
  [Direction.DOWN]: faAngleDown,
  [Direction.RIGHT]: faAngleRight,
  [Direction.UP]: faAngleUp,
  [Direction.LEFT]: faAngleLeft,
}

export default function Node({definition, rotate, direction}: INodeProps) {
  // todo: use context or custom hook to rerender only one node instead of whole matrix
  return <div style={{display: 'table-cell', fontSize: '12px'}}>
    {definition === NodeDisplay.HERO
      ? <FontAwesomeIcon icon={directions[direction ?? Direction.UP]} color={'red'}/>
      : <FontAwesomeIcon transform={{rotate: rotate ? 180 : 0}} icon={icons[definition]}/>}
  </div>;
}
