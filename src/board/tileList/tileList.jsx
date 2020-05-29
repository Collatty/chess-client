import React from 'react';
import Tile from '../tile/tile';
import './tileList.css';

const TileList = (props) => {
  const tiles = [];
  let evenRow = true;
  for (let i = 0; i < 64; i++) {
    if (i % 8 === 0) {
      evenRow = !evenRow;
    }
    if (evenRow) {
      tiles.push(
        <Tile
          piece={props.positions[i]}
          className="tile"
          key={i.toString()}
          tileNumber={i}
          player={i % 2}
        ></Tile>
      );
    } else {
      tiles.push(
        <Tile
          piece={props.positions[i]}
          className="tile"
          key={i.toString()}
          tileNumber={i}
          player={(i + 1) % 2}
        ></Tile>
      );
    }
  }

  return <div>{tiles}</div>;
};
export default TileList;
