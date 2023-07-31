$(document).ready(function() {
    let navbar = $("<div>").load("../components/navbar.html");
    $("body").append(navbar);
});
$(document).ready(function(){
    let register = $(
    '<h1>Página de Cadastro</h1>'+
    
    '<form id="register-form">'+
      '<input type="text" id="username" placeholder="Usuário" required>'+
      '<input type="password" id="password" placeholder="Senha" required>'+
      
      '<input type="text" id="cpf" placeholder="CPF" required>'+
    '<input type="email" id="email" placeholder="Email" required>'+
    '<div>'+
      '<input type="checkbox" id="terms" required>'+
      '<label for="terms">Eu aceito os termos de uso</label>'+
    '</div>'+
    '<button type="submit">Cadastrar</button>'+
    '</form>');
  $("body").append(register)

});
$(document).ready(function() {
    // Captura o evento de envio do formulário de cadastro
    $('#register-form').submit(function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      var username = $('#username').val();
      var password = $('#password').val();
  
      // Aqui você pode adicionar a lógica para validar as informações de cadastro
      // Se as informações estiverem corretas, redirecione para a página index.html
      if (username && password) {
        // Redireciona para a página index.html
        window.location.href = 'index.html';
      } else {
        // Mostra uma mensagem de erro
        alert('Preencha todos os campos corretamente.');
      }
    });
  });
  

  $(document).ready(function() {
    // Função de validação para o campo CPF
    function validateCPF(cpf) {
      // Remove caracteres não numéricos do CPF
      cpf = cpf.replace(/\D/g, '');
  
      // Verifica se o CPF tem exatamente 11 dígitos e contém apenas números
      if (cpf.length !== 11 || !(/^\d+$/.test(cpf))) {
        return false;
      }
  
      return true;
    }
  
    // Manipulador de evento para filtrar apenas números no campo de CPF
    $('#cpf').on('input', function(event) {
      // Remove caracteres não numéricos
      var cpf = $(this).val().replace(/\D/g, '');
  
      // Atualiza o valor do campo com apenas os números
      $(this).val(cpf);
    });
  
    // Manipulador de evento para o envio do formulário
    $('#register-form').submit(function(event) {
      // Obtém o valor do campo CPF
      var cpf = $('#cpf').val();
  
      // Valida o CPF
      if (!validateCPF(cpf)) {
        // Mostra uma mensagem de erro
        alert('CPF inválido. Certifique-se de digitar exatamente 11 números.');
  
        // Impede o envio do formulário
        event.preventDefault();
      }
    });
  });
  
  