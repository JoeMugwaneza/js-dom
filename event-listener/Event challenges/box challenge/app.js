let selectedItem = null;

let gridContainer = document.getElementById('grid-container');
gridContainer.addEventListener('click', changeColor);

function changeColor(e){
    let target = e.target;
    if(target.tagName != 'DIV'){
        return;
    } else{
        highlight(target);
    }
}

function highlight(node){
    if(selectedItem !=null){
        selectedItem.classList.remove('highlight');
    }

    selectedItem = node;
    selectedItem.classList.add('highlight');
}
