// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("i got Click");
// }
var numDrum = document.querySelectorAll(".drum").length;
for (let i = 0; i < numDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var b = document.querySelectorAll('.drum')[i].innerHTML;
        var buttonn = this.innerHTML;
        makingSound(buttonn);
        switch (b) {
        case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
        case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
        case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
        case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
        case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
        case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
        case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;        
        }
       this.style.color = "white";
    });
}

function calculate(){
    let insertNum = document.getElementById('int').value;
    let sum = (insertNum * insertNum) * 3.14;
    document.getElementById('show').innerHTML = sum;
}

document.getElementById('submit').addEventListener('click',function(){
    let insertNum = document.getElementById('int').value;
    document.getElementById('show').innerHTML = (insertNum*insertNum) * 3.14;
});


var numOfDrumBtn = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfDrumBtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    });
    
}


document.addEventListener("keydown",function(event){
    makingSound(event.key);
});

function makingSound(key){
    switch(key) {
        case key = "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
        case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
        case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
        case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
        case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
        case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
        case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;   
        default:
            console.log(buttonnt);
        }
}
