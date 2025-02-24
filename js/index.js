// Exercici 1
const inputA = document.querySelector('#a');
const inputB = document.querySelector('#b');
const spanHipotenusa = document.querySelector('#hipotenusa');
const btnCalculaHipotenusa = document.querySelector('#calculaHipotenusa');
const btnNetejaEx1 = document.querySelector('#netejaEx1');

// Exercici 2
const btnLlanzaDados = document.querySelector('#lanzaDados');
const btnNetejaEx2 = document.querySelector('#netejaEx2');
const dau1Img = document.querySelector('#dau1 img');
const dau2Img = document.querySelector('#dau2 img');

// Exercici 3
const btnDarkMode = document.querySelector('#darkMode');

// EVENTS
btnCalculaHipotenusa.onclick = calculaHipotenusa;
btnNetejaEx1.onclick = netejaEx1;
btnLlanzaDados.onclick = lanzaDados;
btnNetejaEx2.onclick = netejaEx2;
btnDarkMode.onclick = toggleDarkMode;

// FUNCIONS
function calculaHipotenusa() {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        alert('Introdueix dos nombres positius.');
        return;
    }

    const hipotenusa = Math.sqrt(a ** 2 + b ** 2).toFixed(2);
    spanHipotenusa.textContent = hipotenusa;
}

function netejaEx1() {
    inputA.value = 0;
    inputB.value = 0;
    spanHipotenusa.textContent = 0;
}

let interval = null;
let num1 = 0;
let num2 = 0;

function lanzaDados() {
    if (interval) {
        clearInterval(interval);
        interval = null;
        btnLlanzaDados.textContent = 'Llança';
        btnLlanzaDados.style.backgroundColor = '';
    } else {
        interval = setInterval(() => {
            const num1 = Math.floor(Math.random() * 6) + 1;
            const num2 = Math.floor(Math.random() * 6) + 1;
            dau1Img.src = `/img/dado${num1}.svg`;
            dau2Img.src = `/img/dado${num2}.svg`;
        }, 200);
        btnLlanzaDados.textContent = 'Atura';
        btnLlanzaDados.style.backgroundColor = 'red';
    }
    const num1 = parseInt(dau1Img.src.match(/dado(\d)\.svg/)[1]);
    const num2 = parseInt(dau2Img.src.match(/dado(\d)\.svg/)[1]);
    if (num1 === num2) {
        alert('Enhorabuena');
    }
}

function netejaEx2() {
    clearInterval(interval);
    interval = null;
    dau1Img.src = './img/dado1.svg';
    dau2Img.src = './img/dado1.svg';
}


function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = btnDarkMode.querySelector('i');
}
    if (document.body.classList.toogle('dark-mode')) {
    icon.classList.remove('fa-moon') = btnDarkMode;
    icon.classList.add('fa-sun') = btnDarkMode;
    }
    else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
}
