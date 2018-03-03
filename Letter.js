
var Letter = function(letter) {
  this.letter = letter;
  this.guessed = false;
  this.displayChar = function(){
    if (this.letter == " ") {
      return (" ");
    } if (this.guessed) {
      return (this.letter);
    } else {
      return ("_");
    };
  };

  this.checkChar = function(x) {
    var xCap = x.toUpperCase();
    var letterCap = this.letter.toUpperCase();
    if ((x == this.letter) || (xCap == letterCap)) {
      this.guessed = true;
    }
    if (this.letter == " ") {
      this.guessed = true;
    }
  }
}

module.exports = Letter;


