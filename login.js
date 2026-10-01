// Função responsável por fazer o login
function fazerLogin(){

    // Pega o valor digitado no campo de nome
    let nome = document.getElementById('nome').value;

    // Pega o valor digitado no campo de senha
    let senha = document.getElementById('senha').value;

    // Faz uma requisição GET para buscar os cadastros no JSON Server
    fetch('http://localhost:3000/pessoas')

    // Converte a resposta recebida para JSON
    .then(resposta => resposta.json())

    // Recebe os dados encontrados no servidor
    .then(dados => {

        // Procura uma pessoa que tenha o nome e a senha digitados
        let usuario = dados.find(pessoas => 
            pessoas.nome == nome && pessoas.senha == senha
        );

        // Verifica se encontrou o usuário
        if(usuario){

            // Guarda os dados do usuário no navegador
            localStorage.setItem('usuario', JSON.stringify(usuario));

            // Vai para a página de boas-vindas
            window.location.href = 'bemVindo.html';

        } else {

            // Mostra uma mensagem caso o usuário não seja encontrado
            alert('Usuário/senha incorretos! Tente novamente!');
        }
    });
}