const readline = require('readline-sync');
// Função para gerar um número inteiro aleatório em um intervalo específico
function gerarNumeroInteiroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Exemplo de uso: gerar um número inteiro aleatório entre 1 e 100
  var numero = gerarNumeroInteiroAleatorio(1, 100);
  console.log(numero);

  var pergunta = readline.question("Qual é o numero? ");
//primeiro loop 1 se maior >
if (numero>pergunta) {
    var pergunta2 = readline.question("Maior, tente novamente: ");
    //segundo loop 2 se maior>
    if (numero>pergunta2) {
        var pergunta3 = readline.question("Maior, tente novamente: ");
        //terceiro loop 3 se maior >
        if (numero>pergunta3) {
            var pergunta4 = readline.question("Maior, tente novamente: ");
            //quarto loop 4 se maior >
            if (numero>pergunta4) {
            var pergunta5 = readline.question("Maior, tente novamente: ");
                //quinto loop 5 se maior >
                if (numero>pergunta5) {
                var pergunta6 = readline.question("Maior, tente novamente: ");
                if (numero===parseInt(pergunta6)) {
                    console.log("Acerto mizeravi!")
                }
                }
                //quinto loop 5 se menor <
                if(numero<pergunta5){
                var pergunta6 = readline.question("Menor, tente novamente: ");
                if (numero===parseInt(pergunta6)) {
                    console.log("Acerto mizeravi!")
                }
                }
                if (numero===parseInt(pergunta5)) {
                console.log("Acerto mizeravi!")
                }
            }
            //quarto loop 4 se menor <
            if(numero<pergunta4){
            var pergunta5 = readline.question("Menor, tente novamente: ");
                //quinto loop 5 se maior >
                if (numero>pergunta5) {
                var pergunta6 = readline.question("Maior, tente novamente: ");
                if (numero===parseInt(pergunta6)) {
                    console.log("Acerto mizeravi!")
                }
                }
                //quinto loop 5 se menor <
                if(numero<pergunta5){
                var pergunta6 = readline.question("Menor, tente novamente: ");
                if (numero===parseInt(pergunta6)) {
                    console.log("Acerto mizeravi!")
                }
                }
                if (numero===parseInt(pergunta5)) {
                console.log("Acerto mizeravi!")
                }
            }
            if (numero===parseInt(pergunta4)) {
            console.log("Acerto mizeravi!")
            }
        }
        //terceiro loop 3 se menor <
        if(numero<pergunta3){
            var pergunta4 = readline.question("Menor, tente novamente: ");
            //quarto loop 4 se maior >
            if (numero>pergunta4) {
                var pergunta5 = readline.question("Maior, tente novamente: ");
                    //quinto loop 5 se maior >
                    if (numero>pergunta5) {
                    var pergunta6 = readline.question("Maior, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    //quinto loop 5 se menor <
                    if(numero<pergunta5){
                    var pergunta6 = readline.question("Menor, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    if (numero===parseInt(pergunta5)) {
                    console.log("Acerto mizeravi!")
                    }
                }
                //quarto loop 4 se menor <
                if(numero<pergunta4){
                var pergunta5 = readline.question("Menor, tente novamente: ");
                    //quinto loop 5 se maior >
                    if (numero>pergunta5) {
                    var pergunta6 = readline.question("Maior, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    //quinto loop 5 se menor <
                    if(numero<pergunta5){
                    var pergunta6 = readline.question("Menor, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    if (pergunta5===numero) {
                    console.log("Acerto mizeravi!")
                    }
                }
                if (numero===parseInt(pergunta4)) {
                console.log("Acerto mizeravi!")
                }
        }
        if (numero===parseInt(pergunta3)) {
            console.log("Acerto mizeravi!")
        }
    }
    //segundo loop 2 se menor <
    if(numero<pergunta2){
        var pergunta3 = readline.question("Menor, tente novamente: ");
         //terceiro loop 3 se maior >
         if (numero>pergunta3) {
            var pergunta4 = readline.question("Maior, tente novamente: ");
            //quarto loop 4 se maior >
            if (numero>pergunta4) {
                var pergunta5 = readline.question("Maior, tente novamente: ");
                    //quinto loop 5 se maior >
                    if (numero>pergunta5) {
                    var pergunta6 = readline.question("Maior, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    //quinto loop 5 se menor <
                    if(numero<pergunta5){
                    var pergunta6 = readline.question("Menor, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    if (numero===parseInt(pergunta5)) {
                    console.log("Acerto mizeravi!")
                    }
                }
                //quarto loop 4 se menor <
                if(numero<pergunta4){
                var pergunta5 = readline.question("Menor, tente novamente: ");
                    //quinto loop 5 se maior >
                    if (numero>pergunta5) {
                    var pergunta6 = readline.question("Maior, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    //quinto loop 5 se menor <
                    if(numero<pergunta5){
                    var pergunta6 = readline.question("Menor, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    if (pergunta5===numero) {
                    console.log("Acerto mizeravi!")
                    }
                }
                if (numero===parseInt(pergunta4)) {
                console.log("Acerto mizeravi!")
                }
        }
        //terceiro loop 3 se menor <
        if(numero<pergunta3){
            var pergunta4 = readline.question("Menor, tente novamente: ");
            //quarto loop 4 se maior >
            if (numero>pergunta4) {
                var pergunta5 = readline.question("Maior, tente novamente: ");
                    //quinto loop 5 se maior >
                    if (numero>pergunta5) {
                    var pergunta6 = readline.question("Maior, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    //quinto loop 5 se menor <
                    if(numero<pergunta5){
                    var pergunta6 = readline.question("Menor, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    if (numero===parseInt(pergunta5)) {
                    console.log("Acerto mizeravi!")
                    }
                }
                //quarto loop 4 se menor <
                if(numero<pergunta4){
                var pergunta5 = readline.question("Menor, tente novamente: ");
                    //quinto loop 5 se maior >
                    if (numero>pergunta5) {
                    var pergunta6 = readline.question("Maior, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    //quinto loop 5 se menor <
                    if(numero<pergunta5){
                    var pergunta6 = readline.question("Menor, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    if (numero===parseInt(pergunta5)) {
                    console.log("Acerto mizeravi!")
                    }
                }
                if (numero===parseInt(pergunta4)) {
                console.log("Acerto mizeravi!")
                }
        }
        if (numero===parseInt(pergunta3)) {
            console.log("Acerto mizeravi!")
        }
    }
    if (numero===parseInt(pergunta2)) {
        console.log("Acerto mizeravi!")
    }
    if (numero===parseInt(pergunta)) {
        console.log("Acerto mizeravi!")
    }
}
//primeiro loop 1 se menor <
if(numero<pergunta){
    var pergunta2 = readline.question("Menor, tente novamente: ");
    //segundo loop 2 se maior >
    if (numero>pergunta2) {
        var pergunta3 = readline.question("Maior, tente novamente: ");
         //terceiro loop 3 se maior >
         if (numero>pergunta3) {
            var pergunta4 = readline.question("Maior, tente novamente: ");
            //quarto loop 4 se maior >
            if (numero>pergunta4) {
                var pergunta5 = readline.question("Maior, tente novamente: ");
                    //quinto loop 5 se maior >
                    if (numero>pergunta5) {
                    var pergunta6 = readline.question("Maior, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    //quinto loop 5 se menor <
                    if(numero<pergunta5){
                    var pergunta6 = readline.question("Menor, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    if (numero===parseInt(pergunta5)) {
                    console.log("Acerto mizeravi!")
                    }
                }
                //quarto loop 4 se menor <
                if(numero<pergunta4){
                var pergunta5 = readline.question("Menor, tente novamente: ");
                    //quinto loop 5 se maior >
                    if (numero>pergunta5) {
                    var pergunta6 = readline.question("Maior, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    //quinto loop 5 se menor <
                    if(numero<pergunta5){
                    var pergunta6 = readline.question("Menor, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    if (pergunta5===numero) {
                    console.log("Acerto mizeravi!")
                    }
                }
                if (numero===parseInt(pergunta4)) {
                console.log("Acerto mizeravi!")
                }
        }
        //terceiro loop 3 se menor <
        if(numero<pergunta3){
            var pergunta4 = readline.question("Menor, tente novamente: ");
            //quarto loop 4 se maior >
            if (numero>pergunta4) {
                var pergunta5 = readline.question("Maior, tente novamente: ");
                    //quinto loop 5 se maior >
                    if (numero>pergunta5) {
                    var pergunta6 = readline.question("Maior, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    //quinto loop 5 se menor <
                    if(numero<pergunta5){
                    var pergunta6 = readline.question("Menor, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    if (numero===parseInt(pergunta5)) {
                    console.log("Acerto mizeravi!")
                    }
                }
                //quarto loop 4 se menor <
                if(numero<pergunta4){
                var pergunta5 = readline.question("Menor, tente novamente: ");
                    //quinto loop 5 se maior >
                    if (numero>pergunta5) {
                    var pergunta6 = readline.question("Maior, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    //quinto loop 5 se menor <
                    if(numero<pergunta5){
                    var pergunta6 = readline.question("Menor, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    if (numero===parseInt(pergunta5)) {
                    console.log("Acerto mizeravi!")
                    }
                }
                if (numero===parseInt(pergunta4)) {
                console.log("Acerto mizeravi!")
                }
        }
        if (numero===parseInt(pergunta3)) {
            console.log("Acerto mizeravi!")
        }
    }
    //segundo loop 2 se menor <
    if(numero<pergunta2){
        var pergunta3 = readline.question("Menor, tente novamente: ");
         //terceiro loop 3 se maior >
        if (numero>pergunta3) {
            var pergunta4 = readline.question("Maior, tente novamente: ");
            //quarto loop 4 se maior >
            if (numero>pergunta4) {
                var pergunta5 = readline.question("Maior, tente novamente: ");
                    //quinto loop 5 se maior >
                    if (numero>pergunta5) {
                    var pergunta6 = readline.question("Maior, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    //quinto loop 5 se menor <
                    if(numero<pergunta5){
                    var pergunta6 = readline.question("Menor, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    if (numero===parseInt(pergunta5)) {
                    console.log("Acerto mizeravi!")
                    }
                }
                //quarto loop 4 se menor <
                if(numero<pergunta4){
                var pergunta5 = readline.question("Menor, tente novamente: ");
                }
                if (numero===parseInt(pergunta4)) {
                console.log("Acerto mizeravi!")
                }
        }
        //terceiro loop 3 se menor <
        if(numero<pergunta3){
            var pergunta4 = readline.question("Menor, tente novamente: ");
            //quarto loop 4 se maior >
            if (numero>pergunta4) {
                var pergunta5 = readline.question("Maior, tente novamente: ");
                    //quinto loop 5 se maior >
                    if (numero>pergunta5) {
                    var pergunta6 = readline.question("Maior, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    //quinto loop 5 se menor <
                    if(numero<pergunta5){
                    var pergunta6 = readline.question("Menor, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    if (numero===parseInt(pergunta5)) {
                    console.log("Acerto mizeravi!")
                    }
                }
                //quarto loop 4 se menor <
                if(numero<pergunta4){
                var pergunta5 = readline.question("Menor, tente novamente: ");
                    //quinto loop 5 se maior >
                    if (numero>pergunta5) {
                    var pergunta6 = readline.question("Maior, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    //quinto loop 5 se menor <
                    if(numero<pergunta5){
                    var pergunta6 = readline.question("Menor, tente novamente: ");
                    if (numero===parseInt(pergunta6)) {
                        console.log("Acerto mizeravi!")
                    }
                    }
                    if (numero===parseInt(pergunta5)) {
                    console.log("Acerto mizeravi!")
                    }
                }
                if (numero===parseInt(pergunta4)) {
                console.log("Acerto mizeravi!")
                }
        }
        if (numero===parseInt(pergunta4)) {
            console.log("Acerto mizeravi!")
        }
    }
    if (numero===parseInt(pergunta4)) {
        console.log("Acerto de primeira mizeravi!")
    }
    if (numero===parseInt(pergunta2)) {
    console.log("Acerto de primeira mizeravi!")
}
if (numero===parseInt(pergunta)) {
    console.log("Acerto mizeravi!")
}
}
