class Piece {
  constructor(postion, player, board) {
    this.position = postion;
    this.player = player;
    this.board = board;
    this.legalMoves = [];
  }

  calculateLegalMoves = () => {
    throw 'This method is not implemented :OOO';
  };
  getPlayer = () => this.player;
  getPosition = () => this.position;
  getBoard = () => this.board;
  move = (newPosition) => {
    this.position = newPosition;
  };
}
