//alert("hello people");
//adding event EventListener to buttons
var btn = document.querySelectorAll("button");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    var buttons = this.textContent;
    makesound(buttons);
    buttonAnimation(buttons);

  });
  //adding keylistners
  document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
  });

  //function to add animation to buttons

  function buttonAnimation(key){
    var activebtn=document.querySelector("."+key);
    activebtn.classList.add("pressed");
    setTimeout(function(){
      activebtn.classList.remove("pressed");
    },100);
  }
  //function to produce sound
  function makesound(key){
      let audio;
    switch (key) {
      case "w":
        audio = new Audio("sounds/tom-1.mp3");
        break;
      case "a":
        audio = new Audio("sounds/tom-2.mp3");
        break;
      case "s":
        audio = new Audio("sounds/tom-3.mp3");
        break;
      case "d":
        audio = new Audio("sounds/tom-4.mp3");
        break;
      case "j":
        audio = new Audio("sounds/snare.mp3");
        break;
      case "k":
        audio = new Audio("sounds/crash.mp3");
        break;
      case "l":
        audio = new Audio("sounds/kick-bass.mp3")
        break;
      default:
        break;

    }
    audio.play();
  }
}
