
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

// testing innerHTML changes
// one.innerHTML = "this is a test";
// var currentWordBox = document.getElementById("current-word");
// currentWordBox.innerHTML = "testing one two";
