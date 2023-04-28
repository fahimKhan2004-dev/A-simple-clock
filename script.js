var hour = document.getElementById("hour");
var minute = document.getElementById("minutes");
var second = document.getElementById("seconds");
var ampm = document.getElementById("ampm");


const updateClock = () => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = seconds;

    if(hours > 12){
        hours = hours - 12
        ampm = "PM"
    }
    
setInterval(updateClock, 1000);
}
updateClock();

