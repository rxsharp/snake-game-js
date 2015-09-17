
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
var snake = [{top: 0, left: 0 }];
drawSnake(snake);