
// Array of possible words and array of current word letters
var wordList = new Array (  );

wordList[0] = new Array ( "R", "O", "B","E","R","T");
wordList[1] = new Array ( "C","A","T","E");
wordList[2] = new Array ("D","O","G");
wordList[3] = new Array ("C","A","T");

var currentWord = wordList[Math.floor(Math.random() * wordList.length)];

// console logs
console.log(wordList);
console.log(currentWord);

console.log(currentWord[0]);
console.log(wordList[0]);
console.log(currentWord.length);

// Variable for the letter of the current word 
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var ten = document.getElementById("ten");
var eleven = document.getElementById("eleven");

// Placement and Visibility of letter of current word
one.innerHTML = currentWord[0];
one.style.visibility = "hidden";
two.innerHTML = currentWord[1];
two.style.visibility = "hidden";
three.innerHTML = currentWord[2];
three.style.visibility = "hidden";
four.innerHTML = currentWord[3];
four.style.visibility = "hidden";
five.innerHTML = currentWord[4];
five.style.visibility = "hidden";
six.innerHTML = currentWord[5];
six.style.visibility = "hidden";
seven.innerHTML = currentWord[6];
seven.style.visibility = "hidden";
eight.innerHTML = currentWord[7];
eight.style.visibility = "hidden";
nine.innerHTML = currentWord[8];
nine.style.visibility = "hidden";
ten.innerHTML = currentWord[9];
ten.style.visibility = "hidden";
eleven.innerHTML = currentWord[10];
eleven.style.visibility = "hidden";

// logic for input characters
// window.onkeyup = function() {letterGuess()};

// function letterGuess() {
//     var x = 
// }
// var keypressTest = document.getElementById("keypress-test-box");

// window.addEventListener("keypress", letterGuess);

// function letterGuess() {
//     if (e.keyCode == 13) {
//         keypressTest.style.display = "none";
//     }
// }

// var event = new Event ("guess");

// window.addEventListener('guess', function (e) {letterGuess ()});

// function onkeyup () {
//     var event new ev
// }








// Variables for the box containing the bottom-border and the letter
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var sixth = document.getElementById("sixth");
var seventh = document.getElementById("seventh");
var eighth = document.getElementById("eighth");
var nineth = document.getElementById("nineth");
var tenth = document.getElementById("tenth");
var eleventh = document.getElementById("eleventh");


// Logic to remove excess letter-blocks
if (11-currentWord.length === 8) {
    fourth.style.display = "none";
    fifth.style.display = "none";
    sixth.style.display = "none";
    seventh.style.display = "none";
    eighth.style.display = "none";
    nineth.style.display = "none";
    tenth.style.display = "none";
    eleventh.style.display = "none";    
}

if (11-currentWord.length === 7) {
    fifth.style.display = "none";
    sixth.style.display = "none";
    seventh.style.display = "none";
    eighth.style.display = "none";
    nineth.style.display = "none";
    tenth.style.display = "none";
    eleventh.style.display = "none";    
}

if (11-currentWord.length === 6) {
    sixth.style.display = "none";
    seventh.style.display = "none";
    eighth.style.display = "none";
    nineth.style.display = "none";
    tenth.style.display = "none";
    eleventh.style.display = "none";    
}

if (11-currentWord.length === 5) {
    seventh.style.display = "none";
    eighth.style.display = "none";
    nineth.style.display = "none";
    tenth.style.display = "none";
    eleventh.style.display = "none";    
}

if (11-currentWord.length === 4) {
    eighth.style.display = "none";
    nineth.style.display = "none";
    tenth.style.display = "none";
    eleventh.style.display = "none";    
}

if (11-currentWord.length === 3) {
    nineth.style.display = "none";
    tenth.style.display = "none";
    eleventh.style.display = "none";    
}

if (11-currentWord.length === 2) {
    tenth.style.display = "none";
    eleventh.style.display = "none";    
}

if (11-currentWord.length === 1) {
    eleventh.style.display = "none";    
}

