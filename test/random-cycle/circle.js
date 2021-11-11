let circle = document.getElementById('random');


const randomColors = () =>{
    colors = Math.floor(Math.random()*16777215).toString(16);
    circle.style.backgroundColor = "#" + colors;
}

circle.addEventListener('click', randomColors);

let p = document.createElement('p');
p.innerHTML = "This is a pure DOM manipulation.";

document.body.appendChild(p);