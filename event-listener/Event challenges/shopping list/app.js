let submit = document.getElementById('submit');

let form = document.getElementById('form');
let itemsList = document.getElementById('items-list');

submit.addEventListener('click', submitForm);

// Create and add a shopping list
function submitForm(){
    let newItem = form.value;

    // creating all necessary element to attach our new added chopping list
    let p = document.createElement('p');
    let button = document.createElement('button');
    let div = document.createElement('div');

    // adding created item class to the div for styling purpose
    div.className += " items";
    p.innerHTML = newItem;
    button.innerHTML = "delete";
    button.className += "remove";


    itemsList.appendChild(div); 
    div.append(p, button);
}

// delete and remove a shopping list

let items = document.getElementById('items-list');

items.addEventListener('click', removeItem);

function removeItem(e){
    let target = e.target

    if(target.className != "remove"){
        return;
    } else {
        target.parentElement.remove();
    }

}


// hide shopping list
// listen to checkbox (if checked or not) and add hide class to toggle the shopping list
let checkbox = document.querySelector('input[type="checkbox"]');
let hiddenItems = document.getElementsByClassName('items');

checkbox.addEventListener('change', function() {
    if (this.checked) {

        for (let newClass of hiddenItems){
            newClass.classList.add('hide');
        }
    } else{
        for (let newClass of hiddenItems){
            newClass.classList.remove('hide');
        }
    }
  });