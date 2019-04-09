class Bishop extends Piece {
  constructor(x,y,isWhite)
  {
    super(x, y, isWhite);
    this.letter = 'B';
    if (this.isWhite)
      this.pic = loadImage("assets/Chess_blt60.png");
    else
      this.pic = loadImage("assets/Chess_bdt60.png");
  }

  canMove(x,y,board)
  {
    if (!this.withinBounds(x,y))
      return false;
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


