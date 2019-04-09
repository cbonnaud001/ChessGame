class Knight extends Piece
{
  constructor(x,y,isWhite)
  {
    super(x, y, isWhite);
    this.letter = 'Kn';
    if (this.isWhite)
      this.pic = loadImage("assets/Chess_nlt60.png");
    else
      this.pic = loadImage("assets/Chess_ndt60.png");
  }

  canMove(x,y,board)
  {
    if (!this.withinBounds(x,y))
      return false;
    let availableCases = [];
    availableCases.push({x:this.matrixPosition.x - 2, y:this.matrixPosition.y - 1});
    availableCases.push({x:this.matrixPosition.x - 2, y:this.matrixPosition.y + 1});
    availableCases.push({x:this.matrixPosition.x + 2, y:this.matrixPosition.y - 1});
    availableCases.push({x:this.matrixPosition.x + 2, y:this.matrixPosition.y + 1});
    availableCases.push({x:this.matrixPosition.x + 1, y:this.matrixPosition.y - 2});
    availableCases.push({x:this.matrixPosition.x - 1, y:this.matrixPosition.y - 2});
    availableCases.push({x:this.matrixPosition.x + 1, y:this.matrixPosition.y + 2});
    availableCases.push({x:this.matrixPosition.x - 1, y:this.matrixPosition.y + 2});

    for (let i = 0 ; i < availableCases.length ; i++)
    {
      console.log(((availableCases[i].x == x) && (availableCases[i].y == y)))
      if ((availableCases[i].x == x) && (availableCases[i].y == y))
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


