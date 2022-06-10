const output = document.querySelector(".output");

const ul = document.querySelector("ul");
const eles = ul.querySelectorAll('li')
const btn = document.querySelector('button');

let counter = 0;

eles.forEach((li) =>{
    li.addEventListener('click', updateEle);
    adder(li);
});

btn.addEventListener('click', addListItem);


function updateEle(e){
    const el = e.target;
    const span = el.querySelector('span');
    el.counter++;
    span.textContent = el.counter;
    if(el.classList.contains('red')){
        el.classList.add('box');
    }
    el.classList.toggle('red');
}


function addListItem(){
    const li = document.createElement('li');
    li.textContent = `New Item List`;
    ul.append(li);
    adder(li);
}

function adder(li){
    counter++;
    li.counter = 0;
    const span = document.createElement('span');
    span.textContent = ` ${li.counter}`;
    li.textContent = `New List Item `;
    li.append(span);
    li.addEventListener('click', updateEle);
    console.log(li);

}

// adding colors

// ul.addEventListener('click', (e) =>{
//     const el = e.target

//     if(el.textContent === "One"){
//         el.classList.toggle('red');

//         if(el.classList.contains('red')){
//             el.classList.toggle('box');
//         }
//     }

//     if(el.textContent == "Two"){
//         el.classList.toggle('box');
//     }

//     if(el.textContent == "Three"){
//         el.classList.toggle('blue');
//     }
// });