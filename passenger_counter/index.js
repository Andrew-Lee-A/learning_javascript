
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let name  = "Andrew Lee";
let greeting = "Welcome";

let count = 0;

function increment(){
    count++;
    countEl.textContent = count;
    //console.log("increment clicked");
}

function save(){
    saveEl.textContent += + count + " - ";
    count = 0;
    countEl.innerText = count;
    //console.log(countEl.innerText);
}




