const form = document.querySelector('form');
const campoA = document.querySelector('#campoA');
const campoB = document.querySelector('#campoB');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (campoB.value > campoA.value) { 
        alert('Parabêns! Você preencheu os campos corretamente.');
    } else {
        alert('O valor do campo B deve ser maior que o valor do campo A.');
}
});
