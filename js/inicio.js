document.addEventListener('DOMContentLoaded', function(){
    const nomeUsuario = document.getElementById('enq1');
    const nomeUsuarioValor = localStorage.getItem('nomeUsuario');
    const resultadoSoma = document.getElementById('enq2');
    const resultadoSomaValor = localStorage.getItem('resultadoSoma');

    //Exibição dos Valores
    nomeUsuario.innerText = (`Olá ${nomeUsuarioValor}.`);
    resultadoSoma.innerText = (`Resultado da soma: ${resultadoSomaValor}`);
})

//Sem função no momento.
function cliqueaqui(){
    window.alert('(Temporariamente, recaregue a pagina pressionando "F5")');
}



console.log('Nome:', localStorage.getItem('nomeUsuario'));
console.log('Soma:', localStorage.getItem('resultadoSoma'));