const howToPLayTab = document.getElementById("howToPLayTab")
const gameTab = document.getElementById("gameTab")
const gameOver = document.getElementById("gameOver")
const winner = document.getElementById("winner")

const playButton = document.getElementById("playButton");
const rollButton = document.getElementById("rollButton");
const playAgainLoser = document.getElementById("playAgainLoser");
const playAgainWinner = document.getElementById("playAgainWinner");


const score = document.getElementById("score")


const dice1 = document.getElementById("Dice1")
const dice2 = document.getElementById("Dice2")
const dice3 = document.getElementById("Dice3")
const dice4 = document.getElementById("Dice4")
const dice5 = document.getElementById("Dice5")
const dice6 = document.getElementById("Dice6")
const Dice = [,dice1,dice2,dice3,dice4,dice5,dice6]


let scoreNum = 0

playButton.addEventListener("click",() =>{

    howToPLayTab.style.display= "none"
    gameTab.style.display= "block" 
    scoreNum = 0
})

const randNum =()=>{
    let digit = Math.floor(Math.random() * 6) + 1;
   return digit;
}
rollButton.addEventListener("click",() =>{
let num = randNum()
dice1.style.display= "none"
        dice2.style.display= "none"
        dice3.style.display= "none"
        dice4.style.display= "none"
        dice5.style.display= "none"
        Dice6.style.display= "none"
        Dice[num].style.display= "block"
        scoreNum = scoreNum + num
        score.textContent = `Score: ${scoreNum}`;
        setTimeout(()=>{
            
        if (num == 1){
        gameTab.style.display= "none"
        gameOver.style.display= "block"
} else if(scoreNum > 20){
        gameTab.style.display= "none"
        winner.style.display= "block" 
    }
        
        },500);


    
        

    }

    

)

playAgainLoser.addEventListener("click",() =>{
    dice1.style.display= "block"
    dice2.style.display= "none"
    dice3.style.display= "none"
    dice4.style.display= "none"
    dice5.style.display= "none"
    Dice6.style.display= "none"
    gameOver.style.display= "none"
    gameTab.style.display= "block" 
    scoreNum = 0
})
playAgainWinner.addEventListener("click",() =>{
    dice1.style.display= "block"
    dice2.style.display= "none"
    dice3.style.display= "none"
    dice4.style.display= "none"
    dice5.style.display= "none"
    Dice6.style.display= "none"
    winner.style.display= "none"
    gameTab.style.display= "block" 
    scoreNum = 0
})