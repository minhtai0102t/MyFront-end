const myText = "Have a great day with your love, stay safe!";

var index = 0;
function writeText(){
    document.body.innerText = myText.slice(0,index);
    index++;

    if(index > myText.length){
        index = 0;
    }
}

setInterval(writeText,100);