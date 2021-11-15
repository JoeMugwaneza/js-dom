// grap the images
let kidImage = document.getElementsByClassName('kid')[0];
let mustache = document.getElementsByClassName('mustache')[0];

kidImage.addEventListener('click', mousePosition);

function mousePosition(e){
    mustache.style.top = `${e.clientY - 50}px`;
    mustache.style.left = `${e.clientX - 100}px`;
}