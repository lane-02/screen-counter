// document.getElementById("count-el").textContent=5

// let myAge = 20

//console.log(myAge)
// NOTE JAVASCRIPT RUNS THE CODE FROM THE TOP
// javascript mathematical operation
// let myAge = 20

// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge) 


// incrementing in javascript


// let count = 5

// count = count + 1

// console.log(count)


// let bonusPoint = 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint * 2
// console.log(bonusPoint)

// bonusPoint = bonusPoint / 4
// console.log(bonusPoint)

// bonusPoint =bonusPoint + 45
// console.log(bonusPoint)


// function increment() {
//     console.log("The Button Was Clicked")
// }

// function countDown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countDown()
// countDown()

// let lap1 = 34

// let lap2 = 33

// let lap3 = 36

// let totalLap = lap1 + lap2 + lap3

// function totalLapTime() {
//     let totalLap = lap1 + lap2 + lap3
//     console.log(totalLap)
// }
// console.log(totalLap)
// totalLapTime()  

// let lapsCompleted = 0

// function complete() {
//     lapsCompleted = lapsCompleted + 1
    
//     console.log(lapsCompleted)
// }
// console.log(lapsCompleted)
// complete()
// complete()
// complete()
// console.log(lapsCompleted)

let saveEl = document.getElementById("save-el")
 let countEl = document.getElementById("count-el")


 let count = 0

 function increment() {
     count += 1
     countEl.innerText = count
     console.log(count)
 }

// // increment()
// // increment()
// // console.log(count)


 function save() {
    let saved = count + " - " 
    saveEl.textContent += saved
     countEl.textContent = 0
     count = 0
    }

// let userName = "Lane"

// let message = "You have three new notifications"

// console.log(userName + ", " + message + " !")


// let messageToUser = userName + ", " + message + " !"

// console.log(messageToUser)


// let name = "Lane"

// let greeting = "Hi, My Name Is "
 
// let myGreeting = greeting + name

// console.log(myGreeting)

// console.log(4 + 5)// = 9

// console.log("2" + "4")// = 24

// console.log("5" + 1)// = 51

// console.log(100 + "100")// = 100100



// let welcomeEl = document.getElementById("welcome-el")

// let name = "Lane"

// let greeting = "Welcome Back"

// welcomeEl.innerText = greeting + name 


// welcomeEl.innerText = welcomeEl.innerText + "👋"
// welcomeEl.innerText += "👋"

