/**
 *  Aritimeticos
 * + adição / Concatenação
 * - / *
 *  ** potenciação
 *  % Retorna o Resto da divisão
 * incremento ++
 * Decremento --
 * NaN - Not a Number
 */

/**
 * Precedencia Aritimetica
 * ()
 * **
 * * / %
 * + -
 */

//Retona um numero
const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

//Retona uma junção = 510
const num3 = "5";
const num4 = 10;
console.log(num3 + num4);

//Potencia
const num5 = 5;
const num6 = 10;
console.log(num5 ** num6);

//Retorna o resto da divisão
//Neste caso o resto de 10 / 3 é 1
const num7 = 10;
const num8 = 3;
console.log(num7 % num8);

//Precedencia
const num9 = 5;
const num10 = 2;
const num11 = 10;
console.log((num9 + num10) * num11);

//Operador de incremento
let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
console.log(contador);

let contador1 = 0;
contador1 += 2; //Contador = Contador + 2

//NaN - Not a Number
const num12 = 10;
const num13 = "Renan";
console.log(num12 * num13);

//parseInt (inteiro)
const num14 = 10;
const num15 = parseInt("5");
console.log(num14 * num15);

//parseFloat (decimais)
const num16 = 10;
const num17 = parseFloat("5");
console.log(num16 * num17);

//Number (inteiro)
const num18 = 10;
const num19 = Number("5");
console.log(num18 * num19);
