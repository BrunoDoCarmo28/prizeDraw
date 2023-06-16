function valor() {
 
    let number = document.getElementById("conf").value;
    
    const rightNumber = Math.floor(Math.random() * 10) + 1; 
    // Gera um número entre 1 e 10 (incluindo 1 e 10)
//Math.floor - Pega o numero quebrado e retorna como inteiro
//Math.random() *10 - multiplica o valor de numeros aleatórios de Math.floor de modo
//caiba no intervalo de 0 a 9, porém o +1 no final é justamente para alterar o intervalo 

    while (number !== rightNumber) {
        console.log('Número errado! Tente novamente.')
        document.getElementById("resultado").innerHTML = "Número errado! Tente novamente!";
        break;
        
    }

    if(number == rightNumber){
        console.log('Você acertou, PARABENS!!!')
        document.getElementById("resultado").innerHTML = "Você acertou, PARABENS!!!";
        
    }
        
        



        
       
    }


