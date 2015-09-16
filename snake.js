
var drawSnake = function(snakeToDraw) {
var drawableSnake = {color: "#3EBE9B", pixels: snakeToDraw};
var drawableObjects = [drawableSnake];
CHUNK.draw(drawableObjects);
}

var snake = [{top: 0, left: 0 }];
drawSnake(snake);