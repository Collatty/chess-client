import React from 'react';
import './board.css';
import TileList from './tileList/tileList';
import BlackKing from './pieces/blackKing';
import BlackPawn from './pieces/blackPawn';
import BlackQueen from './pieces/blackQueen';
import BlackRook from './pieces/blackRook';
import BlackBishop from './pieces/blackBishop';
import BlackKnight from './pieces/blackKnight';
import WhiteKing from './pieces/whiteKing';
import WhiteBishop from './pieces/whiteBishop';
import WhiteKnight from './pieces/whiteKnight';
import WhitePawn from './pieces/whitePawn';
import WhiteRook from './pieces/whiteRook';
import WhiteQueen from './pieces/whiteQueen';

const Board = () => {
  return (
    <div className="board">
      <TileList></TileList>
      <BlackKing></BlackKing>
      <BlackPawn></BlackPawn>
      <BlackQueen />
      <BlackRook></BlackRook>
      <BlackBishop></BlackBishop>
      <BlackKnight></BlackKnight>
      <WhiteKing></WhiteKing>
      <WhiteBishop></WhiteBishop>
      <WhiteQueen></WhiteQueen>
      <WhitePawn></WhitePawn>
      <WhiteKnight></WhiteKnight>
      <WhiteRook></WhiteRook>
    </div>
  );
};

export default Board;
