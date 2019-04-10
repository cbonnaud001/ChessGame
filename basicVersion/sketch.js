let tileSize = 100;
let moving = false;
let board;
let movingPiece;

function setup() {
  createCanvas(1000, 1000);
  board = new Board();
 }

function draw() {
  background(255);
  showGrid();
  //console.log(board.whitePieces)
  board.show();
}

function showGrid()
{
  for (let i = 0 ; i < 8 ; i++)
  {
    for (let j = 0 ; j < 8 ; j++)
    {
      if ((i+j) % 2 == 0)
      {
        fill('white');
      }
      else
      {
        fill('#903521');
      }
      stroke('#222222');
      strokeWeight(4);
      rect(i * tileSize, j * tileSize, tileSize, tileSize);
    }
  }
  for (let i = 0 ; i < 8 ; i++)
  {
    fill('black');
    stroke(255);
    text(i, i * tileSize + tileSize/2, 8 * tileSize + tileSize/2);
    text(i, 8 * tileSize + tileSize/2, i * tileSize + tileSize/2);
  }

}


function mousePressed() {
  var x = floor(mouseX / tileSize);
  var y = floor(mouseY / tileSize);
    if (!moving) {
      movingPiece = board.getPiece(x, y);
      if (movingPiece != null) {

        movingPiece.movingThisPiece = true;
      } else {
        return;
      }
    } else {
      if (movingPiece.canMove(x, y, board)) {
        movingPiece.move(x, y, board);
        movingPiece.movingThisPiece = false;
        //whitesMove = !whitesMove;
      } else {
        movingPiece.movingThisPiece = false;

      }
    }
    moving = !moving;
}

