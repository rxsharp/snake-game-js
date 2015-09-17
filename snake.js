
var drawSnake = function(snakeToDraw) {
var drawableSnake = {color: "#3EBE9B", pixels: snakeToDraw};
var drawableObjects = [drawableSnake];
CHUNK.draw(drawableObjects);
}

var moveSnake = function(snake) {
	oldSegment = snake[0];
	newSegment = {top: oldSegment.top + 1, left: oldSegment.left};
	newSnake = [newSegment];
	return newSnake
}

var advanceGame = function(){
snake = moveSnake(snake);
drawSnake(snake);
}

// Snake start position
var snake = [{top: 0, left: 0 }];

//Execution of snake movement and draw commands
CHUNK.executeNTimesPerSecond(advanceGame, 1);