$(document).ready(function() {
    let container = $("<div>", {class: "container"});
    let session = $("<session>", {class: "allProducts"});
    let session2 = $("<session>", {class: "allProducts"});

    $.getJSON("../json/products.json", function(data) {
        $.each(data, function(index, value) {
            let article = $("<article>", {class: "product"});
            let img = $("<img>", {src: value.img, alt: "Capa do Produto", class: "responsive"});
            let h2 = $("<h2>").text(value.name);
            let p = $("<p>").text(`R$ ${value.price}`);
            let button = $("<button>", {class: "btn btn-primary"}, {id: "button"}).text("Comprar");
            button.click(function(){
                window.location.href = "../components/product-page.html";
            });

            article.append(img, h2, p, button);
            if (index <= 2){
                session.append(article);
            } else {
                session2.append(article);
            };
        });
    });
    container.append(session, session2);
    $("body").append(container);
});

