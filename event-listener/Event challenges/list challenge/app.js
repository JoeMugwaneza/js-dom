let delegates = document.getElementById('list-challenge');
delegates.addEventListener('click', showOrHide);

function showOrHide(e){
    let target = e.target;

    if(target.tagName === "LI"){
        let urlShowOrHide = target.querySelector('ul');

        if(urlShowOrHide){
            urlShowOrHide.classList.toggle('hide');
        }
    }
}