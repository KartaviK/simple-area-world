import React, {createRef, useEffect, useRef, useState} from "react";
import randomInt from "Helpers/randomInt";
import {NodeDisplay} from "Types/NodeDisplay";
import Node from "Components/Node";
import {Biome} from "Types/Biome";
import {nodeBuilder} from "Helpers/nodeBuilder";
import {Direction} from "Types/Direction";
import isWalkableArea from "Helpers/canMove";
import {WorldContext} from "Components/GameContext";
import {ResourcesContext} from "Components/ResourcesContext";

export interface IWorldProps {
  width: number
  height: number
  hero: {
    row: number
    col: number
  }
  increaseTree: () => void
  increaseStone: () => void
  children: JSX.Element[] | JSX.Element
}

export interface BiomeDefinition {
  type: Biome,
  position: { x: number, y: number }
}

export default function World({width, height, hero, children, increaseTree, increaseStone}: IWorldProps) {
  const [position, setPosition] = useState(hero);
  const [init, setInit] = useState(false)
  const [nodes, setNodes] = useState([[]]) as [NodeDisplay[][], React.Dispatch<NodeDisplay[][]>]
  const [biomes, setBiomes] = useState([]) as [BiomeDefinition[], React.Dispatch<BiomeDefinition[]>]
  const [side, setSide] = useState(Direction.DOWN) as [Direction, React.Dispatch<Direction>]

  useEffect(() => {
    // if (init) {
    //   document.onkeypress = e => {
    //     ref.dispatchEvent(new KeyboardEvent('keypress', {
    //       key: 'Enter',
    //     }));
    //   }
    // }

    if (!init && biomes.length === 0) {
      const biomesCount = randomInt(2, 4)
      const biomesPositions: { x: number, y: number }[] = []

      let generatedX: number = null
      let generatedY: number = null

      for (let i = 0; i < height; i++) {
        if (!nodes.hasOwnProperty(i)) {
          nodes[i] = []
        }
      }

      for (let i = 0; i <= biomesCount; i++) {
        // todo: make this two loops as helper function
        do {
          generatedX = randomInt(0, width - 1);

          if (biomesPositions.length === 0) {
            break
          }

          let match = false;

          for (let biomePosition of biomesPositions) {
            if (biomePosition.x === generatedX) {
              match = true
            }
          }

          if (!match) {
            break
          }
        } while (true)

        do {
          generatedY = randomInt(0, height - 1);

          if (biomesPositions.length === 0) {
            break;
          }

          let match = false;

          for (let biomePosition of biomesPositions) {
            if (biomePosition.y === generatedY) {
              match = true
            }
          }

          if (!match) {
            break;
          }
        } while (true)

        biomes[i] = {
          // @ts-ignore
          type: Biome[Biome[randomInt(Biome.GRASSLAND, Biome.WATER)]],
          position: {
            x: generatedX,
            y: generatedY,
          }
        }
      }

      setBiomes([...biomes])
    }

    if (!init && biomes !== []) {
      setInit(true)

      let build = true
      let lvl = 1

      for (let biome of biomes) {
        // Some hack because of some shit error reason
        if (nodes[biome.position.x] === undefined) {
          nodes[biome.position.x] = []
        }

        nodes[biome.position.x][biome.position.y] = nodeBuilder(biome.type)
      }

      // todo: optimize algorithm. Wee need to unset biome that can not fill
      builder: while (build) {
        biomes.forEach((biome, index) => {
          for (let i = biome.position.x - lvl; i <= biome.position.x + lvl; i++) {
            for (let j = biome.position.y - lvl; j <= biome.position.y + lvl; j++) {
              const radiusDestination = Math.sqrt(Math.pow(i - biome.position.x, 2) + Math.pow(j - biome.position.y, 2))

              if (
                radiusDestination <= lvl &&
                (i >= 0 && i < height && j >= 0 && j < width) &&
                typeof nodes[i][j] !== 'number' // todo: i think there is a better way to understand that node is set
              ) {
                nodes[i][j] = nodeBuilder(biome.type)
              }
            }
          }
        })

        lvl++

        // todo: add global indicator that all biomes can not fill and stop loop
        for (let i = 0; i < height; i++) {
          for (let j = 0; j < width; j++) {
            if (typeof nodes[i][j] !== 'number') {
              continue builder
            }
          }
        }

        break
      }
    }
  }, [nodes, biomes])

  document.onkeypress = e => {
    const code = e.code

    if (code === 'KeyS') {
      setSide(Direction.DOWN)

      if (position.row !== height - 1) {
        if (isWalkableArea(nodes[position.row + 1][position.col])) {
          position.row++
        }
      }
    } else if (code === 'KeyD') {
      setSide(Direction.RIGHT)

      if (position.col !== width - 1) {
        if (isWalkableArea(nodes[position.row][position.col + 1])) {
          position.col++
        }
      }
    } else if (code === 'KeyW') {
      setSide(Direction.UP)

      if (position.row !== 0) {
        if (isWalkableArea(nodes[position.row - 1][position.col])) {
          position.row--
        }
      }
    } else if (code === 'KeyA') {
      setSide(Direction.LEFT);

      if (position.col !== 0) {
        if (isWalkableArea(nodes[position.row][position.col - 1])) {
          position.col--
        }
      }
    } else if (code === 'Space') {
      const downElement = nodes[position.row + 1][position.col];

      if (side === Direction.DOWN && position.row !== height - 1 && downElement !== NodeDisplay.PLAIN) {
        if (downElement === NodeDisplay.TREE) {
          increaseTree()
        } else if (downElement === NodeDisplay.STONE) {
          increaseStone()
        }

        nodes[position.row + 1][position.col] = NodeDisplay.PLAIN;
      } else if (side === Direction.RIGHT && position.col !== width - 1 && nodes[position.row][position.col + 1] !== NodeDisplay.PLAIN) {
        if (nodes[position.row][position.col + 1] === NodeDisplay.TREE) {
          increaseTree()
        } else if (nodes[position.row][position.col + 1] === NodeDisplay.STONE) {
          increaseStone()
        }

        nodes[position.row][position.col + 1] = NodeDisplay.PLAIN;
      } else if (side === Direction.UP && position.row >= 0 && nodes[position.row - 1][position.col] !== NodeDisplay.PLAIN) {
        if (nodes[position.row - 1][position.col] === NodeDisplay.TREE) {
          increaseTree()
        } else if (nodes[position.row - 1][position.col] === NodeDisplay.STONE) {
          increaseStone()
        }

        nodes[position.row - 1][position.col] = NodeDisplay.PLAIN;
      } else if (side === Direction.LEFT && position.row >= 0 && nodes[position.row][position.col - 1] !== NodeDisplay.PLAIN) {
        if (nodes[position.row][position.col - 1] === NodeDisplay.TREE) {
          increaseTree()
        } else if (nodes[position.row][position.col - 1] === NodeDisplay.STONE) {
          increaseStone()
        }

        nodes[position.row][position.col - 1] = NodeDisplay.PLAIN
      }

      setNodes([...nodes])
    }

    setPosition({...position})
  }

  return <WorldContext.Provider value={{nodes: nodes, hero: {row: 0, col: 0}}}>
    <ResourcesContext.Provider value={{tree: 0, stone: 0}}>
      <div className={'noselect'} style={{display: 'table'}}>
        <div style={{display: 'table-cell'}}>
          {nodes.map((rows, i) => {
            return <div key={i} style={{display: 'table'}}>
              {rows.map((col, j) => {
                return <div key={j} style={{display: 'table-cell', width: '15px', height: '15px'}}>
                  <Node
                    // ref={ref}
                    definition={i === position.row && j === position.col ? NodeDisplay.HERO : col}
                    direction={side}
                    rotate={col === NodeDisplay.STONE}
                  />
                </div>;
              })}
            </div>
          })}
        </div>
        {...(Array.isArray(children) ? children : [children])}
      </div>
    </ResourcesContext.Provider>
  </WorldContext.Provider>
}
