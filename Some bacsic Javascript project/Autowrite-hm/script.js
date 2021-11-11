const myText = "Have great day,stay safe";

var i = 0;
function writeText(){
   document.body.innerText = myText.slice(0,i);
   i++;

    if(i > myText.length){
        i = 0;
    }
}
setInterval(writeText,100);