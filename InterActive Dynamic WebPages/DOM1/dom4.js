const ulList = document.querySelector('ul');


for (let i = 0; i <10; i++){
    let newLi = document.createElement('li');
    newLi.innerText = `${i + 4}`;
    ulList.append(newLi);
};

const liList = document.querySelectorAll('li');
console.log(liList);

ulList.childNodes.forEach((val) =>{
    console.log(val);
})