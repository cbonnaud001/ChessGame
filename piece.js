class Piece {

  constructor(x, y, isWhite, letter,pic)
  {
    this.matrixPosition = createVector(x,y);
    this.pixelPosition = createVector(x * tileSize + tileSize/2, y * tileSize + tileSize/2);
    this.isWhite = isWhite;
    this.taken = false;
    this.letter = letter
    this.movingThisPiece = false;
    this.pic = pic;
  }

  show()
  {
   imageMode(CENTER);
   if (this.movingThisPiece)
   {
        // text(this.letter, mouseX,mouseY);

        image(this.pic, mouseX, mouseY, tileSize * 1.5, tileSize * 1.5);

      } else
      {

        // text(this.letter, this.pixelPosition.x,this.pixelPosition.y);
        image(this.pic, this.pixelPosition.x, this.pixelPosition.y, tileSize,tileSize);

      }
/*
    textSize(30);
    textAlign(CENTER, CENTER);
    if (!this.taken)
    {
      if (this.white)
      {
        fill(240);
        stroke(4);
      }
      else
      {
        fill(10);
        stroke(240);
      }
      if (this.movingThisPiece)
        text(this.letter, mouseX, mouseY);
      else
        text(this.letter, this.pixelPosition.x, this.pixelPosition.y);
    } */
  }

  move(x, y, board)
  {
    let attacked = board.getPiece(x, y);
    if (attacked != null)
      attacked.taken = true;
    this.matrixPosition = createVector(x, y);
    this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
  }


  canMove(x, y, board)
  {
    if (this.withinBounds(x, y))
    {
      if (board.pieceAt(x,y))
      {
        if (board.getPiece(x,y).white != this.white)
          return true;
        else
          return false;
      }
      else
        return true;
    }
    else
      return false;
  }

  withinBounds(x, y)
  {
    if (x >= 0 && y >= 0 && x < 8 && y < 8)
      return true;
    return false;
  }


}

class King extends Piece {
  constructor(x,y,isWhite)
  {
    super(x, y, isWhite);
    this.letter = 'K';
    if (this.isWhite)
      this.pic = loadImage("assets/Chess_klt60.png");
    else
      this.pic = loadImage("assets/Chess_kdt60.png");
  }
}

class Queen extends Piece {
  constructor(x,y,isWhite)
  {
    super(x, y, isWhite);
    this.letter = 'Q';
    if (this.isWhite)
      this.pic = loadImage("assets/Chess_qlt60.png");
    else
      this.pic = loadImage("assets/Chess_qdt60.png");
  }
}

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
}
class Knight extends Piece {
  constructor(x,y,isWhite)
  {
    super(x, y, isWhite);
    this.letter = 'Kn';
    if (this.isWhite)
      this.pic = loadImage("assets/Chess_nlt60.png");
    else
      this.pic = loadImage("assets/Chess_ndt60.png");
  }
}
class Rook extends Piece {
  constructor(x,y,isWhite)
  {
    super(x, y, isWhite);
    this.letter = 'R';
    if (this.isWhite)
      this.pic = loadImage("assets/Chess_rlt60.png");
    else
      this.pic = loadImage("assets/Chess_rdt60.png");
  }
}
class Pawn extends Piece {
  constructor(x,y,isWhite)
  {
    super(x, y, isWhite);
    this.letter = 'p';
    if (this.isWhite)
      this.pic = loadImage("assets/Chess_plt60.png");
    else
      this.pic = loadImage("assets/Chess_pdt60.png");
  }


}



