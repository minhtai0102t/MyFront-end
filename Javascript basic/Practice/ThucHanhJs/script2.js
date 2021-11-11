var currentDay = new Date();
var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

function getCurrentDayOfWeek(){
    console.log("Today is: " + days[currentDay.getDay()]);
}
// getCurrentDayOfWeek();

function getTime(){
    var currentDay2 = new Date();
    let hours = currentDay2.getHours();
    let minutes = currentDay2.getMinutes();
    let seconds = currentDay2.getSeconds();
    let period = "PM";
    if(hours > 12){
        hours = hours - 12;
    }
    else{
        period = "AM";
    }
    console.log("Current time is: " + hours + period + ": " + minutes + ":" + seconds)
}

function addZero(picked){
    picked = picked.toString();
    return picked.length < 2?"0"+picked : picked;
}
function formatDay(){
    let month = addZero(currentDay.getMonth());
    let day = addZero(currentDay.getDate());
    let year = currentDay.getFullYear();
    console.log(day + " " + month + " " + year);
}

function pOfTriangle(a,b,c){
    return (a+b+c)/2;
}

function areaOfTriangle(a,b,c){
    var p = pOfTriangle(a,b,c);
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}
function printAreaOfTriangle(){
    Math.toFi
    console.log(areaOfTriangle(5,6,7).toFixed());
}
function getDayToNoel(){
    var result = (12 - currentDay.getMonth())*30 - currentDay.getDate()  + 25;
    return result;
}
function printDayToNoel(){

    console.log(getDayToNoel());
}


// getTime();
// setInterval(() => {
//     getTime();
// },1000);