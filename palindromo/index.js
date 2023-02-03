const word = prompt("boa tarde envie uma mesnagem para verificarmos");
let reverseword = "";

if (reverseword == word) {
  alert(
    "a palavra" +
      word +
      "é um palindromo \n\n" +
      "pois se voce escrever a mensagem de tras para frente ou o inverso ela continua igual"
  );
} else {
  alert(
    " a palavra " +
      word +
      "não é um palindromo \n\n" +
      "pois se voce escrever a palavra de tras para frente muda a palavra"
  );
}
