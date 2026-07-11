const caixa = document.querySelector('#caixa');
const btnCor = document.querySelector('#btn');
const btnToggle = document.querySelector('#btn-toggle');
const textoCaixa = document.querySelector('#texto-caixa');

function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

btnCor.addEventListener('click', () => {
    caixa.style.backgroundColor = gerarCorAleatoria();
});

caixa.addEventListener('mouseover', () => {
    caixa.style.width = '250px';
    caixa.style.height = '250px';
    caixa.style.border = '5px solid #ffcc00';
});

caixa.addEventListener('mouseout', () => {
    caixa.style.width = '200px';
    caixa.style.height = '200px';
    caixa.style.border = '2px solid transparent';
});

