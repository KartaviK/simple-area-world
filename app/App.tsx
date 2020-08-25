import * as React from 'react';
import {useState} from "react";
import {
  faTree,
  faAlignJustify,
  faAngleDown,
  faAngleRight,
  faAngleUp,
  faAngleLeft,
  faIcicles,
} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import World from "Components/World";

function getSide(type: number): IconDefinition {
  switch (type) {
    case 0:
      return faAngleDown;
    case 1:
      return faAngleRight;
    case 2:
      return faAngleUp;
    case 3:
      return faAngleLeft;
  }
}

export default function App() {
  const [tree, setTree] = useState(0);
  const [stone, setStone] = useState(0);

  const width = Math.floor((window.screen.width - 15 * 6) / 15);
  const height = Math.floor(window.screen.height / 15);

  return <World
    hero={{row: 0, col: 0}}
    width={width}
    height={height}
    increaseTree={() => setTree(tree + 1)}
    increaseStone={() => setStone(stone + 1)}
  >
    <div className={'table-cell'}>
      <div>
        tree: {tree}
      </div>
      <div>
        stone: {stone}
      </div>
    </div>
  </World>
}
