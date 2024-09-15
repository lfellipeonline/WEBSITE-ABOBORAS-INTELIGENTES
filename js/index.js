document.addEventListener('DOMContentLoaded', function() {
    const NomeUsuario = document.getElementById('nomeUsuario');
    const indexProximo = document.getElementById('indexProximo');

    indexProximo.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o redirecionamento imediato
        const nomeUsuarioValue = NomeUsuario.value;
        console.log('Nome:', nomeUsuarioValue);

        if (nomeUsuarioValue === '') {
            alert('Por favor, preencha o campo com seu nome.');
            return;
        }

        // Armazena o valor em localStorage
        localStorage.setItem('nomeUsuario', nomeUsuarioValue);

        // Redireciona para a próxima página após capturar o valor
        window.location.href = 'calculo.html';
    });
});
