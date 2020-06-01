export default class Tile {
  constructor(piece) {
    this.piece = piece;
  }

  setPiece = (piece) => {
    this.piece = piece;
  };

  removePiece = () => {
    const piece = this.piece;
    return piece;
  };
}
