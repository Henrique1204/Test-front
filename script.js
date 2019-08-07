let cards = document.querySelectorAll(".card");
let botaoVoltar = document.getElementById("voltar");
let botaoAvançar = document.getElementById("avancar");
let contaClique = 0;
let estopim = document.querySelector("#cadastro");
let div = document.createElement("div");
div.classList.add("divSurpresa");
let fechar = document.createElement("button");
fechar.classList.add("fechar");
let imagem = document.createElement("img");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let divButton = document.createElement("div");
divButton.classList.add("caixaDeBotoes");
let facebook = document.createElement("div");
facebook.classList.add("facebook");
let imgFacebook = document.createElement("img");
let pFacebook = document.createElement("p");
let google = document.createElement("div");
google.classList.add("google");
let imgGoogle = document.createElement("img");
let pGoogle = document.createElement("p")
let cadastrese = document.createElement("a");

botaoAvançar.addEventListener("click", function(){
    
    if(screen.width <= 930){
        if(contaClique == 0){
            cards[0].style.display = "none";
            cards[1].style.display = "flex";
            contaClique ++
        }else if(contaClique == 1){
            cards[1].style.display = "none";
            cards[2].style.display = "flex";
            contaClique ++
        }
        else if(contaClique == 2){
            cards[2].style.display = "none";
            cards[3].style.display = "flex";
            contaClique ++
        }
    }else{
        if(contaClique == 0){
            cards[0].style.display = "none";
            cards[2].style.display = "flex";
            contaClique ++
        }else if(contaClique == 1){
            cards[1].style.display = "none";
            cards[3].style.display = "flex";
            contaClique ++
        }
    }
});

botaoVoltar.addEventListener("click", function(){
    
    if(screen.width <= 930){
        if(contaClique == 1){
            cards[1].style.display = "none";
            cards[0].style.display = "flex";
            contaClique --
        }else if(contaClique == 2){
            cards[2].style.display = "none";
            cards[1].style.display = "flex";
            contaClique --
        }
        else if(contaClique == 3){
            cards[3].style.display = "none";
            cards[2].style.display = "flex";
            contaClique --
        }
    }else{
        if(contaClique == 1){
            cards[2].style.display = "none";
            cards[0].style.display = "flex";
            contaClique --
        }else if(contaClique == 2){
            cards[3].style.display = "none";
            cards[1].style.display = "flex";
            contaClique --
        }
    }
});

estopim.addEventListener( "click", function(){
    if(screen.width >= 951  ){
        document.querySelector("body").appendChild(div);
        div.appendChild(fechar);
        fechar.textContent = "X";
        div.appendChild(imagem);
        imagem.setAttribute("src", "img/icone menu/economia-80x80.webp");
        div.appendChild(p1);
        p1.textContent = "Aproveite as vantagens!";
        div.appendChild(p2);
        p2.textContent = "Economize muito mais nas suas viagens!";
        div.appendChild(divButton);
        divButton.appendChild(facebook);
        facebook.appendChild(imgFacebook);
        imgFacebook.setAttribute("src", "img/icone menu/log-facebook.png");
        facebook.appendChild(pFacebook);
        pFacebook.textContent = "Acessar com Facebook";
        divButton.appendChild(google);
        google.appendChild(imgGoogle);
        imgGoogle.setAttribute("src", "img/icone menu/icone-google.png");
        google.appendChild(pGoogle);
        pGoogle.textContent = "Acessar com Google";
        div.appendChild(cadastrese);
        cadastrese.setAttribute("href", "https://www.viajanet.com.br/shop/authentication/#/sign-in");
        cadastrese.textContent = "Acesse sua conta ou cadastre-se aqui";
    }
});

fechar.addEventListener("click", function(){
    document.querySelector("body").removeChild(div);
})