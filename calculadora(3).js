//Construção de um programa de Calculadora
// Nível I

function calcSoma (a, b) {
    let = a + b;
}

function calcMult (a, b) {
    let = a * b;
}

function calcSubt (a, b) {
    let = a - b;
}

function calcDiv (a, b) {
    let = a - b;
}

// Nível II
console.log("--------------Teste de Operações / Calculadora--------------");

console.log(adicionar(50,5));
console.log(subtrair(15,6));
console.log(multiplicar(40,2));
console.log(dividir(28,2));
console.log(dividir(15,5));

// Nível III
// Quadrado do número

function quadradoDoNumero(num){
    return multiplicar(num, num);
}

console.log(quadradoDoNumero(5));

// Média de 3(três) números

function mediaDeTresNumeros(a, b, c){
    let soma = a + b + c;
    return dividir(soma, 6);
}

console.log(mediaDeTresNumeros(10, 3, 2));

// Calcular porcentagem

function calcularPorcentagem (valor, taxa){
    let percentual = dividir(taxa, 100);
    return parseFloat((multiplicar(valor, percentual)).toFixed(2));
}

console.log(calcularPorcentagem(260, 12.234));

// Gerador de porcentagem

function geradorDePorcentagem (valorA, valorB){
    let primeiraOperacao = multiplicar(valorA, 100);
    return dividir(primeiraOperacao, valorB);
}

console.log(geradorDePorcentagem(80, 130) + "%")
