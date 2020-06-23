# BINARY OPERATIONS

Projeto desenvolvido por [Renan Queiroz](https://github.com/renanq), como parte do processo seletivo para vaga na Digistarts. o Desafio consta em criar um programa, em Node.js, capaz de operar dois números de 0-255, informados em binário, e dar uma resposta também em binário, aceitando os operadores "+", "-", "*", "/" e "%".


# Instalação / Execução

Para rodar o programa, você necessita ter instalado nasua máquina o [Node.js](https://nodejs.org/), baixar os arquivos do repositório no [Github](https://github.com/renanq/binaryoperations) e executar o arquivo **index.js**.


# Características

1. O programa valida os dados de entreda: 

  * Operação: Aceitando apenas os caracteres "+", "-", "*", "/" e "%"

  * Números: Aceita apenas valores numéricos, no formato binário, entra 0 e 255, sem parte fracionaria e sem sinal.

2. Programa então realiza a operação, de acordo com o que foi dgitado

3. Exibe a operação que foi realizada com o resultado, em binário, com 8 bits. No caso de retorno negativo apenas acrescanta o sinal na frente do resultado. No caso de retorno decimal, é exibido apenas a parte inteira do resultado em binário.


# Testes

Por ser uma aplicação simples, foram realizados, apenas, testes manuais. Seguem abaixo:

* Exemplo 01: Adição

![](/images/exemplo_01.png)

* Exemplo 02: Subtração

![](/images/exemplo_02.png)

* Exemplo 03: Multiplicação

![](/images/exemplo_03.png)

* Exemplo 04: Módulo

![](/images/exemplo_04.png)

* Exemplo 05: Divisão

![](/images/exemplo_05.png)

* Exemplo 06: Erro operação inválida

![](/images/exemplo_06.png)

* Exemplo 07: Erro valor binario acima de 8bits

![](/images/exemplo_07.png)

* Exemplo 08: Erro valor não numérico

![](/images/exemplo_08.png)


# Referências

![](/images/problem.jpg)
