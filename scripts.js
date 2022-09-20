/*Crie um script que exiba o seu nome pelo número de anos que você possui. Por exemplo: Se
Ana Clara tem 25 anos, o algoritmo deve exibir o nome Ana Clara 25 vezes.*/
function exibirNome(){
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("numero").value;
    let exibirTexto = document.getElementById("texto");
    let texto = "";
    
    while (idade > 0){
        texto += nome + " " + "\n";
        idade--;
    }

    exibirTexto.innerText = texto;
}

/*Faça um script que receba um número inteiro e mostre se esse número é par ou ímpar*/
function parImpar(n){
    if(n % 2 == 0){
        return 'Par'
    }else {
        return 'Impar'
    }
}

console.log(parImpar(2))

/*Faça um script que receba dois números inteiros e mostre qual é o maior ou se são iguais.*/
function comparaNumeros(num1, num2) {
    if (!num1 || !num2) return 'Defina dois números! ';
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {

    let saoIguais = '';

    if (num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os númeos ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior';
    }

    if (compara20){
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20. `
}

console.log(comparaNumeros(5,2));

/*Faça um script que receba a base e a altura de um retângulo e calcule sua área.*/
function area(lado1, lado2){
    return lado1 * lado2
}
console.log(area(44, 3))

/*Faça um script que informe o valor de um produto e a porcentagem adicionada pelo tipo de
pagamento. Por exemplo: Na compra de uma TV no valor de 1000,00*/

//Se o pagamento for à vista. O usuário terá 15% de desconto (valor a pagar na TV: 850,00)
//Se o pagamento for débito. O usuário terá 5% de desconto (valor a pagar na TV: 950,00)
/*Se o pagamento for cartão. O usuário terá que pagar uma taxa de 10% (valor a pagar na TV:
1100,00)*/
/*Se o pagamento for cheque. O usuário terá que pagar uma taxa de 50% (valor a pagar na TV:
1500,00)*/
function calculoDesconto(valor, taxaDesconto){
    let valor1Porcento = valor / 100;
    let desconto = valor1Porcento * taxaDesconto;

    return valor - desconto;
}

function calculoTaxa(valor, taxa){
    let valor1Porcento = valor / 100;
    let desconto = valor1Porcento * taxa;

    return desconto + valor;
}

function calcular(){
    let valorProduto = parseInt(document.getElementById("valor").value);
    let descontoAVista = calculoDesconto(valorProduto, 15);
    let descontoDebito = calculoDesconto(valorProduto, 5);
    let taxaCartao = calculoTaxa(valorProduto, 10);
    let taxaCheque = calculoTaxa(valorProduto, 50);

    let exibirResultado = document.getElementById("resultado");

    let resultado = `Preço a vista: ${descontoAVista}
        Preço a débito: ${descontoDebito}  
        Preço cartão:  ${taxaCartao}  
        Preço cheque:  ${taxaCheque}`;
    
    exibirResultado.innerText = resultado;
}