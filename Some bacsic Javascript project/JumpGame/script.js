var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}
function sit(){
    character.classList.add("dodge");
    setTimeout(function(){
        character.classList.remove("dodge");
    },500)
}
document.addEventListener("keydown", event =>{
    if(event.key == "ArrowUp"){
        jump();
    }
})
document.addEventListener("keydown", event =>{
    if(event.key=="ArrowDown"){
        sit();
    }
})
