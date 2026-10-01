// Função que envia os dados para o servidor JSON SERVER
// POST - CREATE

function enviarDados(){

    // Obter o valor digitado no campo 
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let telefone = document.getElementById('telefone').value;
    let rua = document.getElementById('rua').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let cep = document.getElementById('cep').value;
    let rg = document.getElementById('rg').value;
    let cpf = document.getElementById('cpf').value;
    let idade = document.getElementById('idade').value;
    let curso = document.getElementById('curso').value;
    let escola = document.getElementById('escola').value;
    let senha = document.getElementById('senha').value;


    // Enviar os dados para o servidor utilizando o FETCH
    fetch('http://localhost:3000/pessoas', {

        // Método HTTP utilizado para criar um novo cadastro
        method: 'POST',

        // Informa que os dados enviados estão no formato JSON
        headers:{
            'Content-Type': 'application/json'
        },

        // Transforma os dados em JSON para enviar ao servidor
        body: JSON.stringify({

            nome: nome,
            sobrenome: sobrenome,
            telefone: telefone,
            rua: rua,
            cidade: cidade,
            estado: estado,
            cep: cep,
            rg: rg,
            cpf: cpf,
            idade: idade,
            curso: curso,
            escola: escola,
            senha: senha

        })

    })

    // Converte a resposta do servidor para JSON
    .then(resposta => resposta.json())

    // Mostra uma mensagem quando o cadastro for realizado
    .then(dados => {
        alert('Cadastro realizado com sucesso!');
        console.log(dados);
    });

}