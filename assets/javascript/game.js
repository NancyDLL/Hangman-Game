//1 - Check connection to html page
console.log("Hangman script connected")
//Psuedocode
//Create an array of questions and answers and set initial variables
var userGuess=null;
var guessesLeft=9;
var guessesMade=[];
var correctLetters=[];
var wins=0;
var losses=0;
var undScoreCount=0;
var questions = [
	"What is a piece of code associated with a class or object to perform a task?",
	"What is a language mechanism for binding data with methods that operate on that data?",
	"What is a sequence of program instructions that perform a specific task?"
];
var answers = [
	"method",
	"object",
	"function"
];
var letterChoice=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Randomly generate a question and display to User 
//pressing any key is used for guessing - how to use both to start the game and then after game started to select a letter?
document.getElementById("start").addEventListener("click", function() {
	var displayQuestion=questions[Math.floor(Math.random()*questions.length)];
	//console.log("The picked question is ", displayQuestion);
	document.querySelector('#question').innerHTML=displayQuestion;
	//Pull corresponding answer from array
	var findQindex=questions.indexOf(displayQuestion);
	console.log("The index of the question is ", findQindex);
	switch(findQindex){
		case 0:
			var pickedAnswer=answers[0];
				//build a function that compares the letter selection against the letters in the array item
			correctLetters="m","e","t","h","o","d"
				//is there a way to build an array out of the string of pickedAnswer? for loop?
			break;
		case 1:
			var pickedAnswer=answers[1];
			correctLetters="o","b","j","e","c","t"
			break;
		case 2:
			var pickedAnswer=answers[2];
			correctLetters="f","u","n","c","t","i","o","n"
			break;
	}
	console.log("The picked answer is ", pickedAnswer);
	//find the length of the array item 
	undScoreCount=pickedAnswer.length;
	console.log("The number of letters are ", undScoreCount);
	//generate that number of "_ "
	
	//display those underscores in #answer
	//document.querySelector('#answer').innerHTML = ;

	//User selects a letter and letter is compared against the answer for the question
	document.onkeyup = function(){
		userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log("The User guessed " + userGuess);
		}
		//and letter is compared against the answer for the question
		if (userGuess == correctLetters) {
	 	console.log("same");
	} else {
	 	console.log("different");
	 	guessesMade++;
	 	guessesLeft--;
	 	//If incorrect display letter in the incorrectGuesses ID
	 	document.querySelector('#incorrectGuesses').innerHTML += userGuess + " ";
	 	console.log("The user has guessed a total of " + guessesMade + " times.");
	 		if (guessesLeft == 0) {
	 			losses++;
	 			guessesLeft=9;
 			}
 		}
//If correct display letter in correct position (will I need to store each in an array or can array relate to each other in some way?)
});


//Display a win or loss and reset guesses left after each round.
document.querySelector('#winDisplay').innerHTML = wins;
document.querySelector('#lossDisplay').innerHTML = losses;
document.querySelector('#guessesLeft').innerHTML = guessesLeft;

//UNUSED - but working if the other does not.
	//can i use the value of index in an if else to pull the answer?
	// if (findQindex==0) {
	// 	console.log("The corresponding answer is ", answers[0]);
	// 	var pickedAnswer=answers[0];
	// 	} 
	// 	else if (findQindex==1){
	// 		console.log("The corresponding answer is ", answers[1]);
	// 		var pickedAnswer=answers[1];
	// 	}
	// 	else if (findQindex==2){
	// 		console.log("The corresponding answer is ", answers[2]);
	// 		var pickedAnswer=answers[2];
	// 	}