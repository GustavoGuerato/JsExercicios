let option = prompt(
  "escolha uma opção\nprimeira opção\nsegunda opção\nterceira opção\n quarta opção\nquinta opção"
);
let choice;
alert("você escolheu a opção " + option);
do {
  prompt(
    "escolha uma opção\nprimeira opção\nsegunda opção\nterceira opção\n quarta opção\nquinta opção"
  );
  alert("você escolheu a opção " + choice);
} while (option != 5);
