var userscore = 0;
var compscore = 0;

var options = document.querySelectorAll(".option");
var endmsg = document.querySelector(".end-msg");
var button = document.querySelector("#restart-btn");

var userScorePara = document.querySelector("#user-score");
var compScorePara = document.querySelector("#comp-score");

//onclicking button set the score to zero
button.addEventListener("click", ()=>{
    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
    endmsg.innerText = "Play your turn!";
    endmsg.style.backgroundColor = "antiquewhite";
});

// Startting the playGame function after getting the user choice
options.forEach((option) => {
    option.addEventListener("click", () => {
        const userchoice = option.getAttribute("id");
        button.style.visibility = "visible";
        playGame(userchoice);
    })
});

//generating the computer option
const genCompOption = () => {
    const choices = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return choices[randidx];
};

//declaring the function for draw
const drawGame = () => {
    endmsg.innerText = "Game was draw. Play again!";
    endmsg.style.backgroundColor = "antiquewhite";
};

//declaring the playGame function
const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompOption();
  
    if (userChoice === compChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
};


const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
      userscore++;
      userScorePara.innerText = userscore;
      endmsg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
      endmsg.style.backgroundColor = "green";
    } else {
      compscore++;
      compScorePara.innerText = compscore;
      endmsg.innerText = `You lost. ${compChoice} beats your ${userchoice}`;
      endmsg.style.backgroundColor = "red";
    }
  };