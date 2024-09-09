// Write your code here
// if active lightbulb on
let select1 = document.querySelector("#lightbulb1");
let select2 = document.querySelector("#lightbulb2");
let select3 = document.querySelector("#lightbulb3");

let title = document.querySelector(".subtitle")

let count = 0;

select1.addEventListener("click", function(){
    count++;
    title = "You've clicked the lights "+ count+" times"

    select1.classList.toggle(".item.lightbulb.active");

}) 

