let bodyElement = document.querySelector('body');
let paraElement = document.querySelector('.message');

function dynamicClone(){
    let clonedText = paraElement.cloneNode(true);
    bodyElement.appendChild(clonedText);
};

// setInterval(dynamicClone, 1000);