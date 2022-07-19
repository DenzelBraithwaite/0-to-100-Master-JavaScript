// Number
let age = 23;

// String
let firstName = 'Jonas';

// Boolean
let rainyDay = true;

// Undefined
let children;

// Null
let noValue = null;

// Symbol (ES6 - 2015)
const symbolExample = Symbol('sybol');

// Bigint, either appen n to a string or call BigInt()
const hugeNumber = 98492109318391012029n;
const alsoHuge = BigInt(98492109318391012029);

// Object
const objectExample = {key: 'value'};

// 1st Challenge

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markBMIHigher = markBMI > johnBMI;

console.log(markBMI, johnBMI, markBMIHigher);

// 2nd Challenge

if (markBMIHigher) {
    console.log(`Mark's BMI is higher with a BMI of ${markBMI}`)
} else {
    console.log(`John's BMI is higher with a BMI of ${johnBMI}`)
};

// 3rd Challenge

const dolphinScore = (96 + 108 + 89) / 3;
const koalaScore = (88 + 91 + 110) / 3;

if ( dolphinScore === koalaScore && dolphinScore >=100 &&  koalaScore >= 100) {
    console.log("You both played some fantastic games!")
} else if (dolphinScore > koalaScore && dolphinScore >= 100) {
    console.log("Dolphins take the win here!")
} else if (koalaScore > dolphinScore && koalaScore >= 100){
    console.log("Koalas are here to stay, they win!!!")
} else {
    console.log("You both played a terrible game tonight... you should be ashamed")
}

// 4th Challenge

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
const total = bill + tip
console.log(`The meal came up to $${bill} plus a tip of $${tip}, that brings you to a total of$${total}.`)