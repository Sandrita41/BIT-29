const h1DOM = document.querySelector("h1");
const pDOM = document.querySelector("p");
const aDOM = document.querySelector("a");

console.log(h1DOM);
console.log(pDOM);
console.log(aDOM);

//Ar galima į quer'į kelis selektorius sudėti
h1DOM.innerText = "Labas vakaras!";
pDOM.innerHTML = "Šiandien gražus oras!"
aDOM.innerHTML = "Spausk mane!"