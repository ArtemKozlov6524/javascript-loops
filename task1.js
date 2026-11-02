console.log("=== Числа от 1 до 30 ===");
for (let i = 1; i <= 30; i++) {
console.log(i);
}

console.log("=== Только чётные числа от 1 до 30 ===");
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("=== Сумма нечётных чисел от 1 до 30 ===");
let sum = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) {
        sum = sum + i;
    }
}
console.log("Сумма нечётных чисел:", sum);