const daysElm = document.querySelector("#days");
const hoursElm = document.querySelector("#hours");
const minutesElm = document.querySelector("#minutes");
const secondsElm = document.querySelector("#seconds");
const panelElm = document.querySelector(".panel"); 

const enDate = new Date("December 25 2022");
const enDateInMs = enDate.getTime();

const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hoursInMs = 60 * minuteInMs;
const dayInMs = 24 * hoursInMs;

const counterTime = setInterval(timer,1000);

function timer() {
  //date Natale

  const nowInMs = new Date().getTime();
  const diff = enDateInMs - nowInMs;

  if(diff > 0){
    daysElm.innerHTML = Math.floor(diff / dayInMs);
    hoursElm.innerHTML = Math.floor((diff % dayInMs) / hoursInMs);
    minutesElm.innerHTML = Math.floor((diff % hoursInMs) / minuteInMs);
    secondsElm.innerHTML = Math.floor((diff % minuteInMs) / secondInMs);
  }else{
    clearInterval(timer)
    panelElm.innerHTML = "<h1>Buon Natale!</h1>";
  }

 
}
