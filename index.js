// For mouse

var numberOfDrumButton = document.querySelectorAll(".drum").length;
var i = 0;
while (i < numberOfDrumButton) {
  document.querySelectorAll("button")[i].addEventListener("click", mouseClick);
  i++;
}

function mouseClick(){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
  //console.log(this.innerHTML);//give character
}

//For keyboard

document.addEventListener("keydown", keyboardPress);

function keyboardPress(){
  var keyboardKey = event.key;
  makeSound(keyboardKey);
  buttonAnimation(keyboardKey);
  //console.log(event.key);//give key
}

// Sound production

function makeSound(key) {

  switch (key) {

    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default: console.log();
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed")}, 100);
}
