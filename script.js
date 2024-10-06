// Write your code here
// if active lightbulb on
let select1 = document.querySelector("#lightbulb1");
let select2 = document.querySelector("#lightbulb2");
let select3 = document.querySelector("#lightbulb3");

let title = document.querySelector(".subtitle")

let count = 0;

select1.addEventListener("click", function(event){
    count++;
    title.textContent = "You've clicked the lights "+ count +" times"
    let element1 = document.getElementById("lightbulb1");
    element1.classList.toggle("active");

}) 
select2.addEventListener("click", function(event){
    count++;
    title.textContent = "You've clicked the lights "+ count +" times"
    const element2 = document.getElementById("lightbulb2");

    element2.classList.toggle("active");

}) 
select3.addEventListener("click", function(event){
    count++;
    title.textContent= "You've clicked the lights "+ count +" times"
    const element3 = document.getElementById("lightbulb3");

    element3.classList.toggle("active");

}) 

