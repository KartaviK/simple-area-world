import * as React from 'react';
import {useEffect, useState} from "react";
import randomInt from "./Helpers/randomInt";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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

const size = [25, 25];

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

function getCell(type: number): IconDefinition {
  switch (type) {
    case 0:
      return faAlignJustify
    case 1:
      return faTree
    case 2:
      return faIcicles;
  }
}

function isRotate(icon: IconDefinition): boolean {
  return icon === faIcicles
}

function canMove(direction: number): boolean {
  return direction !== 1 && direction !== 2;
}

export default function App() {
  const [position, setPosition] = useState([0, 0]);
  const [init, inited] = useState(false);
  const [world, setWorld] = useState([[]]);
  const [side, setSide] = useState(0);
  const [tree, setTree] = useState(0);
  const [stone, setStone] = useState(0);

  useEffect(() => {
    if (!init) {
      inited(true);

      for (let i = 0; i < size[0]; i++) {
        if (!world.hasOwnProperty(i)) {
          world[i] = [];
        }

        for (let j = 0; j < size[1]; j++) {
          if (i === 0 && j === 0) {
            world[i][j] = 0;

            continue;
          }

          world[i][j] = [0, 1, 2][randomInt(0, 2)];
        }
      }

      setWorld([...world]);
    }
  }, [world]);

  document.onkeypress = e => {
    const code = e.code;

    if (code === 'KeyS') {
      setSide(0);

      if (position[0] !== size[0] - 1) {
        if (canMove(world[position[0] + 1][position[1]])) {
          position[0]++;
        }
      }
    } else if (code === 'KeyD') {
      setSide(1);

      if (position[1] !== size[1] - 1) {
        if (canMove(world[position[0]][position[1] + 1])) {
          position[1]++;
        }
      }
    } else if (code === 'KeyW') {
      setSide(2);

      if (position[0] !== 0) {
        if (canMove(world[position[0] - 1][position[1]])) {
          position[0]--;
        }
      }
    } else if (code === 'KeyA') {
      setSide(3);

      if (position[1] !== 0) {
        if (canMove(world[position[0]][position[1] - 1])) {
          position[1]--;
        }
      }
    } else if (code === 'Space') {
      if (side === 0 && position[0] !== size[0] - 1 && world[position[0] + 1][position[1]] !== 0) {
        if (world[position[0] + 1][position[1]] === 1) {
          setTree(tree + 1);
        } else if (world[position[0] + 1][position[1]] === 2) {
          setStone(stone + 1);
        }

        world[position[0] + 1][position[1]] = 0;
      } else if (side === 1 && position[1] !== size[1] - 1 && world[position[0]][position[1] + 1] !== 0) {
        if (world[position[0]][position[1] + 1] === 1) {
          setTree(tree + 1);
        } else if (world[position[0]][position[1] + 1] === 2) {
          setStone(stone + 1);
        }

        world[position[0]][position[1] + 1] = 0;
      } else if (side === 2 && position[0] !== 0 && world[position[0] - 1][position[1]] !== 0) {
        if (world[position[0] - 1][position[1]] === 1) {
          setTree(tree + 1);
        } else if (world[position[0] - 1][position[1]] === 2) {
          setStone(stone + 1);
        }

        world[position[0] - 1][position[1]] = 0;
      } else if (side === 3 && position[1] !== 0 && world[position[0]][position[1] - 1] !== 0) {
        if (world[position[0]][position[1] - 1] === 1) {
          setTree(tree + 1);
        } else if (world[position[0]][position[1] - 1] === 2) {
          setStone(stone + 1);
        }

        world[position[0]][position[1] - 1] = 0;
      }

      setWorld([...world]);
    }

    setPosition([...position]);
  }

  return <div style={{display: 'table'}}>
    <div style={{display: 'table-cell'}}>
      <div className={'noselect'} style={{display: 'table-cell'}}>
        {world.map((rows, i) => {
          return <div key={i} style={{display: 'table'}}>
            {rows.map((col, j) => {
              const icon = getCell(col);

              return <div key={j} style={{display: 'table-cell', width: '17px'}}>
                {position[0] === i && position[1] === j
                  ? <FontAwesomeIcon icon={getSide(side)} color={'red'}/>
                  : <FontAwesomeIcon transform={{rotate: isRotate(icon) ? 180 : 0}} icon={icon}/>}
              </div>;
            })}
          </div>
        })}
      </div>
      <div style={{display: 'table', marginTop: '15px'}}>
        <b>Move</b>: WASD; <b>Mine</b>: Space
      </div>
      <div style={{display: 'table', marginTop: '15px'}}>
        You: <FontAwesomeIcon icon={getSide(side)}/>
      </div>
    </div>
    <div style={{display: 'table-cell', paddingLeft: '25px'}}>
      <div style={{display: 'table'}}>
        <div style={{display: 'table-cell'}}>tree: {tree}</div>
      </div>
      <div style={{display: 'table'}}>
        <div style={{display: 'table-cell'}}>stone: {stone}</div>
      </div>
    </div>
  </div>
}
