const output = document.querySelector('.output');
let game = {x:50, y:50, speed:5, ele:null};
const keyz = {ArrowRight: false, ArrowLeft:false,ArrowUp:false,ArrowDown:false}
game.ele = maker();

let move = window.requestAnimationFrame(updatePosition);
document.addEventListener('keydown', (e) =>{
    console.log(e.key);
    if(e.code in keyz){keyz[e.code] = true;}
})



document.addEventListener('keyup', (e) =>{
    if(e.code in keyz){keyz[e.code] = false;}
})

function updatePosition(){
    let domRect = output.getBoundingClientRect();
    // console.log(domRect);
    if(keyz.ArrowRight && game.x < (domRect.right - 30)){
        game.x += game.speed;
    }
    
    if(keyz.ArrowLeft && game.x > domRect.left){
        game.x -= game.speed;
    }

    if(keyz.ArrowDown && game.y < (domRect.bottom - 30)){
        game.y += game.speed;
    }

    if(keyz.ArrowUp && game.y > domRect.top){
        game.y -= game.speed;
    }




    game.ele.style.left = game.x + 'px';
    game.ele.style.top = game.y + 'px';

    move = window.requestAnimationFrame(updatePosition)

}

function maker(){
    const el = document.createElement('div');
    el.classList.add('box');
    output.append(el);
    el.style.left = game.x + 'px';
    el.style.top = game.y + 'px';
    
    el.style.background = '#' +Math.random().toString(16).substr(2,6);

    el.addEventListener('click', (e)=>{
        game.ele = maker();
    },{once:true})
    return el;
}