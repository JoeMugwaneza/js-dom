let image = document.getElementsByTagName('img')[0];
let clicked = document.getElementById('clicked');

image.addEventListener('click', () =>{
    let p = document.createElement('p');
    p.innerHTML = "I've been clicked!";
    clicked.appendChild(p);
})
