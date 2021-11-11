const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItem = $$(".tab-item");
const tabpane = $$(".tab-pane");

const tabActive = $('.tab-item.active');
const line = $(".tabs .line")

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";
tabItem.forEach((tab,index) =>{
    const pane = tabpane[index];

     tab.onclick = function(){

       
       tabActive.classList.remove("active");
       $(".tab-pane.active").classList.remove("active");

        
       this.classList.add("active");

       pane.classList.add("active");

       line.style.left = this.offsetLeft + "px";
       line.style.width = this.offsetWidth + "px";
       
   }
})