// Função para validar o formulário
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Pegando os valores dos campos
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Validação simples
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        event.preventDefault(); // Impede o envio do formulário
    } else {
        alert("Mensagem enviada com sucesso!");
    }
});