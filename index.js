//detecting button press
for(var i = 0; i<document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//function to be called when an event reaches the target
var innerHTMLbtn = this.innerHTML;
makeSound(innerHTMLbtn);
btnAnimation(innerHTMLbtn);//calling btnAnimation

    });
}

//detecting keyboard press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    btnAnimation(event.key);
});

//brand new function
function makeSound(key){

    //switch statemnt
switch (key) {
    case "w":
        //block of code to be executed
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
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

    case "k":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    default: console.log(innerHTMLbtn);
        break;
}

}

//animation function
function btnAnimation(currentKey){
    var activeBtn = document.querySelector("."+currentKey);
    activeBtn.classList.add("pressed");
    //setTimeout function
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 100);
}












