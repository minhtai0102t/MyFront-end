const tabItems = document.querySelectorAll(".tab-item");
const tabPane = document.querySelectorAll(".tab-pane");


const tabActive = document.querySelector(".tab-item.active");
const line = document.querySelector(".tabs .line");
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabItems.forEach((tab,index) => {
    const pane = tabPane[index];
    
    tab.onclick = function(){
        
        document.querySelector('.tab-item.active').classList.remove("active");
        document.querySelector(".tab-pane.active").classList.remove("active");

       line.style.left = this.offsetLeft + "px";
       line.style.width = this.offsetWidth + "px";


        pane.classList.add("active");
        this.classList.add("active");


    };

});

