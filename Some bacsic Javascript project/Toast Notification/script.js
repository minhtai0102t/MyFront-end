const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () =>{
    createNotification();
});

function createNotification(){
    const notif = document.createElement('div');
    notif.classList.add('toast');
    container.appendChild(notif);
    notif.innerText = "FUCKKKKKKKKKKK🤷‍♂️";
    setTimeout(() =>{
        // notif.remove();
    },2000);
}
