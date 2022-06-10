const outPut = document.querySelector(".output");
const el1 = document.createElement('div');
const el2 = document.createElement('h1');
outPut.append(el1);
el1.append(el2);
el2.textContent = "Hello World";

el2.style.backgroundColor = "red";


// EXAMPLE 1
const el3 = document.createElement('h2');
el3.textContent = "Prepend Element";
el1.prepend(el3);

// EXAMPLE 2
const el4 = document.createElement('h3');
el4.textContent = "Append Element";
el1.append(el4);

// EXAMPLE 3
const el5 = document.createElement('h4');
el5.textContent = "INSERT BEFORE Element";
el1.insertBefore(el4, el5);