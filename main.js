//vars
var date;


//functions

function setup(){
    console.log("setting up...");
}
function preload(){
    console.log("loading...");
}
function draw(){
    date= new Date;
    document.getElementById('time').innerHTML= date;
}






//404 back
function back(){
    window.location= "index.html";
}


//jquery


