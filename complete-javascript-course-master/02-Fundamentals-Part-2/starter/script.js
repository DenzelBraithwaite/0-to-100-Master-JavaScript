'use strict';

// // Coding challenge #1

const calcAverage = (numOne, numTwo, numThree) => (numOne + numTwo + numThree) / 3;
let dolphinsScore = calcAverage(44, 23, 71);
let koalasScore = calcAverage(65, 54, 49);

const whoWon = (dolphinAvg, koalaAvg) => {
    if (dolphinAvg >= 2 * koalaAvg) {
        console.log(`Dolphins win🏆 ${dolphinAvg} to ${koalaAvg}!!!`)
    } else if (koalaAvg >= 2 * dolphinAvg) {
        console.log(`Koalas win🏆 ${koalaAvg} to ${dolphinAvg}!!!`)
    } else {
        console.log("Yall suck...")
    }
};

// First test
whoWon(dolphinsScore, koalasScore);

// Second test
dolphinsScore = calcAverage(85, 54, 41);
koalasScore = calcAverage(23, 34, 27);
whoWon(dolphinsScore, koalasScore);

// Coding challenge #2

const tipCalculator = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let bills = [125, 555, 44];
let tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

// Coding challenge #3

const calcBMI = (person) => {
    return bmi = weight / (height ** 2)
}

const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.68,
    calcBMI: function() {
        return this.bmi = this.weight / (this.height ** 2)
    }
}

const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function() {
        return this.bmi = this.weight / (this.height ** 2)
    }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI is higher, with a BMI of ${mark.bmi}.`)
} else {
    console.log(`${john.fullName}'s BMI is higher, with a BMI of ${john.bmi}.`)
}

// Coding challenge #4

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
tips = [];
totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = tipCalculator(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const newcalcAverage = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
};

console.log(newcalcAverage(totals));
console.log(newcalcAverage(tips));