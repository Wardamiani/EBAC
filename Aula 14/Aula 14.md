

JavaScript 

Para facilitar seu aprendizado, tente fazer os exercícios mentalmente e somente em caso de dúvidas utilize alguma ferramenta, como o terminal de comando com o Node.js rodando, Console do navegador ou sites como JS Fiddle: 
Operadores 
Operador Função 
Aritméticos: retornam o resultado de uma operação 
+ -
*
/ % ++ -- 	somar
subtrair multiplicar dividir
resto de divisão incremento decremento 
Comparadores matemáticos: teste lógico, retorno booleano (true / false) 
< > <= >= 	menor que maior que menor ou igual maior ou igual 
Comparadores Lógicos: teste lógico, retorno booleano (true / false) 
== != === !=== 	igualdade entre sentenças (valor) diferença entre sentenças (valor) igualdade entre sentenças (valor e tipo) diferença entre sentenças (valor e tipo) 
Operadores de lógica e junção lógica 
! && || 	NÃO (NOT) E (AND) OU (OR) 
O sinal de exclamação (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência. 

Exemplos: 
a != b
x !=== y !a == b 
// o valor de a é diferente de b
// o valor e o tipo de x são diferentes de y // o valor de a não é igual ao valor de b 
As condições lógicas são convertidas em números binários: true é equivalente a 1
false é equivalente a 0 
Operador lógico de atribuição 
Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economiza IFs 
Exemplo:
var meuCarro = cor == “preto” ? “preto” : “branco”; 
Exercícios: 
Preencha os resultados das operações e o tipo de dado 
Exemplos 
8 + 6 = 14 (number)
“8” + “6” = “86” (string)
“8.6” + 4 = “8.64” (string)
“8” * 4 = 32 (number)
“8” - 4 = 4 (number)
“8” / 3 = 2.6666666666666665 (float) 5 + true = 6 (number)
“teste” + true = “testetrue” (string)
“8” == 8 = true (boolean)
“8” == 4 = false (boolean)
8 === “8” = false (boolean)
8 !== “8” = true (boolean)
8 < 4 = false (boolean)
8 > 4 = true (boolean) 

Exercícios: 
1. Resolva as operações: 
•	●  10+15= 25 (Number)
•	●  “10”+2= “102” (String)
•	●  “10”*2= 20 (Number)
•	●  “10”/3= 3,33 (Number)
•	●  “10”%3= 1 (Number)
•	●  10+true= 10 (Number)
•	●  10==”10”= true (Boolean)
•	●  10 === “10” = false (Boolean)
•	●  10<11= true (Bolean)
•	●  10>12= false (Bolean)
•	●  10<=10.1= true (Bolean)
•	●  10>9.99= true (Bolean)
•	●  10 != “dez” = false (Bolean)
•	●  10+true= 10 (Number)
•	●  “dez” + true = deztrue (string)
•	●  10+false= 10 (Number)
•	●  10*false= 10 (Number)
•	●  true + true = true (Bolean)
•	●  10++= 11 (Number)
•	●  10--= 9 (Number)
•	●  1&1= true (Bolean)
•	●  1&0= false (Bolean)
•	●  0&0= false (Bolean)
•	●  1&0= false (Bolean)
•	●  0/1= 0 (Number)
•	●  5+5==10= true (Bolean)
•	●  “5”+”5”==10= false (Bolean)
•	●  “5”*2>9= true (Bolean)
•	●  (10+10)*2= 40 (Number)
•	●  10+10*2= 30 (Number)
2. Responda as perguntas de acordo com as variáveis. 
var branco = “preto”; var preto = “cinza”; var cinza = “branco”; var carro = “preto”; var valor = 30000; var prestacao = 750; 

1.	a)  branco == “branco” false (Bolean)
2.	b)  branco == cinza true (Bolean)
3.	c)  carro === branco true (Bolean)
4.	d)  var cavalo = carro == “preto” ? “cinza” : “marron”; “cinza” (true / Bolean)
5.	e)  Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demonstre a operação. 


7.	let carValue = 30000;
8.	let intakeFee = 3000;
9.	let remainingValue = carValue - intakeFee;
10.	let monthlyPortion = 750;
11.	let installment = remainingValue / monthlyPortion;
12.	console.log(`Um carro com valor de R$ ${carValue}, para o qual foi paga uma entrada de R$ ${intakeFee}, terá um valor restante a pagar de R$ ${remainingValue}. O comprador poderá dividir em ${installment} parcelas iguais de R$ ${monthlyPortion}.`);
Resposta: Um carro com valor de R$ 30000, para o qual foi paga uma entrada de R$ 3000, terá um valor restante a pagar de R$ 27000. O comprador poderá dividir em 36 parcelas iguais de R$ 750.
12.	f)  Somando as variáveis de cores é formada uma string de quantos caracteres? 
13.	var branco = "preto"; 
14.	var preto = "cinza"; 
15.	var cinza = "branco"; 
16.	var carro = "preto";



18.	let cont = branco + preto + cinza + carro;
19.	
20.	console.log (cont.length);
Resposta: 21

