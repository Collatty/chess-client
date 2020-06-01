import Position from '../position.mjs';

class Pawn extends Piece {
  constructor(position, player, board) {
    super(position, player, board);
  }

  calculateLegalMoves = () => {
    if (player === 1) {
        if(this.board.getTileFromPos(new Position(this.position.rank+1, this.position.file)))
      if (this.position.rank === 2) {
          if(this.board.get)
      }
    }
  };
}
