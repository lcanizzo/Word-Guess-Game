var winsCounter = 0;
var correctCounter = 0;
var triesCounterPrint = document.getElementById("tries-counter-print");
var lettersTriedPrint = document.getElementById("letters-tried-print");
var triesCounter = 12;
triesCounterPrint.innerHTML = triesCounter;
var lettersTried = [];

// Array of possible words
    var wordList = new Array();
    wordList[0] = new Array("W", "Y", "B", "O");
    wordList[1] = new Array("L", "U", "C", "A");
    wordList[2] = new Array("J", "O", "E","Y");
    wordList[3] = new Array("T", "Y", "L","E","R");
    wordList[4] = new Array("J", "A", "S", "O", "N");
    wordList[5] = new Array("J", "O", "S", "H", "U","A");
    wordList[6] = new Array("J", "O", "D", "I");
    wordList[7] = new Array("J", "A", "C", "O","B");
    wordList[8] = new Array("J", "U", "L","I", "A");
    wordList[9] = new Array("J", "O", "S","E");
    wordList[10] = new Array("J", "O", "S", "H");
    wordList[11] = new Array("J", "U", "S", "T","I","N");
    wordList[12] = new Array("B", "R", "Y", "A", "N");
    wordList[13] = new Array("M", "A", "R", "I","O");
    wordList[14] = new Array("J", "U", "L","I", "A");

// start annoying block of Justin's    
    // wordList[16] = new Array("J", "U", "S", "T","I","N");
    // wordList[17] = new Array("J", "U", "S", "T","I","N");
    // wordList[18] = new Array("J", "U", "S", "T","I","N");
    // wordList[19] = new Array("J", "U", "S", "T","I","N");
    // wordList[20] = new Array("J", "U", "S", "T","I","N");
    // wordList[21] = new Array("J", "U", "S", "T","I","N");
    // wordList[22] = new Array("J", "U", "S", "T","I","N");
    // wordList[23] = new Array("J", "U", "S", "T","I","N");
    // wordList[24] = new Array("J", "U", "S", "T","I","N");
    // wordList[25] = new Array("J", "U", "S", "T","I","N");
    // wordList[26] = new Array("J", "U", "S", "T","I","N");
    // wordList[27] = new Array("J", "U", "S", "T","I","N");
    // wordList[28] = new Array("J", "U", "S", "T","I","N");
    // wordList[29] = new Array("J", "U", "S", "T","I","N");
    // wordList[30] = new Array("J", "U", "S", "T","I","N");
    // wordList[31] = new Array("J", "U", "S", "T","I","N");
    // wordList[32] = new Array("J", "U", "S", "T","I","N");
    // wordList[33] = new Array("J", "U", "S", "T","I","N");
    // wordList[34] = new Array("J", "U", "S", "T","I","N");
    // wordList[35] = new Array("J", "U", "S", "T","I","N");
    
    
console.log('wordList: ', wordList);


// Variables for letters of current word 
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

// Variables for letter boxes
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

function trimBlocks() {
    letterBoxes = [first, second, third, fourth, fifth, sixth, seventh, eighth, nineth, tenth, eleventh];
    for (var boxes =0; boxes < letterBoxes.length; boxes++) {
        letterBoxes[boxes].style.display = "none";    
    }
    for (var d = 0; d < currentWord.length; d++) {
        letterBoxes[d].style.display = "inline";
    }
}
function newGame() {
    trimBlocks();
    var lettersTried = [];
    correctCounter = 0;
}
function newWord() {
    var word = wordList[Math.floor(Math.random() * wordList.length)];
    return word;
}
var currentWord = newWord();
console.log('currentWord ', currentWord)


$(document).ready(function() {
    newGame();
    alert('How well do you know us?');
    triesCounter = setDifficulty();
})

function setDifficulty() {
    var dialog = $('<p>Select Difficulty</p>').dialog({
        resizable: false,
        width: 200,
        buttons: {
            "Easy": function () {
                alert('You don\'t know us at all, do you?');
                triesCounter = 12;
                triesCounterPrint.innerHTML = triesCounter;
                console.log('setDifficulty');
                dialog.dialog('close');
            },
            "Medium": function () {
                alert('You got this!');
                triesCounter = 8;
                triesCounterPrint.innerHTML = triesCounter;
                console.log('setDifficulty');                
                dialog.dialog('close');
            },
            "Hard": function () {
                alert('You are a hero.');
                triesCounter = 4;
                triesCounterPrint.innerHTML = triesCounter;
                console.log('setDifficulty');                
                dialog.dialog('close');
            }
        }
    });
}

// Order and Visibility of current word
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

//Correct Letter, Incorrect Letter, Invalid Choice, Win, Lose
$(document).keyup(function (e) {
    var keyPressed = String.fromCharCode(e.keyCode);
    console.log('keyPressed ', keyPressed);
    var guessedInArray = currentWord.indexOf(keyPressed);

    if (e.keyCode > 64 && e.keyCode < 91 &&
        lettersTried.indexOf(String.fromCharCode(e.keyCode)) == -1) {

        lettersTried.push(String.fromCharCode(e.keyCode));
        lettersTriedPrint.innerHTML = lettersTried.join(" . ");

        for (var i = 0; i < currentWord.length; i++) {
            if (guessedInArray === i) {
                letterVariables[i].style.visibility = "visible";
                correctCounter++;
                // console.log('correctCounter ', correctCounter);
                // console.log('currentWord.length ', currentWord.length);
                // console.log('triesCounter ', triesCounter);
                if (triesCounter > 0 &&
                    correctCounter == currentWord.length) {
                    alert(currentWord.join("") + ", you got it!");
                    winsCounter++;
                    document.getElementById("wins-counter").innerHTML = winsCounter;

                    // newWord();
                    currentWord = newWord();
                    console.log('currentWord ', currentWord)
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
                    // newGame();
                   
                    letterBoxes = [first, second, third, fourth, fifth, sixth, seventh, eighth, nineth, tenth, eleventh];
                    for (var boxes =0; boxes < letterBoxes.length; boxes++) {
                        letterBoxes[boxes].style.display = "none";    
                    }
                    for (var d = 0; d < currentWord.length; d++) {
                        letterBoxes[d].style.display = "inline";
                    }
                    
                    lettersTried = [];
                    lettersTriedPrint.innerHTML = lettersTried.join(" . ");
                    correctCounter = 0;
                    console.log('lettersTried ', lettersTried);
                    console.log('correctCounter ', correctCounter);
                    // setDifficulty();
                    var dialog = $('<p>Select Difficulty</p>').dialog({
                        resizable: false,
                        width: 200,
                        buttons: {
                            "Easy": function () {
                                alert('You don\'t know us at all, do you?');
                                triesCounter = 12;
                                triesCounterPrint.innerHTML = triesCounter;
                                console.log('setDifficulty');
                                dialog.dialog('close');
                            },
                            "Medium": function () {
                                alert('You got this!');
                                triesCounter = 8;
                                triesCounterPrint.innerHTML = triesCounter;
                                console.log('setDifficulty');                
                                dialog.dialog('close');
                            },
                            "Hard": function () {
                                alert('You are a hero.');
                                triesCounter = 4;
                                triesCounterPrint.innerHTML = triesCounter;
                                console.log('setDifficulty');                
                                dialog.dialog('close');
                            }
                        }
                    });
                    
                }
            }
        };

        if (guessedInArray === -1) {
            triesCounter --;
            triesCounterPrint.innerHTML = triesCounter;
            if (triesCounter == 0) {
                alert('Game OVER! Correct answer: ', currentWord.join(""));
                location.reload();
            };
        };
    };
});


