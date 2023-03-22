// You should use setInterval.
// - The hand should move around the clock every second and should complete a full revolution in 60 seconds.
// - You should adjust the rotation of the hand using the transform property as demonstrated in `main.js`. 

//Main task
// const hand = document.querySelector(".hand");
// let degree = 0 //starts on the hour
// function incrementHand () {
//     degree += 360/60 // everytime the set interval runs every second, the hand position will increment by 6 degrees
//     hand.style.transform = `rotate(${degree}deg)`; 

// }

//setInterval(incrementHand, 1000)

//🔍 HINT: THis is an example of how to rotate the hand!
//function that increments every second -1000ms
//stop interval 
//create a variable 
//create a function to stop the increment
//add event listener

//Use date object
const hand = document.querySelector(".hand");
function runClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360);
  hand.style.transform = `rotate(${secondsDegrees}deg)`;
}
setInterval(runClock, 1000);