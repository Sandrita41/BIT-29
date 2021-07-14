const h1DOM = document.querySelector("h1");
//Ar galima į quer'į kelis selektorius sudėti
//Kaip konkrečiam h1 uždėti class
h1DOM.classList.add("simba");

const allIngridientsDOM = document.querySelectorAll("li");
console.log(allIngridientsDOM);
for (let i = 0; i < allIngridientsDOM.length; i++) {
    const item = allIngridientsDOM[i];
    console.log(item);
    item.classList.add("darzoves");
}