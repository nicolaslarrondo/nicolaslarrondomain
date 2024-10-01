

var h1 = document.querySelector("h1");
var title = document.querySelector("#title");
var logoImg = document.querySelector(".navimg");
var h3 = document.querySelector("h1");
h3.innerText = "new title";

var petImg = document.querySelector("#pet-img");
function switchImg() {
petImg.src = "dog.jog";
}

function setActive(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
}

function setActive(element) {
    if(element.classList.includes("dark-mpode")) {
    element.innerText = "cambio al modo claro";
    element.classList.remove("dark-mode");
    } else {
    element.innerText = "cambiar al modo oscuro"
    oscuro&quot;;
    element.classList.add("dark-mode");
    }
    }