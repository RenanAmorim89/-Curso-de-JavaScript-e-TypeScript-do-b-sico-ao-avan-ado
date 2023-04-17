const nome = "Renan";
const sobrenome = "Amorim";
const idade = 33;
const peso = 75;
const altura = 1.75;
let imc;
let anoNacimento;

imc = peso / (altura * altura);
console.log(imc);

anoNacimento = idade - 2023;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNacimento}`);
