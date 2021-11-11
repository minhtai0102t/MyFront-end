const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    document.body.style.background = randomBg();
})


function randomBg(){
    return `hsl(${Math.floor(Math.random()*360)},3000%,50%)`;
}

