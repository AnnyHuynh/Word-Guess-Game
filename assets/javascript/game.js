
var computerChoice ="";
var lettersInComputerChoice = [];
var numBlanks = 0;
var guess = "";
var blanksAndSuccesses = [];
var wrongGuesses = [];

var idAttemptsLeft = 10;

var animals = ["dog", "cat", "pig","horse", "chicken"];

function startGame(){
  guess = "";
  idAttemptsLeft = 10;
  computerChoice = animals[Math.floor(Math.random() * animals.length)]
  lettersInComputerChoice = computerChoice.split('');
  numBlanks = lettersInComputerChoice.length;
  console.log(computerChoice);
  // CRITICAL LINE - Here we *reset* the guess and success array at each round.
  blanksAndSuccesses = [];
  // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
  wrongGuesses = [];
  // Print the initial blanks in console.
  console.log(blanksAndSuccesses);
  // Reprints the guessesLeft to 10
  // Fill up the blanksAndSuccesses list with appropriate number of blanks.
  // This is based on number of letters in solution.
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }
  document.getElementById("letter").innerHTML = guess;
  document.getElementById("attemptsLeft").innerHTML = idAttemptsLeft;
  document.getElementById("word").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("guessed").innerHTML=wrongGuesses.join(" ");

}

function checkLetters(guessedLetter){
   //var guessedLetter = document.getElementById("letter").innerHTML;
   // This boolean will be toggled based on whether or not a user letter is found anywhere in the word.
   var letterInWord = false;

   for (var i = 0; i < numBlanks; i++) {
    if (lettersInComputerChoice[i] === guessedLetter) {
      // If the letter exists then toggle this boolean to true. This will be used in the next step.
      letterInWord = true;
    }
  }
    if(letterInWord){
      for (var j = 0; j < numBlanks; j++){
        if (lettersInComputerChoice[j] === guessedLetter){
          blanksAndSuccesses[j] = guessedLetter;
          guess = guessedLetter;
         // Logging for testing.
         console.log(blanksAndSuccesses[j]);
      }
    }
  }

  else{
    guess = guessedLetter;
    wrongGuesses.push(guessedLetter);
    idAttemptsLeft--;
  }

}

function roundComplete(){

  document.getElementById("letter").innerHTML = guess;

  document.getElementById("attemptsLeft").innerHTML = idAttemptsLeft;

  document.getElementById("word").innerHTML = blanksAndSuccesses.join(" "); 

  document.getElementById("guessed").innerHTML=wrongGuesses.join(" ");
  

  if (lettersInComputerChoice.toString() === blanksAndSuccesses.toString()){
    makePic();
    startGame();  
  }
  else if (idAttemptsLeft === 0){
    startGame();
  }

}

// Starts the Game by running the startGame() function
startGame();

document.onkeyup = function(event) {
 
  var letterGuessed = String.fromCharCode(event.which).toLowerCase();

  checkLetters(letterGuessed);
  roundComplete();

}

  function makePic(){
    console.log("picture", picture);
    console.log(idWord2);
  var picture = document.getElementById("animal-name");
  var idWord2 = blanksAndSuccesses.join("");
  if (idWord2 === animals[0]){
    console.log(idWord2);
    picture.src = 'assets/images/dog.jpg'
  }else if(idWord2 === animals[1]){
     picture.src = "assets/images/cat.jpg"
   }else if(idWord2 === animals[2]){
    picture.src = "assets/images/pig.jpg"
 }else if(idWord2 === animals[3]){
     picture.src = "assets/images/horse.jpg"
   }else if (idWord2 === animals[4]){
     picture.src = "assets/images/chicken.jpg"
   }
  }
  makePic();















  







