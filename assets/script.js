var wins = 0;
var ties = 0;
var losses = 0;

var options = ["R", "P", "S"];

var playGame = function() {
    var userChoice = window.prompt("Enter R, P, or S");

    userChoice = userChoice.toUpperCase();

if (!userChoice) {
    return;
} 

if (userChoice != "R" && userChoice != "P" && userChoice != "S") {
    window.alert("Please enter a valid option:\n'r' for Rock, 'p' for Paper, or 's' for Scissors.\nLetters are not case sensitive.");
    return;
}


var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];

window.alert("The computer chose " + computerChoice + ".");



if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");
} else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
) {
    wins++;
    window.alert("You win!");

} else {
    losses++;
    window.alert("You lost!")
} 

window.alert(
    "Stats\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
);

var playAgain = window.confirm("Play Again?");

if (playAgain) {
    playGame();
    }
};

playGame();