let varA = "A";
let varB = "B";
let varC = "C";

const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

//Ou poderia ser Feito assim

// let varA = "A";
// let varB = "B";
// let varC = "C";

// [varA, varB, varC] = [varB, varC, varA]

// console.log(varA, varB, varC);
