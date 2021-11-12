let outcome = document.getElementById('outcome');

document.querySelector('form').addEventListener('submit', (e) =>{
    outcome.textContent = `A submit event has been fired at ${e.timeStamp}`,
    e.preventDefault();
})