const grades = [10, 8, 12, 7, 9, 11];

console.log("===== АНАЛІЗ ОЦІНОК =====");
console.log("Оцінки студента:");

for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
}

console.log("Кількість оцінок:", grades.length);
console.log("-------------------------");

function calculateAverage(grades) {
    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
    sum = sum + grades[i];
    }

    let average = sum / grades.length;
    return average;
}

function findMaxGrade(grades) {
    let max = grades[0]; // берём первую оценку как начальную

    for (let i = 1; i < grades.length; i++) {
        if (grades[i] > max) {
            max = grades[i];
        }
    }

    return max;
}

function countHighGrades(grades) {
    let count = 0;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 10) {
            count = count + 1;
        }
    }

    return count;
}

function showResults(grades) {
    console.log("Оцінки студента:", grades.join(", "));
    console.log("Кількість оцінок:", grades.length);
    console.log("Середній бал:", calculateAverage(grades));
    console.log("Найвища оцінка:", findMaxGrade(grades));
    console.log("Кількість високих оцінок:", countHighGrades(grades));
}

showResults(grades);