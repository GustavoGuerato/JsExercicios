do {
  menu = prompt(
    "Escolha a operação que deseja realizar\n" +
      "\n1 - Área do triângulo" +
      "\n2 - Área do quadrado" +
      "\n3 - Área do retângulo" +
      "\n4 - Área do trapézio" +
      "\n5 - Área do círculo" +
      "\n6 - Sair"
  );
  switch (menu) {
    case "1":
      function triângulo(base, altura) {
        let base = parseFloat(prompt("informe o valor da base"));
        let altura = parseFloat(prompt("informe o valor da altura"));
        let resultado = (base * altura) / 2;
        return alert("o resultado é" + resultado);
      }
      break;
    case "2":
      function quadrado(lado, lado) {
        let lado = parseFloat(prompt("informe o valor do lado"));
        let resultado = lado * 2;
        return alert("o resultado é " + resultado);
      }
      break;
    case "3":
      function retângulo(base, altura) {
        let base = parseFloat(prompt("informe o valor da base"));
        let altura = parseFloat(prompt("informe o valor da altura"));
        let resultado = base * altura;
        return alert("o resultado é" + resultado);
      }
      break;
    case "4":
      function trapézio(baseMaior, baseMenor, altura) {
        let baseMaior = parseFloat(prompt("informe o valor da maior base"));
        let baseMenor = parseFloat(prompt("informe o valor da menor base"));
        let altura = parseFloat(prompt("informe o valor da altura"));
        let resultado = ((baseMaior + baseMenor) * altura) / 2;
        return alert("resultado é" + resultado);
      }
      break;
    case "5":
      function circulo(raio, pi = 3.14) {
        let raio = parseFloat(prompt("informe o valor do raio"));
        let resultado = pi * raio * 2;
        return alert("resultado é" + resultado);
      }
      break;
    case "6":
      {
        alert("fechando o programa...");
      }
      break;
    default:
      alert("Opção inválida");
      break;
  }
} while (menu !== "6");
