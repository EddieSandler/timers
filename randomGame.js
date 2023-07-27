
function randomGame(){
  let count = 0
  getRandomNum()

 let  idVar = setInterval(() => {
  getRandomNum()
  }, 1000);

function getRandomNum(){
  const randomNum=Math.random()
  console.log(randomNum)
  count++
  if(randomNum >.75){
    myStopFunction()
 }

}
function myStopFunction() {
  console.log(` It took ${count} attempts to exceed .75`)
  clearInterval(idVar);
}

}


randomGame()


//Write a function called randomGame that selects a random number between 0
//and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter.
//If the number is greater than .75, stop the timer and
//console.log the number of tries it took before we found a number greater than .75.

// function randomGame(){
// let count =0


// let timerId=setInterval(function(){ //create a timer id set to setInterval method
//   const randomNum=Math.random()  //callback function will generate a random number between 0 and 1
//   console.log(randomNum)
//increment counter
  // count++
    //create conditional if num >.75 clearTimeout
  // if(randomNum>.75){
  //   clearInterval(timerId)
  //   //return nuber of tries before .75 was selected
  // console.log( `it took ${count} tries to exceed .75`)
  // return count

//   }

// },1000)


// }
// randomGame()


