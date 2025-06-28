// Ejercicio 3

const select1 = document.querySelector('#select1');
const select2 = document.querySelector('#select2');
const select3 = document.querySelector('#select3');
const buttonCheck = document.querySelector('#button');
const message = document.querySelector('#message');

const PASS_1= '995';
const PASS_2 = '754';

buttonCheck.addEventListener('click', () => {
    const s1 = select1.value;
    const s2 = select2.value;
    const s3 = select3.value;

    const entererPass = s1 + s2 + s3;

    if (entererPass === PASS_1) {
        message.classList.add('text-green-800');
        message.classList.remove('text-red-800');
        message.textContent = `Password 1 correcto`;
    } else if (entererPass === PASS_2) {
        message.classList.remove('text-red-800');
        message.classList.add('text-green-800');
        message.textContent = `Password 2 correcto`;
    } else {
        message.classList.remove('text-green-800');
        message.classList.add('text-red-800');
        message.textContent = `Password incorrecto`;
    }    
});
