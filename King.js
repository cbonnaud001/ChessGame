class King extends Piece
{
  constructor(x,y,isWhite)
  {
    super(x, y, isWhite);
    this.letter = 'K';
    if (this.isWhite)
      this.pic = loadImage("assets/Chess_klt60.png");
    else
      this.pic = loadImage("assets/Chess_kdt60.png");
  }

  canMove(x,y,board)
  //fonctionne mais pas bien ecrite
  {
    let attacked = board.getPiece(x, y);
    if (!this.withinBounds(x,y))
      return false;
    if ((this.inDiag(x,y)) && (attacked == null))
      return true;
    if ((abs(x - this.matrixPosition.x) + abs(y - this.matrixPosition.y)) > 1)
      return false;
    if (attacked != null)
    {
      if (attacked.isWhite == this.isWhite)
        return false;
      else
        return true;
    }
      else //case x,y libre
        return true;
      return true;
    }
  }
