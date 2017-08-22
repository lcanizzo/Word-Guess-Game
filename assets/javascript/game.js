
// Array of possible words and array of current word letters
var wordList = new Array (  );

wordList[0] = new Array ( "R", "O", "B","E","R","T");
wordList[1] = new Array ( "C","A","T","E");
wordList[2] = new Array ("D","O","G");
wordList[3] = new Array ("C","A","T");

var currentWord = wordList[Math.floor(Math.random() * wordList.length)];

// console logs
console.log('wordList', wordList);
console.log('currentWord', currentWord);
console.log('currentWord.length', currentWord.length);

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


// Logic for letter guessed

$(document).keydown(function(e) {
    var letterGuessed = String.fromCharCode(e.keyCode);   
    // console.log(e.keyCode);         
    console.log(letterGuessed);
    var guessedInArray = currentWord.indexOf(letterGuessed);
     

    // Second "R" in "ROBERT" does not work because it is already the first letter)
    if (guessedInArray === 0) {
        one.style.visibility = "visible";
    }
    if (guessedInArray === 1) {
        two.style.visibility = "visible";
    }
    if (guessedInArray == 2) {
        three.style.visibility = "visible";        
    } 
    if (guessedInArray == 3) {
        four.style.visibility = "visible";        
    } 
    if (guessedInArray == 4) {
        five.style.visibility = "visible";        
    } 
    if (guessedInArray == 5) {
        six.style.visibility = "visible";        
    } 
    if (guessedInArray == 6) {
        seven.style.visibility = "visible";        
    } 
    if (guessedInArray == 7) {
        eight.style.visibility = "visible";        
    } 
    if (guessedInArray == 8) {
        nine.style.visibility = "visible";        
    } 
    if (guessedInArray == 9) {
        ten.style.visibility = "visible";        
    } 
    if (guessedInArray == 10) {
        eleven.style.visibility = "visible";        
    } 

});      

 // Key Press Tests
            var keypressTest = document.getElementById("keypress-test-box");

                // if (guessedInArray !== -1) {
                //     keypressTest.style.display = "none";
                // }

                // if (guessedInArray == 0) {
                //     one.style.visibility = "visible";        
                // } else if (guessedInArray == 1) {
                //     two.style.visibility = "visible";        
                // } else if (guessedInArray == 2) {
                //     three.style.visibility = "visible";        
                // } else if (guessedInArray == 3) {
                //     four.style.visibility = "visible";        
                // } else if (guessedInArray == 4) {
                //     five.style.visibility = "visible";        
                // } else if (guessedInArray == 5) {
                //     six.style.visibility = "visible";        
                // } else if (guessedInArray == 6) {
                //     seven.style.visibility = "visible";        
                // } else if (guessedInArray == 7) {
                //     eight.style.visibility = "visible";        
                // } else if (guessedInArray == 8) {
                //     nine.style.visibility = "visible";        
                // } else if (guessedInArray == 9) {
                //     ten.style.visibility = "visible";        
                // } else if (guessedInArray == 10) {
                //     eleven.style.visibility = "visible";        
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

