
// jshint esversion: 6


/*
Author: Anthony Noel
This webpage makes use of canvas to create moving back and forth objects

Future Dev:
-Factor out the shape code part to maybe  function that returns the appropriate function to draw to the canvas according to the shape
-Make an out of bounds function that sees if it's on the wall or anything
-Make the shape an object that can be references with it's own x,y coordinates
*/

const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");

//The size of the objects
const [SHAPE_WIDTH, SHAPE_HEIGHT] = [50,50];
//Global counter to keep track of iteration for constant shape movement
let counter = 0;
let lastX = 0;
let lastY = 0;


const initPage = () => {
  //draw shapes to the screen
  draw("square", 1);
};


const move = (startingX,startingY,shape) => {
  //Switch through the potential different shapes
  let direction = SHAPE_WIDTH;

  console.log(window.innerWidth-SHAPE_WIDTH);
  let newX;
  if(startingX+counter > (window.innerWidth-SHAPE_WIDTH)) {

    newX = (window.innerWidth-SHAPE_WIDTH) - counter;
  } else newX = startingX;

  console.log(newX);
  ctx.clearRect(lastX,startingY,SHAPE_WIDTH,SHAPE_HEIGHT);
  ctx.fillRect(newX+counter,startingY, SHAPE_WIDTH,SHAPE_HEIGHT);
  lastX = newX+counter;
  counter+= direction;

  console.log(counter);

};


const draw = (shape,num) => {
  //Switch between the shape that is desired
  //For each shape draw it to the screen the num of time

  //Hold location of the last object drawn to give it relation to the next
  let [shapeX, shapeY] = [0,0];
  switch (shape) {
    case "square":

      for (let i = 1; i <= num; i++) {
        //Make sure it's not the end of the y coordinate
        if(shapeY > (window.innerHeight-SHAPE_HEIGHT)) return;
        //Draw shape
        ctx.fillRect(shapeX,shapeY,SHAPE_WIDTH,SHAPE_HEIGHT);
        //Make a move function for the shape to move it from left to right constantly

        //For the next shape give it space betwen the it and the last one
        shapeY+=SHAPE_HEIGHT+5;
        console.log("Here i am");

      }

      break;
    default:

  }



};



//An interval to keep the objects moving
setInterval(function() {
  move(0,0,"square");
  console.log("Let's go!");
},300);



initPage();
