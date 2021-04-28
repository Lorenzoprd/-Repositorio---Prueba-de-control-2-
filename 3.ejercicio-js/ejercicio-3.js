function conversor () {
    const numero = prompt('introduce un numero');
    const base = Number(prompt('si es decimal pon 10 si es binario pon 2'));
    if (base===10){
        const num = Number(numero);
        const decimalEnBinario = num.toString(2);
        return decimalEnBinario; 
    }if (base===2) {
        const binarioEnDecimal = Array.from(numero).reverse().reduce((total, val, index)=>val==="1"?total + 2**index:total, 0);
        return binarioEnDecimal;
    } 
}
console.log(conversor());
