class Rook extends Piece
{
  constructor(x,y,isWhite)
  {
    super(x, y, isWhite);
    this.letter = 'R';
    if (this.isWhite)
      this.pic = loadImage("assets/Chess_rlt60.png");
    else
      this.pic = loadImage("assets/Chess_rdt60.png");
  }

  canMove(x,y,board)
  {
    if (!this.withinBounds(x,y))
      return false;
    if ((x == this.matrixPosition.x) && (y < this.matrixPosition.y) && !(this.passingThrough(x,y,'up',board)))
    {
      if (board.pieceAt(x,y))
        return !(board.getPiece(x,y).isWhite == this.isWhite);
      else
        return true;
    }
    else if ((x == this.matrixPosition.x) && (y > this.matrixPosition.y) && !(this.passingThrough(x,y,'down',board)))
    {
      if (board.pieceAt(x,y))
        return !(board.getPiece(x,y).isWhite == this.isWhite);
      else
        return true;
    }
    else if ((y == this.matrixPosition.y) && (x < this.matrixPosition.x) && !(this.passingThrough(x,y,'left',board)))
    {
      if (board.pieceAt(x,y))
        return !(board.getPiece(x,y).isWhite == this.isWhite);
      else
        return true;
    }
    else if ((y == this.matrixPosition.y) && (x > this.matrixPosition.x) && !(this.passingThrough(x,y,'right',board)))
    {
      if (board.pieceAt(x,y))
        return !(board.getPiece(x,y).isWhite == this.isWhite);
      else
        return true;
    }
    return false;
  }

}
