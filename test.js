// Array original
let array1 = [1, 2, 3, 4, 5,6,7,8];

// Nuevo array para sobrescribir
let array2 = [6, 7, 8, 9, 10];

// Sobrescribe los elementos de array1 con los de array2 desde la posición 0
array1.splice(0, array1.length, ...array2);

console.log(array1);  // Resultado: [6, 7, 8, 9, 10]
