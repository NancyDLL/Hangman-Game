//1 - Check connection to html page
console.log("Hangman script connected")
//2 - Set initial variables
var userGuess=null;
var guessesLeft=9;
var guessesMade=[];
var wins=0;
var losses=0;
var questions = [
	"First Question?",
	"Second Question?",
	"Third Question?"
];
var answers = [
	"abcd",
	"abcdef",
	"abcdefgh"
];
var letterChoice=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log("Question Array ", questions);
console.log("Answer Array ", answers);
console.log("Letter Choices ", letterChoice);

//Psuedocode
//Create an array of questions and answers
//Random pick a question and display to User
document.getElementById("start").addEventListener("click", function() {
	var displayQuestion=questions[Math.floor(Math.random()*questions.length)];
	console.log("The picked question is ", displayQuestion);
	document.querySelector('#question').innerHTML=displayQuestion;
	//Pull corresponding answer from array
	var findQindex=questions.indexOf(displayQuestion);
	console.log("The index of the question is ", findQindex);
	//can i use the value of index in an if else to pull the answer?
	if (findQindex==0) {
		console.log("The corresponding answer is ", answers[0]);
		} //is there something like an if else to search through more then 2 posibilities?
});



//For every letter of the answer display underscores (somehow length will be used)
//User selects a letter and letter is compared against the answer for the question
//If correct display letter in correct position (will I need to store each in an array or can array relate to each other in some way?)
//If incorrect display letter in the incorrectGuesses ID

//Display a win or loss after each round.
document.querySelector('#winDisplay').innerHTML = wins;
document.querySelector('#lossDisplay').innerHTML = losses;