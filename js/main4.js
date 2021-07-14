const h1DOM = document.querySelector("h1");
console.log(h1DOM);
const allIngridients = document.querySelectorAll("li");
console.log(allIngridients);
h1DOM.innerText = "Zuikio darzas";

for (let i = 0; i < allIngridients.length; i++) {
    //Susirandame i-taji elementa
    const item = allIngridients[i];
    //Susirandame item value (Name)
    const itemName = item;
    //Pakeičiame tekstą
    itemName.innerText = "Israuta darzove";
    //Žinome su kelintu nariu dirbame
    console.log(i);
    console.log(item);
    console.log(itemName);
}