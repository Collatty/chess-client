import React from 'react';
import Tile from '../tile/tile';
import './tileList.css';
import BlackKing from '../pieces/blackKing';
import BlackPawn from '../pieces/blackPawn';
import BlackQueen from '../pieces/blackQueen';
import BlackRook from '../pieces/blackRook';
import BlackBishop from '../pieces/blackBishop';
import BlackKnight from '../pieces/blackKnight';
import WhiteKing from '../pieces/whiteKing';
import WhiteBishop from '../pieces/whiteBishop';
import WhiteKnight from '../pieces/whiteKnight';
import WhitePawn from '../pieces/whitePawn';
import WhiteRook from '../pieces/whiteRook';
import WhiteQueen from '../pieces/whiteQueen';

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
