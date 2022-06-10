let main = document.querySelector("#output");

// "https://dummyimage.com/200x100&text=dummyimage.com+rocks!"


for (let i = 0; i < 10; i++){
    main.innerHTML += "<img>";
}

const url = "//dummyimage.com/200x100";
let eles = document.querySelectorAll('img');
// console.log(eles);

eles.forEach((el, index) =>{
    const myImg = url + `/${randomColor()}/000000&text=New Image+ ${index + 1}`;
    el.setAttribute('target', '_blank');
    if(!el.getAttribute('src')){
        el.setAttribute("src", myImg);
    }
});

function randomColor(){
    return Math.random().toString(16).substr(2,6);
}