
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import Grid from './Grid';
// import { dijkstra, getNodesInShortestPathOrder } from '../algorithms/Dijkstra';
// import VisualizeButton from '../VisualizeButton';

// const PathFindingVisualizer = ({selectedAlgorithm}) => {
//   const [grid, setGrid] = useState([]);
//   const [startNode, setStartNode] = useState(null);
//   const [finishNode, setFinishNode] = useState(null);
//   const [isVisualizing, setIsVisualizing] = useState(false); // Track visualization state
//   // const [selectedAlgorithm, setSelectedAlgorithm] = useState('Dijkstra');
//   const  isMousePressed= useRef(false);
//   const draggingNode = useRef(null);

//   useEffect(() => {
//     const initialGrid = createInitialGrid();
//     setGrid(initialGrid);
//     setStartNode(initialGrid[10][15]);
//     setFinishNode(initialGrid[10][45]);
//   }, []);

//   const createInitialGrid = () => {
//     const newGrid = [];
//     for (let row = 0; row < 11; row++) {
//       const currentRow = [];
//       for (let col = 0; col < 60; col++) {
//         currentRow.push(createNode(row, col));
//       }
//       newGrid.push(currentRow);
//     }
//     return newGrid;
//   };

//   const createNode = (row, col) => {
//     return {
//       col,
//       row,
//       isStart: row === 10 && col === 15,
//       isFinish: row === 10 && col === 45,
//       distance: Infinity,
//       isVisited: false,
//       isWall: false,
//       previousNode: null,
//     };
//   };

//   // functions to create wall by dragging the mouse

//   const handleMouseDown = useCallback((row, col) => {
//     if (isVisualizing) return;
//     setGrid(getNewGridWithWallToggled(grid, row, col));
//     isMousePressed.current = true;
//   }, [grid,isVisualizing]);
  
//   const handleMouseEnter = useCallback((row, col) => {
//     if (!isMousePressed.current || isVisualizing) return;

//     if (isMousePressed.current) {
//       setGrid(getNewGridWithWallToggled(grid, row, col));
//     }
//   }, [grid, isVisualizing]);
  
//   const handleMouseUp = useCallback(() => {
//     isMousePressed.current = false;
//   }, []);





//   const getNewGridWithWallToggled = (grid, row, col) => {
//     const newGrid = grid.slice();
//     const node = newGrid[row][col];
//     const newNode = {
//       ...node,
//       isWall: !node.isWall,
//     };
//     newGrid[row][col] = newNode;
//     return newGrid;
//   }


//   const visualizeAlgorithm = () => {
//     switch (selectedAlgorithm) {
//       case 'Dijkstra':
//         visualizeDijkstra();
//         break;
//       // Add cases for other algorithms here
//       default:
//         break;
//     }
//   };


//   const visualizeDijkstra = () => {
//     if (!startNode || !finishNode) return;
//     setIsVisualizing(true);
//     const newGrid = grid.slice();
//     const visitedNodesInOrder = dijkstra(newGrid, startNode, finishNode);
//     const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
//     animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
//   };

//   const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
//     for (let i = 0; i <= visitedNodesInOrder.length; i++) {
//       if (i === visitedNodesInOrder.length) {
//         setTimeout(() => {
//           animateShortestPath(nodesInShortestPathOrder);
//         }, 10 * i);
//         return;
//       }
//       setTimeout(() => {
//         const node = visitedNodesInOrder[i];
//         const nodeElement = document.getElementById(`node-${node.row}-${node.col}`);
//         if (!nodeElement) {
//           console.error(`Node element not found: node-${node.row}-${node.col}`);
//         } else {
//           nodeElement.className = 'node node-visited';
//         }
//       }, 10 * i);
//     }
//   };

//   const animateShortestPath = (nodesInShortestPathOrder) => {
//     for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
//       setTimeout(() => {
//         const node = nodesInShortestPathOrder[i];
//         const nodeElement = document.getElementById(`node-${node.row}-${node.col}`);
//         if (nodeElement) {
//           nodeElement.className = 'node node-shortest-path';
//         }

//         if (i === nodesInShortestPathOrder.length - 1) {
//           setIsVisualizing(false);
//         }
//       }, 50 * i);
//     }
//   };

//   return (
//     <>
//       <div
//         className="grid-container"
//         onMouseUp={handleMouseUp}
//         onMouseLeave={handleMouseUp}
//       >
//         <Grid
//           grid={grid}
//           onMouseDown={handleMouseDown}
//           onMouseEnter={handleMouseEnter}
//           onMouseUp={handleMouseUp}
//         />
// <VisualizeButton selectedAlgorithm={selectedAlgorithm} visualizeAlgorithm={visualizeAlgorithm}></VisualizeButton>
//       </div>
//     </>
//   );
// };

// export default PathFindingVisualizer;

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Grid from './Grid';
import { dijkstra, getNodesInShortestPathOrder } from '../algorithms/Dijkstra';
import VisualizeButton from '../VisualizeButton';

const PathFindingVisualizer = ({selectedAlgorithm}) => {
  const [grid, setGrid] = useState([]);
  const [startNode, setStartNode] = useState(null);
  const [finishNode, setFinishNode] = useState(null);
  const [isVisualizing, setIsVisualizing] = useState(false); 
  // const [selectedAlgorithm, setSelectedAlgorithm] = useState('Dijkstra');
  const  isMousePressed= useRef(false);
  const draggingNode = useRef(null);

  useEffect(() => {
    const initialGrid = createInitialGrid();
    setGrid(initialGrid);
    setStartNode(initialGrid[10][15]);
    setFinishNode(initialGrid[10][45]);
  }, []);

  const createInitialGrid = () => {
    const newGrid = [];
    for (let row = 0; row < 11; row++) {
      const currentRow = [];
      for (let col = 0; col < 60; col++) {
        currentRow.push(createNode(row, col));
      }
      newGrid.push(currentRow);
    }
    return newGrid;
  };

  const createNode = (row, col) => {
    return {
      col,
      row,
      isStart: row === 10 && col === 15,
      isFinish: row === 10 && col === 45,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };

  // functions to create wall by dragging the mouse

  const handleMouseDown = useCallback((row, col) => {
    if (isVisualizing) return;
    setGrid(getNewGridWithWallToggled(grid, row, col));
    isMousePressed.current = true;
  }, [grid,isVisualizing]);
  
  const handleMouseEnter = useCallback((row, col) => {
    if (!isMousePressed.current || isVisualizing) return;

    if (isMousePressed.current) {
      setGrid(getNewGridWithWallToggled(grid, row, col));
    }
  }, [grid, isVisualizing]);
  
  const handleMouseUp = useCallback(() => {
    isMousePressed.current = false;
  }, []);





  const getNewGridWithWallToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
    return newGrid;
  }


  const visualizeAlgorithm = () => {
    switch (selectedAlgorithm) {
      case 'Dijkstra':
        visualizeDijkstra();
        break;
      // Add cases for other algorithms here
      default:
        break;
    }
  };


  const visualizeDijkstra = () => {
    if (!startNode || !finishNode) return;
    setIsVisualizing(true);
    const newGrid = grid.slice();
    const visitedNodesInOrder = dijkstra(newGrid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        const nodeElement = document.getElementById(`node-${node.row}-${node.col}`);
        if (!nodeElement) {
          console.error(`Node element not found: node-${node.row}-${node.col}`);
        } else {
          nodeElement.className = 'node node-visited';
        }
      }, 10 * i);
    }
  };

  const animateShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        const nodeElement = document.getElementById(`node-${node.row}-${node.col}`);
        if (nodeElement) {
          nodeElement.className = 'node node-shortest-path';
        }

        if (i === nodesInShortestPathOrder.length - 1) {
          setIsVisualizing(false);
        }
      }, 50 * i);
    }
  };

  return (
    <>
      <div
        className="grid-container"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <Grid
          grid={grid}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseUp={handleMouseUp}
        />
        {selectedAlgorithm && <VisualizeButton selectedAlgorithm={selectedAlgorithm} visualizeAlgorithm={visualizeAlgorithm}></VisualizeButton>}

      </div>
    </>
  );
};

export default PathFindingVisualizer;

   