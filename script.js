// centering the box
const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

//input bar
const header = document.querySelector("#heading");
header.style.display = "flex";
header.style.justifyContent = "space-around";
header.style.gap ="15px"
const inputBar = document.querySelector("#inputBar");

inputBar.addEventListener("keyup", inputFunc);

const sketchPad = document.querySelector("#container");

//set attributes for sketchpad
sketchPad.style.display = "flex";
sketchPad.style.flexWrap = "wrap";
sketchPad.style.maxHeight = "500px";
sketchPad.style.maxWidth = "500px";
sketchPad.style.borderColor = "black";
sketchPad.style.borderStyle = "solid";
//sketchPad.setAttribute("style", "display:flex;flex-wrap:wrap");

function inputFunc(e) {
    removeEvent = false;
    if(e.keyCode == 13){
        numberOfSquaresRow = e.target.value - 0;
        console.log(isNaN(numberOfSquaresRow));
        if(isNaN(numberOfSquaresRow)){
           alert("input should be an integer")
           return;
        }
        if(numberOfSquaresRow > 100){
            alert("will result in loading issue please use a number smaller");
        }
        console.log("numberOfSquareRow = " + numberOfSquaresRow + " typeof = " + typeof(numberOfSquaresRow));
        numberOfSquares = numberOfSquaresRow* numberOfSquaresRow;
        addBox(sketchPad, numberOfSquares);
        note = document.createElement("div");
        textNode = document.createTextNode("refresh the page to change the number of boxes");
        note.appendChild(textNode);
        note.style.color = "red";
        body.appendChild(note);
        e.target.removeEventListener(e.type,inputFunc);
    }
}

//numberOfSquares = 64;



function addBox(sketchPad, numberOfSquares){
    
    boxSize = (500*500)/numberOfSquares;
    boxHeight = Math.pow(boxSize,0.5);
    boxHeight = boxHeight.toString() + "px";
    boxWidth = boxHeight;

    for(i = 0; i < numberOfSquares;i++){
        box = document.createElement("div");
        textNode = document.createTextNode(" ");
        box.appendChild(textNode);
        box.className = "box";
        box.id = "box" + i;
        box.style.height = boxHeight;
        box.style.width = boxWidth;
        box.style.backgroundColor = "#fff";
        box.addEventListener("mouseover", colorIt);
        sketchPad.appendChild(box);
    }
}

function colorIt(e) {
    boxID = "#" + e.target.id;
    //console.log(boxID);
    box = document.querySelector(boxID);
    //console.log(box.style.backgroundColor);
    rgb2num(box.style.backgroundColor);
    boxColor = rgb2num(box.style.backgroundColor);
    //console.log(boxColor);
    boxRed = boxColor[1];
    boxGreen = boxColor[2];
    boxBlue = boxColor[3];
    if((boxRed == 255) & (boxGreen == 255) & (boxBlue == 255)){
        boxRed = Math.floor(Math.random()*255);
        boxGreen = Math.floor(Math.random()*255);
        boxBlue = Math.floor(Math.random()*255);
    }else{
        boxRed = Math.floor((boxRed*9)/10);
        boxGreen = Math.floor((boxGreen*9)/10);
        boxBlue = Math.floor((boxBlue*9)/10);
    }
    box.style.backgroundColor = rgb(boxRed, boxGreen, boxBlue);
}

function rgb2num(str){
    re = new RegExp("rgb\\((\\d+), (\\d+), (\\d+)\\)","gm");
    //console.log(re);
    //console.log(str.matchAll(re))
    //console.log(str.matchAll(re).next().value);
    return str.matchAll(re).next().value;
}

function rgb(r,g,b){
    return "rgb(" + r + "," + g + "," + b + ")";
}