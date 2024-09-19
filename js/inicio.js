const nomeUsuario = document.getElementById('enq1');
const nomeUsuarioValor = localStorage.getItem('nomeUsuario').toLocaleLowerCase().replace('ó', 'o');
const resultadoSoma = document.getElementById('enq2');
const resultadoSomaValor = localStorage.getItem('resultadoSoma');
const nomeUsuarioAbobora = document.getElementById('enq3');

//Exibição dos Valores.
nomeUsuario.innerText = (`Olá ${nomeUsuarioValor}.`);
resultadoSoma.innerText = (`Resultado da soma: ${resultadoSomaValor}`);
if (nomeUsuarioValor === 'abobora') {
    nomeUsuarioAbobora.innerText = ('Você é uma abóbora!');
}

//Redirecionamento para a página de início.
function cliqueaqui(){
    location.reload(true);
    window.location.href = 'index.html';
}



console.log('Nome:', localStorage.getItem('nomeUsuario'));
console.log('Soma:', localStorage.getItem('resultadoSoma'));