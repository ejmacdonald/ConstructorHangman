var Letter = require("./Letter");


var Word = function(targetPhrase) {
  this.TargetPhrase = targetPhrase;

  this.TargetPhraseArray = targetPhrase.split("");

  this.TargetPhraseObject = [];

  this.FillLetterObject = function() {
  	for (i=0; i<this.TargetPhrase.length; i++) {
  		var letter = new Letter(this.TargetPhraseArray[i]);
  		this.TargetPhraseObject.push(letter);
  	}
  }
  this.DisplayPhrase = function() {
    var GameBoard = "";

    this.TargetPhraseObject.forEach(function(x) {
      var nextLetter = x.displayChar();
      GameBoard += nextLetter; 
    });
    return GameBoard;
  }

  this.ScanWord = function(guess) {
    var doneArray = [];
    this.TargetPhraseObject.forEach(function(x) {
      var check = x.checkChar(guess);
      doneArray.push(x.guessed);
    });
    var countTrue = 0;
    for (i=0; i<doneArray.length; i++) {
      if (doneArray[i]) {
        countTrue++;
      }
      if (countTrue == doneArray.length) {
        return ("true");
        break;
      } 
    }
    return ("false");
  }
}

function checkDone(x) {
  return 
}



module.exports = Word;

