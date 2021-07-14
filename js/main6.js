const logoDOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger');
const navDOM = document.querySelector("nav");
console.log(logoDOM);
console.log(hamburgerDOM);
console.log(navDOM);

function hamburgerClick() {
    if (logoDOM.classList.contains('big') & navDOM.classList.contains('visible')) {
        logoDOM.classList.remove('big') & navDOM.classList.remove('visible');
    } else {
        logoDOM.classList.add('big') & navDOM.classList.add('visible');
    }
}

hamburgerDOM.addEventListener('click', hamburgerClick);