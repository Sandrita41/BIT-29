const h1DOM = document.querySelector("h1");
console.log(h1DOM);
const allIngridients = document.querySelectorAll("li");
console.log(allIngridients);
h1DOM.innerText = "Zuikio darzas";

for (let i = 0; i < allIngridients.length; i++) {
    const item = allIngridients[i];
    const itemName = item.innerText("Israuta darzove");
    //Žinome su kelintu nariu dirbame
    console.log(i);
    console.log(item);
    console.log(itemName);
}