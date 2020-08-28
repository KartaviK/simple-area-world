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
  // ref: React.MutableRefObject<unknown>
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

export default React.memo(
  ({definition, rotate, direction}: INodeProps) => <div
    style={{display: 'table-cell', fontSize: '12px'}}
    onKeyPress={e => console.log(e)}
  >
    {definition === NodeDisplay.HERO
      ? <FontAwesomeIcon icon={directions[direction ?? Direction.UP]} color={'red'}/>
      : <FontAwesomeIcon transform={{rotate: rotate ? 180 : 0}} icon={icons[definition]}/>}
  </div>,
  (prev, next) => prev.definition === next.definition && prev.direction === next.direction
);
