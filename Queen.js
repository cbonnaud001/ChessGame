class Queen extends Piece
{
  constructor(x,y,isWhite)
  {
    super(x, y, isWhite);
    this.letter = 'Q';
    if (this.isWhite)
      this.pic = loadImage("assets/Chess_qlt60.png");
    else
      this.pic = loadImage("assets/Chess_qdt60.png");
  }


  canMove(x,y,board)
  {
    let attacked = board.getPiece(x, y);
    if (!this.withinBounds(x,y))
      return false;

    //deplacement en ligne droite
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

    //deplacement en dia
    let caseAvailable = [];
    for (let i = 1 ; i < 8 ; i++)
    {
      if (((this.matrixPosition.x + i) < 8) && ((this.matrixPosition.y + i) < 8) &&
       ((this.matrixPosition.x + i) >= 0) && ((this.matrixPosition.y + i) >= 0)) //diag bas droite
        caseAvailable.push({x:this.matrixPosition.x + i, y:this.matrixPosition.y + i});

      if (((this.matrixPosition.x - i) < 8) && ((this.matrixPosition.y + i) < 8) &&
      ((this.matrixPosition.x - i) >= 0) && ((this.matrixPosition.y + i) >= 0)) //diag bas gauche
        caseAvailable.push({x:this.matrixPosition.x - i, y:this.matrixPosition.y + i});

      if (((this.matrixPosition.x + i) < 8) && ((this.matrixPosition.y - i) < 8) &&
        ((this.matrixPosition.x + i) >= 0) && ((this.matrixPosition.y - i) >= 0)) //diag haut droite
        caseAvailable.push({x:this.matrixPosition.x + i, y:this.matrixPosition.y - i});

      if (((this.matrixPosition.x - i) < 8) && ((this.matrixPosition.y - i) < 8) &&
        ((this.matrixPosition.x - i) >= 0) && ((this.matrixPosition.y - i) >= 0)) //diag haut gauche
        caseAvailable.push({x:this.matrixPosition.x - i, y:this.matrixPosition.y - i});
    }
    console.table(caseAvailable)
    for (let i = 0 ; i < caseAvailable.length ; i++)
    {
      if ((caseAvailable[i].x == x) && (caseAvailable[i].y == y))
      {
        if (board.pieceAt(x,y))
          return !(board.getPiece(x,y).isWhite == this.isWhite);
        else
          return true;
      }
    }
    return false;
  }
}

