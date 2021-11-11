const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')


const newYears = '1 Jan 2022';
function countdown(){
    const currentDate = new Date();
    const newYearsDate = new Date(newYears);
    
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24); 
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60)
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = format(mins);
    secondsEl.innerHTML = format(seconds);
}

function format(time){
    return time < 10?`0${time}`:time;
}


countdown();
setInterval(countdown,1000);