const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//operadores validos
const operadores = ['+', '-', '*', '/', '%'];

//numeros não pertencentes a binarios
var naoBinario = ['+','-','.',',','2','3','4','5','6','7','8','9'];

//ajusta formato do binario para 8 bits
function ajustarBinario (valor){
  var ajustado = '';
  for (var i=0; i<(8-valor.length); i++){
    ajustado = ajustado + '0';
  }
  ajustado = ajustado + valor;
  return ajustado;
}

//converte binario em decimal
function converterDecimal (valor) {
  var decimal = parseInt(String(valor), 2);
  return decimal;
}

//conerte valor decimal em binario
function converterBinario (valor) {
  var binario = Number(valor).toString(2);
  return binario;
}

//validacao do numero binario digitado (verifica se é numero, verifica se é binario e 
//verifica se está entra 0 e 255
function validaNumero (numero) {
  var teste = false;

  //verifica se é numero
  if (isNaN(numero)) {
    teste = false;
  } else {
    teste = true;

    //verifica se é binario
    naoBinario.forEach((value) => {
      numero.indexOf(value) >= 0 ? teste = false : null;
    });

    if (teste) {
      //valida se o numero binario é <= a 255
      converterDecimal(numero) > 255 ? teste = false : teste = true;
    }
  }

  return teste;
};

//lendo a operação
rl.question('Digite a operação (+, -, *, /, %):', operacao => {
  //validação da opração digitada
  //cancela a operação caso seja invalida
  if (operadores.indexOf(operacao) == -1) {
    console.log('Operação inexistente.');
    rl.close();
  }
  //continua caso seja valida
  else{ 
    //lendo o primeiro valor binario
    rl.question('Digite o primeiro numero binario (0-255):', numero1 => {
      //verifica se o primeiro valor digitado é valido
      //se não for cancela a aoperação
      if (validaNumero(numero1) == false){
        console.log('Primeiro numero digitado é invalido.');
        rl.close();
      }
      //se for valido continua...
      else{
        //lendo o segundo valor binario
        rl.question('Digite o segundo numero binario (0-255):', numero2 => {
        //verifica se o primeiro valor digitado é valido
        //se não for cancela a aoperação
        if (validaNumero(numero2) == false){
          console.log('Segundo numero digitado é invalido.');
          rl.close();
        }
        //se for valido continua...
        else{
          var resultado, resultadoBinario, decimal1, decimal2;
          //convertendo os numeros digitados para decimal
          decimal1 = converterDecimal(numero1);
          decimal2 = converterDecimal(numero2);

          //realizando as operacoes
          switch(operacao) {
            case '+':
              resultado = decimal1 + decimal2;
              break;
            case '-':
              resultado = decimal1 - decimal2;
              break; 
            case '*':
              resultado = decimal1 * decimal2;
              break; 
            case '/':
              resultado = Math.trunc(decimal1 / decimal2);
              break;
            case '%':
              resultado = decimal1 % decimal2;
              break;
            }
            
            //imprime o resutado em binario ajustado
            resultadoBinario = ajustarBinario(converterBinario(resultado));
            console.log(`Resultado de: ${ajustarBinario(numero1)} ${operacao} ${ajustarBinario(numero2)} = ${resultadoBinario}`);
            rl.close();
          }
        });
      };
    });
  };
});
