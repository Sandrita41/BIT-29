const allIngridientsDOM = document.querySelectorAll("li");
console.log(allIngridientsDOM);

const newArray = [];
for (let i = 0; i < allIngridientsDOM.length; i++) {
    const item = allIngridientsDOM[i];
    console.log(item);
    const itemName = item.innerText;
    const nameInUppercase = itemName.toUpperCase();
    console.log(nameInUppercase);
    newArray.push(nameInUppercase);
}
console.log(newArray);