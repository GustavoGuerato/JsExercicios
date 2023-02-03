const carro1 = prompt("insira a velocidade do carro 1:");
const carro2 = prompt("insira a velocidade do carro 2:");

if (carro1 === carro2) {
  alert("os 2 tem a mesmo velocidade");
} else if (carro1 < carro2) {
  alert("o carro 2 é mais rapido");
} else if (carro2 < carro1) {
  alert("o carro 1 é mais rapido");
}
