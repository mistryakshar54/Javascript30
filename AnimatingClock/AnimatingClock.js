const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute"); 
const secondsHand = document.getElementById("second");
const digitaltime = document.getElementById("digitaltime");

setInterval(setTime, 1000);
function setTime() {
    const nowTime = new Date();
    const sec = nowTime.getSeconds();
    const min = nowTime.getMinutes();
    const hrs = nowTime.getHours();
    
    const currentSeconds = ((sec/60)*360 + 90)  ;
    const currentMins = ((min/60)*360)+90;
    const currentHours = ((hrs/12)*360)+90;
    hourHand.style.transform = "rotate("+currentHours+"deg)";
    minuteHand.style.transform = "rotate(" + currentMins + "deg)";
    secondsHand.style.transform = "rotate(" + currentSeconds + "deg)";
    digitaltime.innerText =
      hrs - 12 +
      " : " +
      min +
      " : " +
      ((sec < 10) ? "0" : "")+sec +
      " " +
      (nowTime.getHours() > 12 ? "PM" : "AM" );
}