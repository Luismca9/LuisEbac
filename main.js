const form = document.getElementById('form-Atividade');
const imgAprovado = '<img src="./Imagens/aprovado.png" alt="Emoji Celebrando" />';
const imgReprovado = '<img src="./Imagens/reprovado.png" alt="Emoji Decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a Nota Mínima:"));

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-Atividade');
    const inputNotaAtividade = document.getElementById('nota-Atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A Atividade ${inputNomeAtividade.value} já foi inserida`)
    } else { 
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}; 

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediafinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediafinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediafinal >= notaMinima ? spanAprovado : spanReprovado;

    console.log(media);
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }   

    return somaDasNotas / notas.length;
}