class Pawn extends Piece
{
  constructor(x,y,isWhite)
  {
    super(x, y, isWhite);
    this.letter = 'p';
    this.firstMove = true;
    if (this.isWhite)
      this.pic = loadImage("assets/Chess_plt60.png");
    else
      this.pic = loadImage("assets/Chess_pdt60.png");
  }

  canMove(x,y,board)
  {
    if (!this.withinBounds)
      return false;
    let attacked = board.getPiece(x, y);
    if (((this.matrixPosition.y + 2)== y) && (this.firstMove) && (!this.isWhite) && !(this.passingThrough(x,y,'down',board)))
    {
      if (attacked != null)
      {
        if (attacked.isWhite == this.isWhite)
          return false;
        else
        {
          this.firstMove = false;
          return true;
        }
      }
      else
      {
        this.firstMove = false;
        return true;
      }
    }
    else if (((this.matrixPosition.y - 2)== y) && (this.firstMove) && (this.isWhite) &&!(this.passingThrough(x,y,'up',board)))
    {
      if (attacked != null)
      {
        if (attacked.isWhite == this.isWhite)
          return false;
        else
        {
          this.firstMove = false;
          return true;
        }
      }
      else
      {
        this.firstMove = false;
        return true;
      }
    }
    else if ((this.matrixPosition.y - 1  == y) && (this.isWhite))
    {
      if (attacked != null)
      {
        if (attacked.isWhite == this.isWhite)
          return false;
        else
        {
          this.firstMove = false;
          return true;
        }
      }
      else
      {
        this.firstMove = false;
        return true;
      }
    }
    else if ((this.matrixPosition.y + 1== y) && (!this.isWhite))
    {
      if (attacked != null)
      {
        if (attacked.isWhite == this.isWhite)
          return false;
        else
        {
          this.firstMove = false;
          return true;
        }
      }
      else
      {
        this.firstMove = false;
        return true;
      }
    }
    if ((y == this.matrixPosition.y + 1) && (((x == this.matrixPosition.x + 1)) || (x == this.matrixPosition.x - 1))
      && !(this.isWhite) && (board.pieceAt(x,y)) && board.getPiece(x,y).isWhite != this.isWhite)
    {
      this.firstMove = false;
      return true;
    }
    else if ((y == this.matrixPosition.y - 1) && (((x == this.matrixPosition.x + 1)) || (x == this.matrixPosition.x - 1))
      && (this.isWhite) && (board.pieceAt(x,y)) && board.getPiece(x,y).isWhite != this.isWhite)
    {
      this.firstMove = false;
      return true;
    }

    return false;
  }
}
