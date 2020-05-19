let dieRolls = []

let userInput = document.querySelector("#userInput")
let diceNum = document.querySelector("#diceNum");


diceNum.addEventListener('click', function () {
    let numberOfDice = userInput.value
    console.log(userInput.value)
    let counter = 0
    while (counter < numberOfDice) {
        let randomRoll = Math.floor(Math.random() * 6) + 1;
        console.log('You rolled a ' + randomRoll);
        dieRolls.push(randomRoll)
        counter += 1
    }
    console.log(dieRolls)
    let index = 0
    let sumDice = 0
    while (index < dieRolls.length) {
        console.log(dieRolls[index])
        sumDice += dieRolls[index]
        index += 1
    }
    console.log(sumDice)

    let totalsumDice = sumDice
    document.getElementById("table").innerHTML = sumDice;
})

allRolls.addEventListener('click', function () {
    let index = 0
    while (index < dieRolls.length) {
        let step = dieRolls[index]
        let stepElementString = '<li>' + step + '</li>'
        allRolls.innerHTML += stepElementString
        console.log('loopworks', step)
        index += 1
    }
})
// reset button

let counter3 = document.querySelector("#num-resets");
let resetbutton = document.querySelector("#reset-button"); 
// let totalsumDice = 0
let resetButton = 0
resetbutton.addEventListener("click", function() {
    console.log("+ reset clicked");
    let newCounterValue = Number(counter3.innerHTML) + 1;
    counter3.innerHTML = newCounterValue;
     let dieRolls = []
   
})
//     let userInput = 0;
//    
//     let totalsumDice = 0;
   

