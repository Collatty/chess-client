class Board {
  constructor() {
    this.tiles = new Array(64);
    this.enPassant = null;
  }
  getTile = (number) => this.tiles[number];
  getTileFromPos = (pos) => this.tiles[63 - (7 * pos.rank + 8 - pos.file)];
}
