const logoDOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger');

function hamburgerClick() {
    if (logoDOM.classList.contains('big')) {
        logoDOM.classList.remove('big');
    } else {
        logoDOM.classList.add('big');
    }
}

hamburgerDOM.addEventListener('click', hamburgerClick);