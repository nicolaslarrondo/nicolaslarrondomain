

var h1 = document.querySelector("h1");
var title = document.querySelector("#title");
var logoImg = document.querySelector(".navimg");
var h3 = document.querySelector("h1");
h3.innerText = "new title";

var petImg = document.querySelector("#pet-img");
function switchimg() {
petImg.src = "dog.jog";
}

function switchimg(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
}

function setactive(element) {
    if(element.classList.contains("dark-mode")) {
    element.innerText = "cambiar al modo claro";
    element.classList.remove("dark-mode");
    } else {
    element.innerText = "cambiar al modo oscuro"
   
    element.classList.add("dark-mode");
    }
}