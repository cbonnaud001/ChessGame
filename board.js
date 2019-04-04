class Board {
  constructor()
  {
    this.whitePieces = [];
    this.blackPieces = [];
    this.initPieces();
  }

  initPieces()
  {
    this.initWhitePieces();
    this.initBlackPieces();
  }

  initWhitePieces()
  {
    this.whitePieces.push(new King(4, 7, true));
    this.whitePieces.push(new Queen(3, 7, true));
    this.whitePieces.push(new Bishop(2, 7, true));
    this.whitePieces.push(new Bishop(5, 7, true));
    this.whitePieces.push(new Knight(1, 7, true));
    this.whitePieces.push(new Knight(6, 7, true));
    this.whitePieces.push(new Rook(0, 7, true));
    this.whitePieces.push(new Rook(7, 7, true));
    for (let i = 0 ; i < 8 ; i++)
      this.whitePieces.push(new Pawn(i, 6, true));
  }

  initBlackPieces()
  {
    this.blackPieces.push(new King(4, 0, false));
    this.blackPieces.push(new Queen(3, 0, false));
    this.blackPieces.push(new Bishop(2, 0, false));
    this.blackPieces.push(new Bishop(5, 0, false));
    this.blackPieces.push(new Knight(1, 0, false));
    this.blackPieces.push(new Knight(6, 0, false));
    this.blackPieces.push(new Rook(0, 0, false));
    this.blackPieces.push(new Rook(7, 0, false));
    for (let i = 0 ; i < 8 ; i++)
      this.blackPieces.push(new Pawn(i, 1, false));
  }



  show()
  {
    for (let i = 0 ; i < this.whitePieces.length ; i++)
    {
      this.whitePieces[i].show();
    }
    for (let j = 0 ; j < this.blackPieces.length ; j++)
    {
      this.blackPieces[j].show();
    }
  }

  pieceAt(x,y)
  {
    for (let i = 0 ; i < this.blackPieces.length ; i++)
    {
      if (!(this.blackPieces[i].taken) && (this.blackPieces[i].matrixPosition.x == x) && (this.blackPieces[i].matrixPosition.y == y ))
        return true;
    }
    for (let i = 0 ; i < this.whitePieces.length ; i++)
    {
      if (!(this.whitePieces[i].taken) && (this.whitePieces[i].matrixPosition.x == x) && (this.whitePieces[i].matrixPosition.y == y ))
        return true;
    }
    return false;
  }


  getPiece(x,y)
  {
   for (let i = 0 ; i < this.blackPieces.length ; i++)
   {
    if (!(this.blackPieces[i].taken) && (this.blackPieces[i].matrixPosition.x == x) && (this.blackPieces[i].matrixPosition.y == y ))
      return this.blackPieces[i];
  }
  for (let i = 0 ; i < this.whitePieces.length ; i++)
  {
    if (!(this.whitePieces[i].taken) &&(this.whitePieces[i].matrixPosition.x == x) && (this.whitePieces[i].matrixPosition.y == y ))
      return this.whitePieces[i];
  }
  return null;
}

}
