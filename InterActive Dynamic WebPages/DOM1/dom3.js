let div = document.querySelector("#output");

// "https://dummyimage.com/200x100&text=dummyimage.com+rocks!"


let imgSrc = '//dummyimage.com/200x100';
for ( let i = 0; i < 20; i++){
    let img = document.createElement('img');
    const url = imgSrc + `/${randomColors()}/000000&text=New Image+ ${i + 1}`;
    
    img.setAttribute('src', url);
    img.classList.add('box');

    if(i%3 == 0){
        img.classList.add('red');
        img.classList.remove('box');
    }
    div.append(img);
    
}


function randomColors(){
    return Math.random().toString(16).substr(2,6);
}