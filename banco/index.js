let moneyInit = parseFloat(
  prompt("Informe o valor inicial disponivel:\n" + "Exemplo 24,00")
);
// Para converter em Real ( retorna => R$ 1.234.567,89 )
let moneyConvert = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(moneyInit);

let option;

if (isNaN(moneyInit)) {
  alert("Valor informado invalido, tente novamente.");
} else {
  do {
    option = parseFloat(
      prompt(
        "você tem disponivel: " +
          moneyConvert +
          "\n\nEscolha uma opção:" +
          "\n1 - Para depositar mais algum valor." +
          "\n2 - Para sacar algum valor." +
          "\n3 - Para encerrar o programa."
      )
    );
    switch (option) {
      case 1:
        deposito = parseFloat(
          prompt("Informe o valor a ser depositado:\n" + "Exemplo 24.00")
        );
        if (isNaN(deposito)) {
          alert("Valor informado invalido, tente novamente.");
        } else {
          moneyInit += deposito;
        }

        break;
      case 2:
        saque = parseFloat(
          prompt("Informe o valor a ser sacado:\n" + "Exemplo 24.00")
        );
        if (isNaN(saque)) {
          alert("Valor informado invalido, tente novamente.");
        } else {
          moneyInit -= saque;
        }

        break;
      case 3:
        alert("Obrigado estamos encerrando.");
        break;
      default:
        alert("Opção invalida, por favor tente novamente.");
    }
    moneyConvert = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(moneyInit);
  } while (option !== 3);

  alert("Você ficou com " + moneyConvert + " disponivel.");
}
