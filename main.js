const form = document.getElementById('form-atividade');
let addLinha = '';


form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('input-nome-contato');
    const inputTelContato = document.getElementById('input-numero-tel');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelContato.value}</td>`;
    linha += '</tr>';
    addLinha += linha;

    const corpoTabela = document.querySelector('tbody');   
    corpoTabela.innerHTML = addLinha; 
});