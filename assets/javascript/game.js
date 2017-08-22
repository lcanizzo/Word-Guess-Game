// Array of possible words and array of current word letters
var wordList = new Array (  );

    wordList[0] = new Array ( "W", "Y","B","O");
    wordList[1] = new Array ( "C","A","T","E");
    wordList[2] = new Array ("D","O","G");
    wordList[3] = new Array ("C","A","T");
    wordList[4] = new Array ("J","U","S","T","I","N");
    wordList[5] = new Array ("R","O","B");
    wordList[6] = new Array ("J","O","D","I");

var currentWord = wordList[Math.floor(Math.random() * wordList.length)];

// Counters for Wins and for Tries Remaining


//Prompt: 'select difficulty' easy 12, medium 8, hard 5
var triesCounter = 12;
var triesCounterPrint = document.getElementById("tries-counter-print");

$(function() {
    $(document).ready(function(e) {
        var dialog = $('<p>Select Difficulty</p>').dialog({
            buttons: {
                "Easy": function() {
                    alert('You don\'t know us at all, do you?');
                    triesCounter = 12;
                    triesCounterPrint.innerHTML = triesCounter;
                    dialog.dialog('close');
                },
                "Medium":  function() {
                    alert('You got this!');
                    triesCounter = 8;
                    triesCounterPrint.innerHTML = triesCounter;
                    dialog.dialog('close');
                },
                "Hard":  function() {
                    alert('You are a hero.');
                    triesCounter = 4;
                    triesCounterPrint.innerHTML = triesCounter;
                    dialog.dialog('close');
                }
            }
        });
    });
});

// var triesCounter = 12;

// console logs
    console.log('wordList', wordList);
    console.log('currentWord', currentWord);
    console.log('currentWord.length', currentWord.length);
    console.log('triesCounter ', triesCounter);

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
    
var letterVariables = [one, two, three, four, five, six, seven, eight, nine, ten, eleven];
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


// Logic for letter guessed
var lettersTried = [];
var lettersTriedPrint = document.getElementById("letters-tried-print")

$(document).keyup(function(e) {
    var letterGuessed = String.fromCharCode(e.keyCode);   
    // console.log(e.keyCode);         
    console.log(letterGuessed);
    var guessedInArray = currentWord.indexOf(letterGuessed);
    
    if (e.keyCode > 64 && e.keyCode <91 
        && 
        lettersTried.indexOf(String.fromCharCode(e.keyCode)) == -1) {

        lettersTried.push(String.fromCharCode(e.keyCode));
        lettersTriedPrint.innerHTML = lettersTried;

        for (var i = 0; i < currentWord.length; i++) {
            if (guessedInArray === i) {
                letterVariables[i].style.visibility = "visible";
            }
        };

        if (guessedInArray === -1) {
            triesCounter --;
            triesCounterPrint.innerHTML = triesCounter;
            if (triesCounter == 0) {
                alert('Game OVER');
                location.reload();
            };
        };
    };
});  







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

var letterBoxes = [first, second, third, fourth, fifth, sixth, seventh, eighth, nineth, tenth, eleventh];

// Logic to remove excess letter-blocks

for (var d = 0; d < currentWord.length; d++) {
    letterBoxes[d].style.display = "inline"
}

