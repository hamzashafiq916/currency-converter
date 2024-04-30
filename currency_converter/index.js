import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.94,
    CANDOLLAR: 1.38,
    INR: 83.69,
    PKR: 278.12,
    AED: 3.67,
    GBP: 0.8,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: `list`,
        choices: [`USD`, `EUR`, `CANDOLLAR`, `INR`, `PKR`, `AED`, `GBP`],
    },
    {
        name: "to",
        message: "Enter to currency",
        type: `list`,
        choices: [`USD`, `EUR`, `CANDOLLAR`, `INR`, `PKR`, `AED`, `GBP`],
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: `number`,
    },
]);
let fromAmount = currency[user_answer.from]; //exchange rate
let toAmount = currency[user_answer.to]; //exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
// console.log(fromamount);
// console.log(toamount);
// console.log(amount);
