import React from 'react';
import './board.css';
import TileList from './tileList/tileList';
import BlackRook from './pieces/blackRook';
import BlackKnight from './pieces/blackKnight';
import BlackQueen from './pieces/blackQueen';
import BlackKing from './pieces/blackKing';
import BlackBishop from './pieces/blackBishop';
import BlackPawn from './pieces/blackPawn';
import WhitePawn from './pieces/whitePawn';
import WhiteRook from './pieces/whiteRook';
import WhiteKnight from './pieces/whiteKnight';
import WhiteBishop from './pieces/whiteBishop';
import WhiteKing from './pieces/whiteKing';
import WhiteQueen from './pieces/whiteQueen';

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <TileList positions={initialPositions()}></TileList>
      </div>
    );
  }
}

const initialPositions = () => {
  let tiles = [...Array.from(64).keys()];
  tiles = tiles.map(() => null);
  tiles[0] = <BlackRook />;
  tiles[7] = <BlackRook />;
  tiles[2] = <BlackBishop />;
  tiles[5] = <BlackBishop></BlackBishop>;
  tiles[1] = <BlackKnight></BlackKnight>;
  tiles[6] = <BlackKnight></BlackKnight>;
  tiles[3] = <BlackQueen></BlackQueen>;
  tiles[4] = <BlackKing></BlackKing>;
  for (let i = 8; i < 16; i++) {
    tiles[i] = <BlackPawn></BlackPawn>;
  }
  for (let i = 48; i < 56; i++) {
    tiles[i] = <WhitePawn></WhitePawn>;
  }
  tiles[56] = <WhiteRook></WhiteRook>;
  tiles[63] = <WhiteRook></WhiteRook>;
  tiles[57] = <WhiteKnight></WhiteKnight>;
  tiles[62] = <WhiteKnight></WhiteKnight>;
  tiles[58] = <WhiteBishop></WhiteBishop>;
  tiles[61] = <WhiteBishop></WhiteBishop>;
  tiles[60] = <WhiteKing></WhiteKing>;
  tiles[59] = <WhiteQueen></WhiteQueen>;

  return tiles;
};

export default Board;
