let animals = ['Dog', 'Cat', 'Warthog', 'Eagle', 'Lion', 'Elephant', 'Giraffe']; 
for(let animal of animals){
    let liElement = document.createElement('li');
    let ulElement = document.querySelector('ul');
    liElement.textContent = animal;
    ulElement.appendChild(liElement);
}