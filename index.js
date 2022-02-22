// function{
// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });


// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

//       console.log("success");

//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }

//     } else {

//       console.log("wrong");

//       playSound("wrong");

//       $("body").addClass("game-over");
//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       //2. Call startOver() if the user gets the sequence wrong.
//       startOver();
//     }

// }

// function nextSequence() {

//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// //1. Create a new function called startOver().
// function startOver() {

//   //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
//   level = 0;
//   gamePattern = [];
//   started = false;
// }

// }

const colors = [ "red", "green", "blue", "yellow" ];

let autoGeneratedButton = [];
let userPressButton = []; 

let level = 0;
let start = false;

// 
document.addEventListener("keypress",function(){
  if(!start){
    document.querySelector("#level-title").textContent = "Level " + level ;
    start = true;
    nextSecquence();
  }
});


for(var i=0;i<document.querySelectorAll(".btn").length;i++){
  document.querySelectorAll(".btn")[i].addEventListener("click",function(){

  let userButton = this.id;
  userPressButton.push(userButton);
  document.querySelector("#"+userButton).classList.add("pressed");
  playSound(userButton);
  setTimeout(function(){
    document.querySelector("#"+userButton).classList.remove("pressed");
  },500);
  checkAnswer(userPressButton.length-1);
})
}


function checkAnswer(currentLevel){

   if(autoGeneratedButton[currentLevel]===userPressButton[currentLevel]){
     if(userPressButton.length===autoGeneratedButton.length){
       setTimeout(function(){
         nextSecquence();
       },1000);
     }
   }
   else{
      
    document.querySelector("#level-title").textContent = "Game Over" ;
    playSound("wrong");
    document.querySelector("body").classList.add="game-over";
    setTimeout(function(){
      document.querySelector("body").classList.remove("game-over");
    },1000);
    // document.querySelector("#level-title").textContent = "Game Over,Press any key to Play Agian " ;
    playAgain();
   }

}


function nextSecquence() {

  userPressButton = [];
  level++;
  document.querySelector("#level-title").textContent = "Level " + level ;
  let randomNumber = Math.floor ( Math.random() * 4);
  let randomColor = colors[randomNumber];
  autoGeneratedButton.push(randomColor);
  document.querySelector("#"+randomColor).classList.add("opacity");
  playSound(randomColor);
  setTimeout(function(){
    document.querySelector("#"+randomColor).classList.remove("opacity");
  },500);

}

function playSound ( key ){
  let audio = new Audio ("sounds/" + key + ".mp3");
  audio.play();
}

function playAgain(){

  document.querySelector("#level-title").textContent = "Game Over,Press any key to Play Agian " ;
  level = 0;
  autoGeneratedButton = [];
  start = false;

}





