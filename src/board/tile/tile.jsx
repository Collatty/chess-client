import React from 'react';
import './tile.css';

const Tile = (props) => {
  return (
    <div className={`${props.player === 1 ? 'PlayerOne' : 'PlayerTwo'}`}>
      {props.tileNumber}
    </div>
  );
};

export default Tile;
