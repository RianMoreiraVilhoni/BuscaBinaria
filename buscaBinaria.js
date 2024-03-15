const readline = require('readline-sync');
// Função para gerar um número inteiro aleatório em um intervalo específico
function gerarNumeroInteiroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Exemplo de uso: gerar um número inteiro aleatório entre 1 e 100
  var numero = gerarNumeroInteiroAleatorio(1, 100);
  console.log(numero);

  var pergunta = readline.question("Qual é o numero? ");

  if (numero===parseInt(pergunta)) {
    console.log("acertou")
  } 
////////////////////////////////////////////////////////////////////////////

  if(numero<pergunta){
    var pergunta2 = readline.question("menor, tente novamente ");
    if(numero===pergunta2){
        console.log("acerto mizeravi!")
    }
    

    if(numero<pergunta2){
        var pergunta3 = readline.question("menor, tente novamente ");
        if(numero===pergunta4){
            console.log("acerto mizeravi!")
        }
        
        if(numero<pergunta3){ 
            var pergunta4 = readline.question("menor, tente novamente ");
            if(numero===pergunta4){
                console.log("acerto mizeravi!")
            }
            
            if(numero<pergunta4){
                var pergunta5 = readline.question("menor, tente novamente ");
                if(numero===pergunta5){
                    console.log("acerto mizeravi!")
                }
                if(numero<pergunta4){
                    var pergunta6 = readline.question("menor, tente novamente ");
                    if(numero===pergunta6){
                        console.log("acerto mizeravi!")
                    }
                    else if(numero!=pergunta6){
                        console.log("ERROU PORRA!")
                    }
                
                  }
                  else if(numero>pergunta4) {
                    var pergunta5 = readline.question("maior, tente novamente ");
                    if(numero===pergunta5){
                        console.log("acerto mizeravi!")
                    }
                    else if(numero!=pergunta5){
                        console.log("ERROU PORRA!")
                    }
                  }
            
              }
              else if(numero>pergunta4) {
                var pergunta5 = readline.question("maior, tente novamente ");
                if(numero===pergunta5){
                    console.log("acerto mizeravi!")
                }
                else if(numero!=pergunta5){
                    console.log("ERROU PORRA!")
                }
              }
          }
          else if(numero>pergunta3) {
            var pergunta4 = readline.question("maior, tente novamente ");
            if(numero===pergunta4){
                console.log("acerto mizeravi!")
            }
            else if(numero!=pergunta4){
                console.log("ERROU PORRA!")
            }
            if(numero<pergunta4){
                var pergunta5 = readline.question("menor, tente novamente ");
                if(numero===pergunta5){
                    console.log("acerto mizeravi!")
                }
                else if(numero!=pergunta5){
                    console.log("ERROU PORRA!")
                }
            
              }
              else if(numero>pergunta3) {
                var pergunta4 = readline.question("maior, tente novamente ");
                if(numero===pergunta4){
                    console.log("acerto mizeravi!")
                }
                else if(numero!=pergunta4){
                    console.log("ERROU PORRA!")
                }
                
              }
            if(numero<pergunta3){
                var pergunta4 = readline.question("menor, tente novamente ");
                if(numero===pergunta4){
                    console.log("acerto mizeravi!")
                }
                else if(numero!=pergunta4){
                    console.log("ERROU PORRA!")
                }
            
              }
              else if(numero>pergunta3) {
                var pergunta4 = readline.question("maior, tente novamente ");
                if(numero===pergunta4){
                    console.log("acerto mizeravi!")
                }
                else if(numero!=pergunta4){
                    console.log("ERROU PORRA!")
                }
              }
          }
    
      }
      else if(numero>pergunta) {
        var pergunta3 = readline.question("maior, tente novamente ");
        if(numero===pergunta4){
            console.log("acerto mizeravi!")
        }
        else if(numero!=pergunta4){
            console.log("ERROU PORRA!")
        }
      }
  }
  ////////////////////////////////////////////////////////////////////////////
  else if(numero>pergunta) {
    var pergunta2 = readline.question("maior, tente novamente ");
    if(numero===pergunta4){
        console.log("acerto mizeravi!")
    }
    else if(numero!=pergunta4){
        console.log("ERROU PORRA!")
    }
    
    if(numero<pergunta2){
        var pergunta3 = readline.question("menor, tente novamente ");
        if(numero===pergunta4){
            console.log("acerto mizeravi!")
        }
        else if(numero!=pergunta4){
            console.log("ERROU PORRA!")
        }
        if(numero<pergunta3){
            var pergunta4 = readline.question("menor, tente novamente ");
            if(numero===pergunta4){
                console.log("acerto mizeravi!")
            }
            else if(numero!=pergunta4){
                console.log("ERROU PORRA!")
            }
        
          }
          else if(numero>pergunta3) {
            var pergunta4 = readline.question("maior, tente novamente ");
            if(numero===pergunta4){
                console.log("acerto mizeravi!")
            }
            else if(numero!=pergunta4){
                console.log("ERROU PORRA!")
            }
          }
    
      }
      else if(numero>pergunta2) {
        var pergunta3 = readline.question("maior, tente novamente ");
        if(numero===pergunta4){
            console.log("acerto mizeravi!")
        }
        else if(numero!=pergunta4){
            console.log("ERROU PORRA!")
        }
        if(numero<pergunta3){
            var pergunta4 = readline.question("menor, tente novamente ");
            if(numero===pergunta4){
                console.log("acerto mizeravi!")
            }
            else if(numero!=pergunta4){
                console.log("ERROU PORRA!")
            }
        
          }
          else if(numero>pergunta3) {
            var pergunta4 = readline.question("maior, tente novamente ");
            if(numero===pergunta4){
                console.log("acerto mizeravi!")
            }
            else if(numero!=pergunta4){
                console.log("ERROU PORRA!")
            }
          }
      }
  }
   