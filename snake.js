
var drawSnake = function(snakeToDraw) {
var drawableSnake = {color: "#3EBE9B", pixels: snakeToDraw};
var drawableObjects = [drawableSnake];
CHUNK.draw(drawableObjects);
}

var moveSegment = function(segment) {
  if (segment.direction === "down") {
    return { top: segment.top + 1, left: segment.left }
  } else if (segment.direction === "up") {
    return { top: segment.top - 1, left: segment.left }
  } else if (segment.direction === "right") {
    return { top: segment.top, left: segment.left + 1 }
  } else if (segment.direction === "left") {
    return { top: segment.top, left: segment.left - 1 }
  }
  return segment;
}

var moveSnake = function(snake) {
	var oldSegment = snake[0];
	var newSegment = moveSegment(oldSegment);
	newSegment.direction = oldSegment.direction;
	newSnake = [newSegment];
	return newSnake
}

var advanceGame = function(){
snake = moveSnake(snake);
drawSnake(snake);
}

//Change the direction of the first segment to change the direction
var changeDirection = function(direction) {
  snake[0].direction = direction;
}

// Add collision effect
  var advanceGame = function() {
  snake = moveSnake(snake);
  if (CHUNK.detectCollisionBetween(snake, CHUNK.gameBoundaries())) {
    CHUNK.endGame();
    CHUNK.flashMessage("Yikes! You hit a wall");
  }
  drawSnake(snake);
}

// Snake start position
var snake = [{top: 5, left: 9, direction: "up" }];

//Execution of snake movement and draw commands
CHUNK.executeNTimesPerSecond(advanceGame, 1);

//CHUNK can call the function changeDirection when an arrow key is pressed
CHUNK.onArrowKey(changeDirection); 