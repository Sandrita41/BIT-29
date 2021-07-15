const minusBtnDOM = document.querySelector(".minus");
const plusBtnDOM = document.querySelector(".plus");
const resetBtnDOM = document.querySelector(".reset");
const resultDOM = document.querySelector(".number");

function clickButtons() {
    resultDOM = 0;
    if (plusBtnDOM.classList.contains('plus')) {
        //padidinti kintamąjį +1
        resultDOM += resultDOM;
        return resultDOM;
    }
    if (minusBtnDOM.classList.contains('minus')) {
        resultDOM -= resultDOM;
        return resultDOM;
    }
    /*if (resetBtnDOM.classList.contains('reset')) {
        resetBtnDOM.classList.remove;
    }*/
}

plusBtnDOM.addEventListener('click', clickButtons);
minusBtnDOM.addEventListener('click', clickButtons);