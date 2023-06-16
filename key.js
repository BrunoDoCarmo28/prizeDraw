function enter() {
    //Ao add o "escutador", ao pressionar o enter vai fazer a função.
    //pra isso funcionar, tem que ter uma função dntro da outra.
    document.getElementById('conf').addEventListener('keypress', function (e) {

        //se o valor recebido pelo parametro for o do enter, irá fazer a função
        if (e.key === 'Enter') {

            // o parseInt transaforma string em numero inteiro
            let number = parseInt(document.getElementById('conf').value);
            const rightNumber = Math.floor(Math.random() * 10) + 1;
            console.log(number);

            if (number !== rightNumber) {
                console.log('Número errado! Tente novamente.');
                document.getElementById('resultado').innerHTML = 'Número errado! Tente novamente!';

            } else {
                console.log('Você acertou, PARABENS!!!');
                document.getElementById('resultado').innerHTML = 'Você acertou, PARABENS!!!';
            }
        }
    });


}

