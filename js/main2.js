const h1DOM = document.querySelector("h1");
const pDOM = document.querySelector("p");
const aDOM = document.querySelector("a");

console.log(h1DOM);
console.log(pDOM);
console.log(aDOM);

//Ar galima į quer'į kelis selektorius sudėti
h1DOM.innerText = "Labas vakaras!";
//Kaip konkrečiam h1 uždėti class
h1DOM.classList.add("simba");
pDOM.innerHTML = "Šiandien gražus oras!"
aDOM.innerHTML = "Spausk mane!"

const allIngridientsDOM = document.querySelectorAll("li");
console.log(allIngridientsDOM);
for (let i = 0; i < allIngridientsDOM.length; i++) {
    const item = allIngridientsDOM[i];
    console.log(item);
    item.classList.add("darzoves");
    const itemName = item.innerText;
    const nameInUppercase = itemName.toUpperCase();
    console.log(itemName, nameInUppercase);
    const newArray = [];
    newArray.push(nameInUppercase);
    console.log(newArray);
}