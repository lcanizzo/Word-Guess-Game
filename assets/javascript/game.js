
// var wordList = ["f i r s t", "s e c o n d", "t h i r d", "f o u r t h", "f i f t h", "s i x t h"];

// var currentWord = wordList[Math.floor(Math.random() * wordList.length)];
// var currentWordBox = document.getElementById("current-word");

    // currentWordBox.innerHTML = currentWord;

// console.log(currentWord);
// console.log(wordList);

var wordList = new Array (  );

wordList[0] = new Array ( "R", "O", "B","E","R","T");
wordList[1] = new Array ( "C","A","T","E");
wordList[2] = new Array ("D","O","G");
wordList[3] = new Array ("C","A","T");

var currentWord = wordList[Math.floor(Math.random() * wordList.length)];


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

one.innerHTML = currentWord[0];
two.innerHTML = currentWord[1];
three.innerHTML = currentWord[2];
four.innerHTML = currentWord[3];
five.innerHTML = currentWord[4];
six.innerHTML = currentWord[5];
seven.innerHTML = currentWord[6];
eight.innerHTML = currentWord[7];
nine.innerHTML = currentWord[8];
ten.innerHTML = currentWord[9];
eleven.innerHTML = currentWord[10];

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


// testing innerHTML changes
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

// var displayNoneTest = 
// one.innerHTML = "this is a test";
// var currentWordBox = document.getElementById("current-word");
// currentWordBox.innerHTML = "testing one two";
