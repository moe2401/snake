function game(){
    const SIZE = 500; //Size of the playing field in pixels
    const GRID_SIZE = SIZE / 50;
    let c = document.getElementById("c");
    c.height = c.width = SIZE * 2; //"2x our resolution so retina screens look good"
    c.style.width = c.style.height = SIZE + "px";
    let context = c.getContext("2d");
    context.scale(2, 2); //Scale our canvas for retina screens

    let direction = newDirection = 1; //-2:up, 2:down, -1:left, 1:right
    let snakeLength = 5;
    let snake = [{x: SIZE / 2, y: SIZE / 2}]; //Snake starts in the center
    let candy = null;
    let end = false;
    
    function randomOffset(){
        return Math.floor(Math.random() * SIZE / GRID_SIZE)* GRID_SIZE;
    }

    function stringifyCoord(obj){
        return [obj.x, obj.y].join(",");
    }

}

game();