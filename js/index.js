$(document).ready(function() {
    let navbar = $("<div>").load("../components/navbar.html");
    let products = $("<div>").load("../components/products.html");
    $("body").append(navbar, products);
 });

