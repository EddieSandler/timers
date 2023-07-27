function countdown(num){


let timerId=setInterval(function(){

  num --
  console.log(num)
  if (num<=0){
   console.log('Done')
   clearInterval(timerId)
  }
},1000)

}
countdown(5)