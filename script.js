let cards = document.querySelectorAll(".card");
let botaoVoltar = document.getElementById("voltar");
let botaoAvançar = document.getElementById("avancar");
let contaClique = 0;

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