//1 - Check connection to html page
console.log("Hangman script connected")
//2 - Set initial variables
var userGuess=null;
var guessesLeft=6;
var guessesMade=[];
var wins=0;
var losses=0;
var questions = ["First Question?", "Second Question?", "Third Question?"];
var answers = ["abcd", "abcdef", "abcdefgh"];
var letterChoices=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Psuedocode
//Create an array of questions and answers (can pairs of strings be stored in same array?)
//Display question to User
//Display blanks = letters in answer (each letter has a position in an array?)
//User selects a letter and letter is compared against the answer for the question
//If correct display letter in correct position (will I need to store each in an array or can array relate to each other in some way?)
//If incorrect display letter in the incorrectGuesses ID

//Display a win or loss after each round.
document.querySelector('#winDisplay').innerHTML = wins;
document.querySelector('#lossDisplay').innerHTML = losses;