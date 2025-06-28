// Ejercicio 2

const quantity1 = document.querySelector('#quantity1');
const quantity2 = document.querySelector('#quantity2');
const quantity3 = document.querySelector('#quantity3');
const buttonCheck = document.querySelector('#button');
const message = document.querySelector('#message');

const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');



quantity1.addEventListener('click', () => {
    if (quantity1.value === '0') {
        img1.classList.add('grayscale');
    } else {
        img1.classList.remove('grayscale');
    }
});

quantity2.addEventListener('click', () => {
    if (quantity2.value === '0') {
        img2.classList.add('grayscale');
    } else {
        img2.classList.remove('grayscale');
    }
});

quantity3.addEventListener('click', () => {
    if (quantity3.value === '0') {
        img3.classList.add('grayscale');
    } else {
        img3.classList.remove('grayscale');
    }
});

buttonCheck.addEventListener('click', () => {
    const q1 = Number(quantity1.value);
    const q2 = Number(quantity2.value);
    const q3 = Number(quantity3.value);

    let total = q1 + q2 + q3;

    if (total > 10) {
        message.classList.add('text-red-500');
        message.textContent = `Llevas demasiados stickers`;
    } else {
        message.classList.remove('text-red-500');
        message.textContent = `Llevas ${total} stickers`;
    }
});
