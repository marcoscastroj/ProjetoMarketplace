$(document).ready(function() {
    let navbar = $("<div>").load("../components/navbar.html");
    $("body").append(navbar);
 });
 $(document).ready(function(){
    let product = $('<h1> TELA EXEMPLO </h1>'+
    '<div class="product">'+
    '<img src="../img/placa-de-video.png" alt="Produto">'+
    '<h1>Placa de video</h1>'+
    '<p>placa de video para rodar jogos em perfeita qualidade</p>'+
    '<h2>R$ 1.000,00</h2>'+
    '<label for="quantidade">Quantidade:</label>'+
    '<input type="number" id="quantidade" name="quantidade" min="1" max="10">'+
    '<button type="button">Adicionar ao Carrinho</button>'+
'</div>');
  $("body").append(product)
});