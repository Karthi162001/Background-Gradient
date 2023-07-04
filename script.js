var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function background_gradient (){
    body.style.background = 
    `linear-gradient(to right,${color1.value}, ${color2.value})`; 
    
    css.textContent = `${body.style.background};`;
    
}



color1.addEventListener("input",background_gradient)

color2.addEventListener("input",background_gradient)
