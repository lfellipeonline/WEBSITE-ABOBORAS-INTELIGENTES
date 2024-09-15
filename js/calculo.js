document.addEventListener('DOMContentLoaded', function() {
    const numeroSoma1 = document.getElementById('numeroSoma1');
    const numeroSoma2 = document.getElementById('numeroSoma2');
    const calculoSomar = document.getElementById('calculoSomar');

    calculoSomar.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o redirecionamento imediato
        const numeroSoma1Value = parseFloat(numeroSoma1.value);
        const numeroSoma2Value = parseFloat(numeroSoma2.value);
        console.log('Número 1:', numeroSoma1Value);
        console.log('Número 2:', numeroSoma2Value);

        function somar(numeroSoma1Value, numeroSoma2Value) {
            return numeroSoma1Value + numeroSoma2Value;
        }

        if (isNaN(numeroSoma1Value) && isNaN(numeroSoma2Value)) {
            alert('Por favor, preencha os campos com números.');
            return;
        }

        const resultadoSoma = (somar(numeroSoma1Value, numeroSoma2Value));
        console.log('Resultado da soma:', resultadoSoma);

        // Armazena o valor em localStorage
        localStorage.setItem('numeroSoma1', numeroSoma1Value);
        localStorage.setItem('numeroSoma2', numeroSoma2Value);
        localStorage.setItem('resultadoSoma', resultadoSoma);

        // Redireciona para a próxima página após capturar o valor
        window.location.href = 'inicio.html';
    });

});