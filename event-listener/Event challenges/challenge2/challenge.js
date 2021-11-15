// FIND THE IMAGE
let image = document.getElementById('img');

image.addEventListener('mousemove', testReveal);

function testReveal(e){
    let reveal = document.getElementById('display');
    let note = document.createTextNode('Hi ');
    reveal.appendChild(note);

    // create a div that will handle dot movement

    let dotDiv = document.createElement('div');
    dotDiv.className = 'dot';
    document.body.appendChild(dotDiv);

    // create a dynamic dot as per the move location

    dotDiv.style.top = `${e.clientY}px`;
    dotDiv.style.left = `${e.clientX}px`;
}