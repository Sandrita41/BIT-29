const h1DOM = document.querySelector("h1");
h1DOM.innerHTML = "Zuikio pomidorų daržas";
h1DOM.classList.add("pavadinimas");
const allIngridients = document.querySelectorAll("li");

for (let i = 0; i < allIngridients.length; i++) {
    //Susirandame i-taji elementa
    const item = allIngridients[i];
    item.classList.add("pomidoras");
    //Susirandame item value (Name)
    const itemName = item;
    //Pakeičiame tekstą
    itemName.innerText = "Pomidoras";
    //Žinome su kelintu nariu dirbame
    console.log(i);
    console.log(item);
    console.log(itemName);
}