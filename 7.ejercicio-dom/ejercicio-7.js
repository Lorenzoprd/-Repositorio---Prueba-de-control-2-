const body = document.querySelector('body');

body.innerHTML = `
    <button class='boton'>Añadir cuadrado</button>
    <div class='malla'>
        <div class='cuadrado'></div>
        <div class='cuadrado'></div>
        <div class='cuadrado'></div>
        <div class='cuadrado'></div>
    </div>`;

const boton = document.querySelector('.boton');
const malla = document.querySelector('.malla');
const cuadrados = document.querySelector('.cuadrado');

malla.style = `
    margin: 0 auto 0 auto;
    width: 750px;
    min-height: 750px;
    display: grid;
    grid-template-columns: auto auto auto auto ;
    grid-template-rows: auto auto auto auto ;  
`;
boton.style = `
    margin: 10vh auto auto auto;
    width: 750px;
    font-size: 3rem;
    display: block;
    background-color: #f1F6fa;
`;
function color() {
    const r = Math.floor(Math.random() * 250 + 1);
    const g = Math.floor(Math.random() * 250 + 1);
    const b = Math.floor(Math.random() * 250 + 1);
    return `rgb(${r}, ${g}, ${b})`;
}
function cambiarColor(cuadrados) {
    for (const square of cuadrados) {
        square.style = `
            background-color: ${color()};
        `;
    }

}
const addCuadrado = (i) => {
    const { target } = i;
    if (target.matches('.boton')) {
        const addDiv = document.createElement('div');
        addDiv.classList.add('cuadrado');
        malla.append(addDiv);
    }
};
boton.addEventListener('click', addCuadrado);
setInterval(function () {
    const selCuadrados = malla.querySelectorAll('.cuadrado');
    cambiarColor(selCuadrados);
}, 1000);