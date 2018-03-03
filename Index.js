
var Word = require("./Word.js");

var inquirer = require("inquirer");

//here's an array with possible show names
var phraseBank = ["Happy Days", "Seinfeld", "Mork and Mindy", "Friends", "Modern Family", "How I Met Your Mother"];


//get a random index to select a schow
var randomIndex = Math.floor(Math.random() * phraseBank.length);

//create a new word object with the selected show name, assign it to the variable selectedShow
var selectedShow = new Word(phraseBank[randomIndex]);

//get the length of the show name so we can set the number of guesses;
var nameArray = phraseBank[randomIndex].split("");

var done = false;

//set the number of guesses to 5 more than the number of letters in the answer
var numGuesses = nameArray.length + 5;

//create a bunch of letter objects for each letter of the show name
selectedShow.FillLetterObject();


//be a good host
console.log("Welcome to Hangman, Sitcom Edition!!!");
console.log("*************************************");
console.log("                                     ");
console.log("You have " + numGuesses + " remaining...");
console.log("Here's your gameboard:  " + selectedShow.DisplayPhrase());


//prompt the user for input
getInput();

function getInput(){
	inquirer.prompt([
{
      type: "input",
      message: "guess a letter",
      name: "guess"
    }
  ])
  .then(function(input) {
  	numGuesses--;
  	if (numGuesses < 1) {
  		loseMessage();
  		return;
  	}
    done = selectedShow.ScanWord(input.guess);
    console.log("You have " + numGuesses + " remaining...");
    console.log("Here's your gameboard:  " + selectedShow.DisplayPhrase());
    if (done == "true") {
    	winMessage();
    	return;
    } else {
    getInput();
	}
  });
}


function loseMessage() {
	console.log (" ");
    console.log (" ");
    console.log (" ");
    console.log ("Sorry, you LOSE!!!")
    console.log (" ");
    console.log (" ");
    console.log (" ");
}

function winMessage() {
	console.log (" ");
    console.log (" ");
    console.log (" ");
    console.log ("CONGRATULATIONS, YOU WIN!!!!")
    console.log (" ");
    console.log (" ");
    console.log (" ");
}


