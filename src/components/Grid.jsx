

import Node from './Node';

const Grid = ({ grid ,onMouseDown,onMouseEnter,onMouseUp }) => {
  return (
    <div>
      {grid.map((row, rowIdx) => (
        <div key={rowIdx} className="grid-row">
          {row.map((node, nodeIdx) => (
            <Node
              key={nodeIdx}
              col={node.col}
              row={node.row}
              isStart={node.isStart}
              isFinish={node.isFinish}
              isWall={node.isWall}
              onMouseDown={onMouseDown}
              onMouseEnter={onMouseEnter}
              onMouseUp={onMouseUp}
              
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;

