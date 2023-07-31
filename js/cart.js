$(document).ready(function() {
    let navbar = $("<div>").load("../components/navbar.html");
    $("body").append(navbar);
});

$(document).ready(function(){
    let carrinho = $('<div class="carrinho">'+
    '</div>'+
    '<img src="../img/notebook-gamer-lenovo-gaming-3.png" class="imagem-carrinho" alt="Imagem do Carrinho">'+
    '<div class="descricao">'+
    'Carrinho<br>'+
    'Notebook Gamer Lenovo<br>'+
    'R$ 1250,00'+
  '</div>'+
  '<button class="botao-comprar">Comprar</button>');
    $("body").append(carrinho)
})