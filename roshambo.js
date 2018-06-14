var Game = {
    rockButton: document.getElementById("rock"),
    paperButton: document.getElementById("paper"),
    scissorsButton: document.getElementById("scissors"),
    lizardButton: document.getElementById("lizard"),
    spockButton: document.getElementById("spock"),
   

    score: {
        wins: 0,
        losses: 0,
        ties: 0,
    }
    choices: {
        Rock: 0,
        Paper: 1,
        Scissors: 2,
        Spock: 3,
        Lizard: 4,
    }
    results: {
        wins: 1,
        ties: 0,
        losses: -1,
    }
    player: new Player();
    computer: new Player();

    storePlayerChoice: function (choice) {
        Game.player.choices = choices;
        console.log("My choice is " + Game.player.choices);
        Game.storeComputerChoice();
    },
    storeComputerChoice: function () {
        Game.computer.choice = Math.floor(Math.random() * 3);
    },
    playTheGame: function playGame() {
    if (Game.player.choices != null) {
        if (Game.player.choices == Game.computer.choices) {
            ++Game.score.ties;
            Game.displayGameResult("tie");
            Game.updateMatches();
        } else if ( Game.player.choices == Game.player.choices.Rock && (Game.computer.choices == Game.computer.choices.Scissors || Game.computer.choices == Game.computer.choices.Lizard)) {
            ++Game.score.wins;
            Game.displayGameResult("win");
            Game.updateMatches();
        } else if (Game.player.choices == Game.player.choices.Paper && (Game.computer.choices == Game.computer.choices.Rock || Game.computer.choices == Game.computer.choices.Spock)) {
            ++Game.score.wins;
            Game.displayGameResult("win");
            Game.updateMatches();
        } else if (Game.player.choices == Game.player.choices.Scissors && (Game.computer.choices == Game.computer.choices.Paper || Game.computer.choices == Game.computer.choices.Lizard)) {
            ++Game.score.wins;
            Game.displayGameResult("win");
            Game.updateMatches();
        } else if (Game.player.choices == Game.player.choices.Spock && (Game.computer.choices == Game.computer.choices.Scissors || Game.computer.choices == Game.computer.choices.Rock)) {
            ++Game.score.wins;
            Game.displayGameResult("win");
            Game.updateMatches();
        } else if (Game.player.choices == Game.player.choices.Lizard && (computerChoice == 3 || computerChoice == 1)) {
            updateScore(0);
            displayGameResult("win");
            updateMatches();
        } else {
            updateScore(2);
            displayGameResult("lose");
            updateMatches();
        }
    }
    playerChoice = null;
    }

}
function displayGameResult(result) {
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".";
    if (result === "win") {
        document.getElementById("result").textContent = message + " YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        document.getElementById("result").textContent = message + " YOU LOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }
    updateScoreBoard();
}

function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
}

function updateScoreBoard() {
    document.getElementById("wins").textContent = score[0];
    document.getElementById("losses").textContent = score[2];
    document.getElementById("ties").textContent = score[1];
}




rockButton.addEventListener('click', () => {
    storePlayerChoice(0)
});
paperButton.addEventListener('click', () => {
    storePlayerChoice(1)
});
scissorsButton.addEventListener('click', () => {
    storePlayerChoice(2)
});
spockButton.addEventListener('click', () => {
    storePlayerChoice(3)
});
lizardButton.addEventListener('click', () => {
    storePlayerChoice(4)
});

playButton.addEventListener('click', () => {
    playGame()
});

var matches = [0, 0];

function updateMatchBoard() {
    document.getElementById("matchWin").textContent = matches[0];
    document.getElementById("matchLoss").textContent = matches[1];
}

function updateMatches() {
    if (score[0] == 2) {
        ++matches[0];
        score[0] = 0;
        score[1] = 0;
        score[2] = 0;
        updateMatchBoard();
    } else if (score[2] == 2) {
        ++matches[1];
        score[0] = 0;
        score[1] = 0;
        score[2] = 0;
        updateMatchBoard();
    }
}
