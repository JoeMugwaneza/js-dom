let outcome = document.getElementById('outcome');

document.querySelector('form').addEventListener('submit', (e) =>{
    outcome.textContent = `A submit event has been fired at ${e.timeStamp}`,
    e.preventDefault();
    document.forms[0].name.value = "";
})

// time to play around with different event types

let nameText = document.querySelector('input[type="text"]');

nameText.addEventListener('input', () => {
    outcome.textContent = `The value entered is ${nameText.value}`;
})

// Focus

nameText.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = "lightblue";
    e.target.style.color = "black";
})