//Mouse position holder
var xy1 = [0, 0];
var xy2 = [0, 0];
var drawMe = false;
var firstime = true;

// Canvas variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "blue"; //default black ctx.fillRect(0,0,150,75);

// Image variables and functions
var images = new Image();
images.src = 'image/1.png';

images.onload = function() {
    ctx.drawImage(images, 0, 0, canvas.width, canvas.height);
};

// Show the current mouse locations
function mouseMove(event) {
    document.getElementById('cords').innerHTML = (event.clientX - canvas.getBoundingClientRect().left - 0.40625) + ', ' + (event.clientY - canvas.getBoundingClientRect().top);

    document.getElementById('myCanvas').onmousedown = function () {
        drawMe = true;

        if (firstime)
        {
            firstime = false;
            xy2 = [event.clientX- canvas.getBoundingClientRect().left, event.clientY- canvas.getBoundingClientRect().top];
        }

        console.log('----------On (Mouse is down)----------');

        // Grab the mouse cord
        xy1 = [event.clientX- canvas.getBoundingClientRect().left, event.clientY- canvas.getBoundingClientRect().top];
        console.log('Grabbed a new cord for mouse X and Y. [X: ' + xy1[0] + ', Y: ' + xy1[1] + ']' );

        // Draw on the canvas where mouse X and Y is
        ctx.fillRect(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top, document.getElementById('squareSize').value, document.getElementById('squareSize').value);
    };

    document.getElementById('myCanvas').onmouseup = function () {
        drawMe = false;
        
        // Capture the second location to create a line
        //xy2 = [event.clientX- canvas.getBoundingClientRect().left, event.clientY- canvas.getBoundingClientRect().top];

        // Call linemaker to create a new line
        //lineMaker()
        
        console.log('----------Off (Mouse is up)----------')
    };

    // Used to repeatly create squares (called every time the mouse moves)
    if (drawMe)
        lineMaker(event)
}


// Set color for ctx
function setColor(color) {
    ctx.fillStyle = color;
}

// Delete all rectangles
function cleaner() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.drawImage(images, 0, 0, canvas.width, canvas.height);
}

// Create a line on the canvas
function lineMaker(event) {
    // Create squares repeatedly when the mouse moves and mouse click is down 
    //ctx.fillRect(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top, document.getElementById('squareSize').value, document.getElementById('squareSize').value);

    xy1 = [event.clientX- canvas.getBoundingClientRect().left, event.clientY- canvas.getBoundingClientRect().top];

    // Not working
    ctx.beginPath();
    ctx.moveTo(xy1[0], xy1[1]);
    ctx.lineTo(xy2[0], xy2[1]);
    ctx.stroke();
    ctx.closePath();
    xy2 = [event.clientX- canvas.getBoundingClientRect().left, event.clientY- canvas.getBoundingClientRect().top];

    console.log((xy1[0] - canvas.getBoundingClientRect().left - 0.40625) + ', ' + (xy1[1] - canvas.getBoundingClientRect().top))
}

// Type of array values
console.log('Type of xy1[0] is: ' + typeof(xy1[0]));
console.log('Type of xy1[1] is: ' + typeof(xy1[1]));
console.log('Type of xy2[0] is: ' + typeof(xy2[0]));
console.log('Type of xy2[1] is: ' + typeof(xy2[1]));
