const Numberinput = parseFloat(prompt("Qual numero vc quer saber a tabuada"));
let tableMulti = parseInt(0);
let result = "";

if (isNaN(Numberinput)) {
  alert("você digitou algo errado!");
} else {
  for (let i = 1; i <= 20; i++) {
    tableMulti = Numberinput * i;
    result += Numberinput + "x" + i + "=" + tableMulti + "\n";
  }
  alert("a tabuada do numero" + Numberinput + "\n\n" + result);
}
