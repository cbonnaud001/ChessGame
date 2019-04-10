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
   if (!this.taken)
   {
     if (this.movingThisPiece)
     {
        // text(this.letter, mouseX,mouseY);

        image(this.pic, mouseX, mouseY, tileSize * 1.5, tileSize * 1.5);

      } else
      {

        // text(this.letter, this.pixelPosition.x,this.pixelPosition.y);
        image(this.pic, this.pixelPosition.x, this.pixelPosition.y, tileSize,tileSize);

      }
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
  {/*
    if (this.withinBounds(x, y))
    {
      if (board.pieceAt(x,y))
      {
        if (board.getPiece(x,y).isWhite != this.isWhite)
          return true;
        else
          return false;
      }
      else
        return true;
    }
    else
      return false;
  */}

  withinBounds(x, y)
  {
    if (x >= 0 && y >= 0 && x < 8 && y < 8)
      return true;
    return false;
  }

  inDiag(x,y)
  {
    if   ((x == this.matrixPosition.x - 1) && (y == this.matrixPosition.y - 1)
      || (x == this.matrixPosition.x + 1) && (y == this.matrixPosition.y - 1)
      || (x == this.matrixPosition.x - 1) && (y == this.matrixPosition.y + 1)
      || (x == this.matrixPosition.x + 1) && (y == this.matrixPosition.y + 1))
      return true;
    return false;
  }

  inDiagMult(x,y,board)
  {
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


  passingThrough(x,y,dir,board)
  {
    switch (dir)
    {
      case 'up':
      for (let i = this.matrixPosition.y - 1 ; i > y ; i--)
      {
        if (board.pieceAt(x,i))
        {
          return true;
        }
      }
      return false;
      break;
      case 'down':
      for (let i = this.matrixPosition.y + 1; i < y ; i++)
      {
        if (board.pieceAt(x,i))
        {
          return true;
        }
      }
      return false;
      break;
      case 'left':
      for (let i = this.matrixPosition.x - 1; i > x ; i--)
      {
        if (board.pieceAt(i,y))
        {
          return true;
        }
      }
      return false;
      break;
      case 'right':
      for (let i = this.matrixPosition.x + 1; i < x ; i++)
      {
        if (board.pieceAt(i,y))
        {
         return true;
       }
     }
     return false;
     break;
   }
 }

 movingXCross(x,y,board)
 {
  if ((this.matrixPosition.x == x) && (this.matrixPosition.y > y))
  {
    console.log("movingXCross up")
    console.log("passing through " + this.passingThrough(x,y,'up',board))
    if (this.passingThrough(x,y,'up',board))
      return false;
    else
      return true;
  }
  else if ((this.matrixPosition.x == x) && (this.matrixPosition.y < y))
  {
    console.log("movingXCross down")
    console.log("passing through " + this.passingThrough(x,y,'down',board))
    if (this.passingThrough(x,y,'down',board))
      return false;
    else
      return true;
  }
  else if ((this.matrixPosition.y == y) && (this.matrixPosition.x > x))
  {
    console.log("movingXCross left")
    console.log("passing through " + this.passingThrough(x,y,'left',board))
    if (this.passingThrough(x,y,'left',board))
      return false;
    else
      return true;
  }
  else if ((this.matrixPosition.y == y) && (this.matrixPosition.x < x))
  {
    console.log("movingXCross right")
    console.log("passing through " + this.passingThrough(x,y,'right',board));
    if (this.passingThrough(x,y,'right',board))
      return false;
    else
      return true;
  }
  else if (this.inDiagMult(x,y,board))
    return true;
  else
    return false;
}


passingThroughDiagAux(x,y,board)
{
  if (this.matrixPosition.x > x)
  {
    if (this.matrixPosition.y > y)
      return this.passingThroughDiag(x,y,'TL',board);
    else
      return this.passingThroughDiag(x,y,'DL',board);
  }
  else
  {
    if (this.matrixPosition.y > y)
      return this.passingThroughDiag(x,y,'TR',board);
    else
      return this.passingThroughDiag(x,y,'DR',board);
  }
}

passingThroughDiag(x,y,dir,board)
{
  let dist = abs(x - this.matrixPosition.x);
  switch (dir)
  {
    case 'DR':
    for (let i = 1 ; i < dist ; i++)
    {
      if (board.pieceAt(this.matrixPosition.x + i, this.matrixPosition.y + i))
      {
        return true;
      }
    }
    return false;
    break;
    case 'DL':
    for (let i = 1 ; i < dist ; i++)
    {
      if (board.pieceAt(this.matrixPosition.x - i, this.matrixPosition.y + i))
      {
        return true;
      }
    }
    return false;
    break;
    case 'TR':
    for (let i = 1 ; i < dist ; i++)
    {
      if (board.pieceAt(this.matrixPosition.x + i, this.matrixPosition.y - i))
      {
        return true;
      }
    }
    return false;
    break;
    case 'TL':
    for (let i = 1 ; i < dist ; i++)
    {
      if (board.pieceAt(this.matrixPosition.x - i, this.matrixPosition.y - i))
      {
        return true;
      }
    }
    return false;
    break;
  }
}



}
