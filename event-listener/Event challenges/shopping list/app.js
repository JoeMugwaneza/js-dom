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
    if(form.value != ""){
        p.innerHTML = newItem;
    } else {
        return;
    }
    
    form.value = "";
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

//   SEARCH

let search = document.getElementById("site-search");
search.addEventListener('keyup', searchQuery);

function searchQuery(){
    // STORE ARRAY OF NAMES OF GROCERY LIST 

    let groceries  = document.querySelectorAll(".items p");
    let groceriesArray = Array.from(groceries, p => p.textContent.toLowerCase());

    // deal with case sensitivity in search query

    let searchText = search.value.toLowerCase()

    // filter and display only groceries list where search querry matches character of groceriesArray

    groceriesArray.forEach(groceryName => {
        if(groceryName){}

    });




    
}