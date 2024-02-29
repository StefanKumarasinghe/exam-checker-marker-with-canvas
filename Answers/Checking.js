var score=0;
//Error code encryption alert. Do not edit or view. Copyright and data protection laws are being placed. Your browser will be tracked!
//This only contains 40 questions and it is for the basic levels
var Question = {
};

var marked=false;
const unique=location.pathname

function ChoiceA(x,answer,classname) {
var y=document.getElementsByClassName(classname);
y[1].style.color="black";
y[2].style.color="black";
y[3].style.color="black";
y[1].parentNode.style.backgroundColor="white";
y[2].parentNode.style.backgroundColor="white";
y[3].parentNode.style.backgroundColor="white";

x.parentNode.style.backgroundColor="black"
x.style.color="white";
Question[answer]="A";


}
function ChoiceB(x,answer,classname) {
var y=document.getElementsByClassName(classname);
y[0].style.color="black";
y[2].style.color="black";
y[3].style.color="black";
y[0].parentNode.style.backgroundColor="white";
y[2].parentNode.style.backgroundColor="white";
y[3].parentNode.style.backgroundColor="white";

x.parentNode.style.backgroundColor="black"
x.style.color="white";
Question[answer]="B";
}
function ChoiceC(x,answer,classname) {
var y=document.getElementsByClassName(classname);
y[1].style.color="black";
y[0].style.color="black";
y[3].style.color="black";
y[1].parentNode.style.backgroundColor="white";
y[0].parentNode.style.backgroundColor="white";
y[3].parentNode.style.backgroundColor="white";
x.parentNode.style.backgroundColor="black"

x.style.color="white";
Question[answer]="C";
}
function ChoiceD(x,answer,classname) {
var y=document.getElementsByClassName(classname);
y[1].style.color="black";
y[2].style.color="black";
y[0].style.color="black";
y[1].parentNode.style.backgroundColor="white";
y[2].parentNode.style.backgroundColor="white";
y[0].parentNode.style.backgroundColor="white";

x.parentNode.style.backgroundColor="black";

x.style.color="white";
Question[answer]="D";
}

//Checking proccess
function Checking(){
var count=0;
marked=true;
var z;
var search;
eventfunc();

var explain =document.getElementsByClassName("Explanation")
var blockreports=document.getElementsByClassName("resultsheet");
blockreports[0].style.display="block";
blockreports[1].style.display="block";
for (z=1;z<41;z++){
search="answer"+z;

if (Question[search]== Answer[z-1]) {
count++;

document.getElementById("Question"+z).innerHTML="You got  Question - "+z+" Correct" +" Which is "+Answer[z-1];
document.getElementById("Question"+z).style.color="green";
explain[z-1].style.display="block";

}else {
document.getElementById("Question"+z).innerHTML="You got  Question - "+z+" Wrong!"+" Correct Answer is "+Answer[z-1];
document.getElementById("Question"+z).style.color="red";
explain[z-1].style.display="block";

Wrong(z-1,Question[search]);

}

}


Progresscheck(count);



}

function Wrong(pass,value) {
var pass;
var value;
	var look=pass+1;
	
	click=document.getElementsByClassName("eraser"+look);
	if (value=="A") {
		

        click[0].parentNode.style.backgroundColor="#eb4034";
		click[0].style.color="white";
	}else if  (value=="B") {
		
        click[1].style.color="white";
        click[1].parentNode.style.backgroundColor="#eb4034";
	}else if (value=="C") {
		click[2].style.color="white";
        click[2].parentNode.style.backgroundColor="#eb4034";
	}else if (value=="D") {
		click[3].style.color="white";

        click[3].parentNode.style.backgroundColor="#eb4034";
	}else {
	 click[3].parentNode.parentNode.style.backgroundColor="#eb4034";
		
	}
	
	
}

function eventfunc(){
document.getElementById("buttonsubmit").style.display="none";
document.getElementById("buttoncheck").style.display="none";


}

function Progresscheck(count){
var valueraw =((count/40)* 100);
saved(valueraw);
var value= Math.floor(valueraw);
var rating;
if (value<40) {
 rating ="F";
}
else if (value<50){ 
 rating ="E";
}
else if (value<60) {
 rating ="D";
}
else if (value<70) {
 rating ="C";
}
else if (value<80) {
 rating ="B";
}
else if (value<90) {
  rating ="A";
}
else if (value<100) {
  rating ="A*";
}
else if (value==100) {
rating ="Perfect!";

}
send(valueraw);


var x= setInterval(function Score(){
score++;
if (score==value+1) {
clearInterval(x);
document.getElementById("scorevalue").style.fontSize="30px";
document.getElementById("scorevalue").style.transition="font 0.5s";
}else{
document.getElementById("scorevalue").innerHTML=score+"% "+rating;
}
},40);

var click ;
var loop=1;

for (loop=1;loop<41;loop++){
	
	click=document.getElementsByClassName("eraser"+loop);
	
	if (Answer[loop-1]=="A") {
		

        click[0].parentNode.style.backgroundColor="#1adb4e";
		click[0].style.color="white";
	}else if  (Answer[loop-1]=="B") {
		
        click[1].style.color="white";
        click[1].parentNode.style.backgroundColor="#1adb4e";
	}else if (Answer[loop-1]=="C") {
		click[2].style.color="white";
        click[2].parentNode.style.backgroundColor="#1adb4e";
	}else {
		click[3].style.color="white";

        click[3].parentNode.style.backgroundColor="#1adb4e";
	}
	
	
	
	
	
}

}
function saved(score){
	
	localStorage.setItem(unique+"score",score);
	localStorage.setItem(unique,"yes")
	
	
}
function load(){
	var save=localStorage.getItem(unique+"score");
	var checked= localStorage.getItem(unique);
	
	if (checked=="yes") {
	
	document.getElementById('complete').style.display='block';
    document.getElementById('savemessage').innerHTML="It seems that you have done this paper before and you have scored a mark of "+ save+"%";	
	}
	
	document.getElementById('id01').style.display='block';
	if (detectMob()){
		location.href="MobileVersion.html"
	}
}

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
function explaindecrease (value) {
value.style.fontSize="10px";
value.style.transition="font 0.3s";
}
function explainincrease (value) {
value.style.fontSize="20px";
value.style.transition="font 0.3s";
}

