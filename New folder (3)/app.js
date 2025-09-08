console.log("i love you");
let userScore = 0;

let compScore = 0;
const myscore =document.querySelector("#myscore");
const compscorep =document.querySelector("#compscore");

 const choice = document.querySelectorAll(".choices");
 const msg = document.querySelector("#msg");
const  gencompchoice = () => {
    const options = ["rock","paper","scissor"];
  const randidx =  Math.floor(Math.random()*3);
return  options[randidx];
}
const drawgame = () => {
   console.log("Game was draw");
   msg.innerText = "Game Draw! Play again";
   msg.style.backgroundColor="blue";
   
};
const showwinner = (userwin) => {
    if(userwin){
        userScore++;
        console.log("you win");
        msg.innerText = "You win";
        msg.style.backgroundColor = "green";
        myscore.innerText = userScore;
    } else {
        compScore++
        console.log("you loose");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
        compscorep.innerText = compScore;

        
    };
}

 const playgame = (userchoice) =>  {
    console.log("user choice is",userchoice);
const compchoice = gencompchoice();
console.log(" computer choice is ",compchoice);


if(userchoice === compchoice) {
    drawgame();

} else {
    let userwin = true;
    if(userchoice === "rock"){
        userwin= compchoice ==="paper" ? false : true;
    } else if(userchoice === "scissor"){
        userwin = compchoice === "paper" ? true : false;
    } else {
        userwin = compchoice ==="rock" ? true : false;
    }
  showwinner(userwin);  
}

 }  ;
 

 choice.forEach((choices) => {
    
    choices.addEventListener("click", () => {
        
        
        const userchoice = choices.getAttribute("id");
playgame(userchoice);
    });
});