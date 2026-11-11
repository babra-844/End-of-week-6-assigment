
// Collect user input
let totalBudget = Number(prompt("Enter your total budget (KES):"));

let totalExpenses = Number(prompt("Enter your total expenses (KES):"));

// Calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Call the function
let remainingBalance = calculateBalance(totalBudget, totalExpenses);

// Display results
console.log("===== SpendWise Budget Summary =====");
console.log("Total Budget: KES " + totalBudget);
console.log("Total Expenses: KES " + totalExpenses);
console.log("Remaining Balance: KES " + remainingBalance);
console.log("====================================");
