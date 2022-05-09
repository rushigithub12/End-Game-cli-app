var readLineSync = require("readline-sync");
var score = 0;


console.log("Instructions: ALL ANSWERS ARE IN SMALL LETTERS..");
console.log("-------------------------");

var userName = readLineSync.question("What's your name? ");
console.log("Welcome "+ userName + ". ");
console.log("-------------------------");

function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer == answer) {
    console.log("Right!");
    score += 1;
  } else {
    console.log("Wrong!");
    score -= 1;
  }
  console.log("Your current score is: " + score);
  console.log("--------------------");
}

var questions = [
     {  
      question: "1. How many infinity stones are there? (type number in words as one, two...) \n",
      answer: "six"
     },
     {  
       question: "2. Who was able to pick up Thor's hammer in Endgame? \n",
       answer: "captain america"
    },
    {  
       question: "3. Which movie kicked off the Marvel Cinematic Universe? \n",
       answer: "iron man"
    },
      {  
       question: "4. Who rescued the Tony Stark and Nebula from space? \n",
       answer: "captain marvel"
    },
    {  
       question: "5. Nick fury wears an eye patch over which eye? \n",
       answer: "left"
    },
  
]

for(let i = 0; i < questions.length; i++) {
  var currentHero = questions[i];
  play(currentHero.question, currentHero.answer);
}
console.log("Congrats! You have completed the quiz. Score is: ", score);