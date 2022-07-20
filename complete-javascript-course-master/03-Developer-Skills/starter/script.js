// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Section 5 challenge

const dataOne = [17, 21, 23];
const dataTwo = [12, -5, 0, 4];

const printForecast = array => {
    let finalString = '... ';
    for (let i = 0; i < array.length; i++) {
        finalString += `${array[i]}°C in ${i} days... `;
    }
    console.log(finalString);
};

printForecast(dataTwo);
