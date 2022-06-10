

// moving box

const numEles = [];
const keyz = {ArrowRight:false,ArrowLeft:false,ArrowDown:false,ArrowUp:false};

const box = document.querySelector(".box");
const h1Maker = document.querySelector("h1");
const gameBoard = document.querySelector(".game");
const dim = gameBoard.getBoundingClientRect();
const game = {size:40,x:dim.left,y:dim.top,speed:10,counter:0,max:10};

box.style.position = 'absolute';
box.style.border = '1px solid black';
box.style.width = game.size + 'px';
box.style.height = game.size + 'px';
box.style.top = game.y + 'px';
box.style.backgroundColor = 'red';

// smooth movement of the box

let move = window.requestAnimationFrame(updatePosition);

document.addEventListener('keydown', (e) =>{
    if(e.code in keyz){
        keyz[e.code] = true;
    }
});

document.addEventListener('keyup', (e) =>{
    if(e.code in keyz){
        keyz[e.code] = false;
    }
});


h1Maker.addEventListener('click', (e) =>{
    const el = maker('div');
    
    // adding random background colors to the newly created div
    el.style.backgroundColor = 'rgb('+randNum(0,256)+','+randNum(0,256)+','+randNum(0,256)+','+randNum(0,256)+')';
    

});

// checking the colluption
function isCollide(aEl,bEl){
    // console.log("Checking");
    let a = aEl.getBoundingClientRect();
    let b = bEl.getBoundingClientRect();

    let overTop = !((a.right < b.left) || (a.left > b.right)||(a.bottom < b.top) ||(a.top > b.bottom));

    return overTop;
};

function maker(eleType){
    game.counter++;
    const ele = document.createElement('div');
    ele.textContent = game.counter;
    ele.style.backgroundColor = 'rgb('+randNum(0,255)+','+randNum(0,255)+','+randNum(0,255)+','+randNum(0,255)+')';
    ele.classList.add('enemy');
    numEles.push(ele);
    ele.style.left = randNum(dim.left,dim.right - game.size) + "px";
    ele.style.top = randNum(dim.top,dim.bottom - game.size) + "px";

    ele.dirX = randNum(1,2);
    ele.addEventListener('click', (e) =>{
        // //console.log(ele.offsetLeft);
        // //console.log(ele.offsetTop);
        // //console.log(numEles);
        isCollide(ele, box);
    })

    return gameBoard.appendChild(ele);
}

function randNum(min,max){
    return Math.floor(Math.random() * (max-min)+min);
}


function updatePosition(){
    if(keyz.ArrowLeft && game.x > dim.left){
       game.x -= game.speed; 
    } else if(keyz.ArrowRight && game.x < (dim.right - game.size - game.speed)){
        game.x += game.speed; 
     }
     if(keyz.ArrowUp && game.y > dim.top){
        game.y -= game.speed; 
     } else if(keyz.ArrowDown && game.y < (dim.bottom - game.size - game.speed)){
         game.y += game.speed; 
      }
    box.style.left = game.x + 'px';
    box.style.top = game.y + 'px';

    if(randNum(0,40) == 10 && game.max >= numEles.length){
        const newEle = maker('div');
    }

    // opportunity to move enemies
    numEles.forEach((enemy, index) =>{
        let x = enemy.offsetLeft;
        let y = enemy.offsetTop;
        if(x > (dim.right - 30) || x < 0){
            enemy.dirX *= - 1
        };

        x += enemy.dirX;
        if(isCollide(enemy,box)){
            console.log("hit");
            enemy.remove();
            numEles.splice(index,1);
        }
    
        enemy.style.left = x + "px";
    });

    move = window.requestAnimationFrame(updatePosition);
}
// document.addEventListener('keydown', (e) =>{
//     //console.log(e.code);
//     if(e.code == "ArrowLeft"){
//         game.x -= game.speed;
//         updatePosition(); 
//     }
//     if(e.code == "ArrowRight"){
//         game.x += game.speed;
//         updatePosition(); 
//     } 
//     if(e.code == "ArrowUp"){
//         game.y -= game.speed;
//         updatePosition(); 
//     } 
//     if(e.code == "ArrowDown"){
//         game.y += game.speed;
//         updatePosition(); 
//     }
// })

// for (let i = 0; i < 50; i++){
//     game.x += 10;
//     box.style.left = game.x + 'px';
//     //console.log(game);
// }

// REGARDING DYNAMIC COLORS, BACKGROUND COLOR AND PADDING

// const h1 = document.querySelector('h1');

// h1.style.textAlign = 'center';


// h1.addEventListener('click', (e) =>{
    // let randColor1 = 'rgba('+randColorGen()+','+randColorGen()+','+randColorGen()+',0.5)';
//     h1.style.backgroundColor = randColor1;

//     let randColor2 = 'rgb('+randColorGen()+','+randColorGen()+','+randColorGen()+')';
//     h1.style.color = randColor2;

//     // random padding

//     h1.style.padding = (randColorGen()/10) +'px';

// });

// function randColorGen(){
//     const randNumber = Math.floor(Math.random()*256);
//     return randNumber;
// }