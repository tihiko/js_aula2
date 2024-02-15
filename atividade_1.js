// Solicita dois números ao usuário
let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");

// Converte os valores de string para números
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Verifica se a conversão foi bem-sucedida
if (!isNaN(numero1) && !isNaN(numero2)) {
  // Realiza a soma
  var resultado = numero1 + numero2;

  // Exibe o resultado no console
  console.log("A soma dos números é: " + resultado);
} else {
  // Exibe uma mensagem de erro se a entrada não for válida
  console.log("Por favor, digite números válidos.");
}