import React, { useState } from 'react';
import './tile.css';

const Tile = (props) => {
  return (
    <div className={`${props.player === 1 ? 'PlayerOne' : 'PlayerTwo'}`}>
      {props.piece}
    </div>
  );
};

export default Tile;
