

var size=1;
var shape="round";
var color="black";
function Color(value){

  color=value;
}


function sizeChanger() {
	var x=document.getElementById("size")

	size=x.value
	  var y = document.getElementById("sizevalue");
    y.innerHTML=x.value +"px";
    
}
function Brush(value){
	shape=value
}
function elementScale(el) {
    return el.offsetWidth === 0 ? 0 : (el.width / el.offsetWidth);
}

function Eraser() {
	Brush('round');
	Color('white');
	size=20;
}

window.addEventListener("load", () => {
 const canvas = document.querySelector("#canvas");
 const ctx= canvas.getContext("2d");
 
 //Resizing
 canvas.height = window.innerHeight;
 canvas.width=window.innerWidth;
window.addEventListener("resize", () => {
	canvas.height = window.innerHeight;
   canvas.width=window.innerWidth;
})
	
 let painting = false;
 function startPosition(e){
  painting=true;
  draw(e);
 }
 function finishedPosition() {
  painting = false;
  ctx.beginPath();
 }
 
 function draw(e){
  if (!painting) return;
   ctx.lineWidth = size;
   ctx.lineCap = shape;
   ctx.strokeStyle=color;
   
   ctx.lineTo(e.clientX, e.clientY);
   ctx.stroke();
   ctx.beginPath();
   
   ctx.moveTo(e.clientX, e.clientY);
   Reset();
 }
 
 
 //EventListeners
 canvas.addEventListener("mousedown", startPosition);
 canvas.addEventListener("mouseup", finishedPosition);
 canvas.addEventListener("mousemove", draw);
 });
 
 function Fill(){
    canvas.height = window.innerHeight;
    canvas.width=window.innerWidth;
 }

