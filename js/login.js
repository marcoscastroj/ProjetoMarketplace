$(document).ready(function() {
    let navbar = $("<div>").load("../components/navbar.html");
    $("body").append(navbar);
});

$(document).ready(function(){
    let login = $('<h1 class="titulo"> Login </h1>'+
    '<form>'+
    '<div class="container">'+
      '<label for="uname"><b>Username</b></label>'+
      '<input type="text" placeholder="Enter Username" name="uname" required>'+
      '<label for="psw"><b>Password</b></label>'+
      '<input type="password" placeholder="Enter Password" name="psw" required>'+
      '<button type="submit" id="login">Login</button>'+
      '<label>'+
       ' <input type="checkbox" checked="checked" name="remember"> Remember me'+
      '</label>'+
    '</div>'+
    '<div class="container" style="background-color:#f1f1f1">'+
      '<button type="button" class="cancelbtn">Register</button>'+
      '<span class="psw">Forgot <a href="#" id="forgot_password">password?</a></span>'+
    '</div>'+
  '</form>');
  $("body").append(login)
});

$(document).ready(function(){
    const text = document.getElementById("forgot_password");
    forgot_password.addEventListener('click', () => {
        alert('Pagina não desenvolvida ainda.')
    });
});

$(document).ready(function(){
  const loginButton = document.getElementById("login");
  loginButton.addEventListener('click', () => {
      const username = document.getElementsByName("uname")[0].value;
      const password = document.getElementsByName("psw")[0].value;

      const adminLogin = "adm";
      const adminPassword = "adm";

      if (username === adminLogin && password === adminPassword) {
          alert("Login Concluido com sucesso! Voce está logado como admin.");
          // Realizar ações para autenticação bem-sucedida como redirecionamento para uma página de administração
      } else {
          alert("Login invalido tente novamente");
          // Realizar ações para tratamento de autenticação inválida, como limpar campos de login
      }
  });
});

$(document).ready(function(){
  const cancelButton = document.querySelector(".cancelbtn");
  cancelButton.addEventListener('click', () => {
    alert("Redirecionando para a página de registro.");
    window.location.href = "../components/register.html";
  });
});
