let nome = window.prompt("Whats Your First Name");
let SegundoNome = window.prompt("Whats Your Second Name");
let Nascimento = window.prompt("Put Your  Birthday");
let Estudos = window.prompt("coloque seus estudos aqui");
console.log(nome);
console.log(SegundoNome);
console.log(Nascimento);
console.log(Estudos);
alert(
  "recruta cadastrado com Sucesso\n" +
    "\nNome completo: " +
    nome +
    SegundoNome +
    "\nCampo  De Estudo: " +
    Estudos +
    "\nIdade: " +
    (2022 - Nascimento)
);
