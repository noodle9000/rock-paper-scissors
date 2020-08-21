let winCounter = 0;
let tieCounter = 0;
let lossCounter = 0;

function updateCounters(result) {
    if (result == "win") {
        winCounter += 1;
        document.getElementById("computer-icon").src = "images/computer-sad.png";
        document.getElementById("win-counter").innerHTML = "Wins: <b>" + winCounter + "</b>";
        endGameCheck();
    }
    else if (result == "tie") {
        tieCounter += 1;
        document.getElementById("computer-icon").src = "images/computer-neutral.png";
        document.getElementById("tie-counter").innerHTML = "Ties: <b>" + tieCounter + "</b>";
        endGameCheck();
    }
    else if (result == "loss") {
        lossCounter += 1;
        document.getElementById("computer-icon").src = "images/computer-happy.png";
        document.getElementById("loss-counter").innerHTML = "Losses: <b>" + lossCounter + "</b>";
        endGameCheck();
    }
    else {
        console.log("error");
    }
}

function endGameCheck() {
    if (winCounter == 5) {
        document.getElementById("computer-icon").src = "images/computer-lost-game.png";
        alert("YOU WON??? OK just please don't crash my spaceship; my dad will be so mad... I want a redo!");
        location.reload();
    }
    else if (lossCounter == 5) {
        document.getElementById("computer-icon").src = "images/computer-won-game.png";
        alert("YOU LOSE!!! Please stay calm while your consciousness is being copied... Actually, multiple copies are useful... Wanna play again?")
        location.reload();
    }
    else {
        return;
    }
}

function computerChoice() {
    let randomNumber = Math.floor((Math.random()* 3) + 1);
    updateComputerHand(randomNumber);
    return randomNumber;
    // 1 == rock, 2 == paper, 3 == scissors
}

function updateComputerHand(randomNumber) {
    if (randomNumber == 1) {
        return document.getElementById("computer-hand").src = "images/rock.png";
    }
    else if (randomNumber == 2) {
        return document.getElementById("computer-hand").src = "images/paper.png";
    }
    else if (randomNumber == 3) {
        return document.getElementById("computer-hand").src = "images/scissors.png";
    }
    else {
        console.log("error");
    }
}

function updateUserHand(choice) {
    if (choice == ('rock')) {
        return document.getElementById("user-hand").src = "images/rock.png";
    }
    else if (choice == ('paper')) {
        return document.getElementById("user-hand").src = "images/paper.png";
    }
    else if (choice == ('scissors')) {
        return document.getElementById("user-hand").src = "images/scissors.png";
    }
    else {
        console.log("error");
    }
}

function userChoseRock() {
    let computerChose = computerChoice();
    if (computerChose == 1) {
        updateCounters("tie");
        return document.getElementById("notifyResults").innerHTML =
                "You chose rock and I chose rock!<br>Those are the same!<br>It's a tie!";
    }
    else if (computerChose == 2) {
        updateCounters("loss");
        return document.getElementById("notifyResults").innerHTML =
                "You chose rock and I chose paper!<br>Paper covers rock!<br>You lose!";
    }
    else if (computerChose == 3) {
        updateCounters("win");
        return document.getElementById("notifyResults").innerHTML =
                "You chose rock and I chose scissors!<br>Rock smashes scissors!<br>You win!";
    }
    else {
        alert("Oops! Something went wrong. :(");
    }
}

function userChosePaper() {
    let computerChose = computerChoice();
    if (computerChose == 1) {
        updateCounters("win");
        return document.getElementById("notifyResults").innerHTML =
                "You chose paper and I chose rock!<br>Paper covers rock!<br>You win!";
    }
    else if (computerChose == 2) {
        updateCounters("tie");
        return document.getElementById("notifyResults").innerHTML =
                "You chose paper and I chose paper!<br>Those are the same!<br>It's a tie!";
    }
    else if (computerChose == 3) {
        updateCounters("loss");
        return document.getElementById("notifyResults").innerHTML =
                "You chose paper and I chose scissors!<br>Scissors cut paper!<br>You lose!";
    }
    else {
        alert("Oops! Something went wrong. :(");
    }
}

function userChoseScissors() {
    let computerChose = computerChoice();
    if (computerChose == 1) {
        updateCounters("loss");
        return document.getElementById("notifyResults").innerHTML =
                "You chose scissors and I chose rock!<br>Rock smashes scissors!<br>You lose!";
    }
    else if (computerChose == 2) {
        updateCounters("win");
        return document.getElementById("notifyResults").innerHTML =
                "You chose scissors and I chose paper!<br>Scissors cut paper!<br>You win!";
    }
    else if (computerChose == 3) {
        updateCounters("tie");
        return document.getElementById("notifyResults").innerHTML =
                "You chose scissors and I chose scissors!<br>Those are the same!<br>It's a tie!";
    }
    else {
        alert("Oops! Something went wrong. :(");
    }
}

