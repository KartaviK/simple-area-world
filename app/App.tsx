import * as React from 'react';
import {useState} from "react";
import World from "Components/World";

export default function App() {
  const [tree, setTree] = useState(0);
  const [stone, setStone] = useState(0);

  const width = Math.floor((window.screen.width - 15 * 6) / 15);
  const height = Math.floor(window.screen.height / 15);

  return <World
    hero={{row: 0, col: 0}}
    width={10}
    height={10}
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
