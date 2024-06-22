import React from 'react';
const Node = ({ col, row, isStart, isFinish, isWall ,onMouseDown,onMouseEnter,onMouseUp }) => {
  const extraClassName = isFinish
    ? 'node-finish'
    : isStart
    ? 'node-start'
    : isWall
    ? 'node-wall'
    : '';

  return (
    <div

      onMouseDown={()=>onMouseDown(row,col)}
      onMouseEnter={()=>onMouseEnter(row,col)}
      onMouseUp={onMouseUp}
    
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      
    ></div>
  );
};

export default Node;
