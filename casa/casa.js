let menu;
let arr = [];

do {
  menu = Number(
    prompt(
      "Imóveis salvos até o momento: \n" +
        arr.length +
        "\nO que gostaria de fazer? \n 1- Cadastrar imóvel \n 2- Mostrar imóveis cadastrados \n 3- Alugar imóvel \n 4- Sair"
    )
  );
  switch (menu) {
    case 1:
      const imovel = {};
      imovel.nome = prompt("Insira o nome do imóvel.");
      imovel.proprietario = prompt("Insira o nome do proprietário.");
      imovel.quartos = Number(prompt("Insira o número de quartos."));
      imovel.banheiros = Number(prompt("Insira o número de banheiros."));
      imovel.garagem = prompt("O imóvel possui garagem? Sim/Não");

      const confirm = function confirm() {
        let confirmacao = prompt(
          "Nome do imóvel: " +
            imovel.nome +
            "\nProprietário: " +
            imovel.proprietario +
            "\nQuartos: " +
            imovel.quartos +
            "\nBanheiros: " +
            imovel.banheiros +
            "\nGaragem: " +
            imovel.garagem +
            "\n\n Deseja cadastrar este imóvel? Sim/Não"
        );
        if (confirmacao === "Sim") {
          arr.unshift(imovel.nome);
          alert("Imóvel salvo!");
        } else {
          alert("Cadastro cancelado.");
        }
      };
      confirm();
      break;
    case 2:
      alert("Imóveis cadastrados: " + arr);
      break;
    case 3:
      const aluguel = function aluguel() {
        let imovelAlugado = prompt("Insira o imóvel a ser alugado.");
        let indice = arr.indexOf(imovelAlugado);
        if (arr.includes(imovelAlugado) === true) {
          arr.splice(indice, 1);
          alert("Imóvel alugado com êxito.");
        } else {
          alert("Imóvel não encontrado.");
        }
      };
      aluguel();
      break;
    case 4:
      alert("Encerrando...");
      break;
    default:
      alert("Inserção inválida.");
  }
} while (menu !== 4);
