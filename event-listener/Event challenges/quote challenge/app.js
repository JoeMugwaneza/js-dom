let quotes = document.getElementById('quotes');

quotes.addEventListener('click', removeQuote);

function removeQuote(e){
    let target = e.target;

    if(target.className != 'remove'){
        return;
    } else {
        target.parentElement.remove();
    }
}