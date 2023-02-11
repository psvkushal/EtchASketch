// centering the box
const body = document.querySelector("body");
body.style.display = "flex";
body.style.justifyContent = "center";

const sketchPad = document.querySelector("#container");

//set attributes for sketchpad
sketchPad.style.display = "flex";
sketchPad.style.flexWrap = "wrap";
sketchPad.style.maxHeight = "500px";
sketchPad.style.maxWidth = "500px";
sketchPad.style.borderColor = "black";
sketchPad.style.borderStyle = "solid";
//sketchPad.setAttribute("style", "display:flex;flex-wrap:wrap");


numberOfSquares = 64;

addBox(sketchPad, numberOfSquares);

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
    console.log(boxID);
    box = document.querySelector(boxID);
    console.log(box.style.backgroundColor);
    rgb2num(box.style.backgroundColor);
    boxColor = rgb2num(box.style.backgroundColor);
    console.log(boxColor);
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