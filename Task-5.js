// function monthlySavings(arr, livingCost){
//     if(Array.isArray(arr) && typeof(livingCost) === 'number'){
//         let taxArr = arr.map(function(ar){return ar >= 3000 ? ((20/100) * ar) : 0 });
        
//         let totalIncome = 0;
//         let totalTax = 0;
//         let savings = 0;

//         for(let i of arr){
//             totalIncome += i;
//         }

//         for(let i of taxArr){
//             totalTax += i;
//         }
        
//         savings = totalIncome - (totalTax + livingCost);
//         return savings >= 0 ? savings : 'earn more'; 
//     }
//     else{
//         return 'invalid input';
//     }
// }

function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) && typeof (livingCost) === 'number') {
        let totalIncomeArr = arr.map(function (ar) { return ar >= 3000 ? ar - ((20 / 100) * ar) : ar });
        let savings = 0;
        let totalIncome = 0;

        for (let i of totalIncomeArr) {
            totalIncome += i;
        }

        savings = totalIncome - livingCost;
        return savings >= 0 ? savings : 'earn more';
    }
    else {
        return 'invalid input';
    }
}

const arr = [ 1000 , 2000 , 3000 ];
const livingCost = 5400;

// const arr = [ 900 , 2700 , 3400];
// const livingCost = 10000;

// const arr = 100;
// const livingCost = [ 900 , 2700 , 3400];

// const arr = [ 1000 , 2000 , 2500 ];
// const livingCost = 5000;

console.log(monthlySavings(arr, livingCost));