
//id: word, letter, enter, guessed, attemptsLeft;
var idWord = document.getElementById("word");
//var idEnter = document.getElementById("enter");
var idGuessed = document.getElementById("guessed");
var idAttemptsLeft = document.getElementById("attemptsLeft");
var attemptsLeft = 10;

var animals = ["dog", "cat", "pig","horse", "chicken"];
var computerChoice = animals[Math.floor(Math.random() * animals.length)].split('');

var array = []
var letter = document.getElementById("letter")

console.log('computerChoice', computerChoice) 
idAttemptsLeft.textContent = attemptsLeft;

for(var i = 0; i < computerChoice.length; i++) {
  array.push('_')
}


idWord.textContent = array.join(' ')

document.onkeyup = function() {
 
  var userGuess = event.key

  letter.textContent = userGuess

  var indexGuess = computerChoice.indexOf(userGuess)

  for (var c = 0; c < computerChoice.length; c++){
  
  if(computerChoice[c] === userGuess) {
    array[c] = userGuess
    idWord.textContent = array.join(' ')
  }};

  if (indexGuess === -1){

    var guessSpan = document.createElement("span")
    guessSpan.textContent = userGuess
    idGuessed.appendChild(guessSpan)

    attemptsLeft -= 1;
    idAttemptsLeft.textContent = attemptsLeft;
    console.log(attemptsLeft);

  }

  function makePic(){
    console.log("picture", picture);
    console.log(idWord2);
  var picture = document.getElementById("animal-name");
  var idWord2 = idWord.textContent.split(' ').join("");
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

  function restart(){

    if (attemptsLeft === 0){
      array = [];
    }

  }
  restart();
}






  







