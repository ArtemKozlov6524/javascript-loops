let sum = 0;
let i = 1;
let count = 0;

while (sum <= 100) {
    sum = sum + i;
    count = count + 1;
    i = i + 1;
}

console.log("Сумма:", sum);
console.log("Количество добавленных чисел:", count);