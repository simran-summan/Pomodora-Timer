let start = document.getElementById('start');
let stopp = document.getElementById('stop');
let reset = document.getElementById('reset');
let con = document.getElementsByClassName('container');

let breakMode = document.getElementById('break');
let pomoMode = document.getElementById('pomo');

let min = document.getElementById('min');
let sec = document.getElementById('sec');

let startTimer;

start.addEventListener('click' , function () {
   if (startTimer === undefined) {
    startTimer =  setInterval(Timer, 1000);
   }else if (stopTimer() === undefined){
      startTimer =  setInterval(Timer, 1000); 
   }
} );

stopp.addEventListener('click', stopTimer)
reset.addEventListener('click', resetTimer)
pomoMode.addEventListener('click',function(){
   resetTimer();
   document.querySelector('.container').style.backgroundColor = "rgb(91 138 141 / 69%)";
   document.body.style.backgroundColor = "rgb(55 112 116)";
})
breakMode.addEventListener('click', function(){
   document.querySelector('.container').style.backgroundColor = "rgb(173 101 101 / 74%)";
   document.body.style.backgroundColor = "rgb(137 65 65)";

    if(resetTimer() === undefined){
      min.innerText = "05"
   }
})

function Timer(){
     if (sec.innerText != 0) {
       sec.innerText--;
       if(sec.innerText < 10){
         sec.innerText = `${0}${sec.innerText}`
       }
       console.log(sec.innerText); 
    }
    else if (sec.innerText == 0 && min.innerText != 0) {
      sec.innerText= 59;
              min.innerText--; 
              if(min.innerText < 10){
               min.innerText = `${0}${min.innerText}`
              }

        console.log(min.innerText);
    }
    
   }

function stopTimer(){
   clearInterval(startTimer);
   
}

function resetTimer(){
   // if(Timer() === undefined){
   sec.innerText = "00";
   min.innerText = 25;
   stopTimer()
// }else if( breakTimer() === undefined){
//    min.innerText = "05";
//    sec.innerText = "00";
//    stopTimer();
// }
}

function breakTimer(){
   min.innerText = "05"
}
