// Filename: ComplexJavaScriptCode.js
// Content: Complex JavaScript Code

/*
  This code snippet demonstrates a complex JavaScript code that implements a web-based expense tracker.
  It features various functions and objects to manage expenses, categories, and generate reports.
  Please note that this is an example code and not a fully functional expense tracker.
*/

// Constants
const categories = [
  "Groceries",
  "Transportation",
  "Bills",
  "Entertainment",
  "Shopping",
  "Others"
];

// Expense object
class Expense {
  constructor(id, description, category, amount, date) {
    this.id = id;
    this.description = description;
    this.category = category;
    this.amount = amount;
    this.date = date;
  }
}

// Expense Tracker object
class ExpenseTracker {
  constructor() {
    this.expenses = [];

    // Methods
    this.addExpense = function(expense) {
      this.expenses.push(expense);
    };

    this.getTotalExpenses = function() {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    };

    this.getExpensesByCategory = function(category) {
      return this.expenses.filter(expense => expense.category === category);
    };

    this.generateExpenseReport = function() {
      console.log("Expense Report");

      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const expenses = this.getExpensesByCategory(category);

        console.log(`Category: ${category}`);
        console.log("------------------------------");
        console.log("Description   | Amount   | Date");
        console.log("------------------------------");

        for (let j = 0; j < expenses.length; j++) {
          const expense = expenses[j];
          console.log(`${expense.description}    | $${expense.amount}    | ${expense.date}`);
        }

        console.log("------------------------------");
        console.log(`Total: $${expenses.reduce((total, expense) => total + expense.amount, 0)}`);
        console.log();
      }
    };
  }
}

// Usage
const tracker = new ExpenseTracker();

tracker.addExpense(new Expense(1, "Weekly Groceries", "Groceries", 100, "2022-01-01"));
tracker.addExpense(new Expense(2, "Gasoline", "Transportation", 50, "2022-01-05"));
tracker.addExpense(new Expense(3, "Mobile Bill", "Bills", 80, "2022-01-06"));
tracker.addExpense(new Expense(4, "Movie Night", "Entertainment", 30, "2022-01-08"));
tracker.addExpense(new Expense(5, "New Shirt", "Shopping", 40, "2022-01-10"));
tracker.addExpense(new Expense(6, "Coffee", "Others", 5, "2022-01-15"));
tracker.addExpense(new Expense(7, "Dinner Out", "Entertainment", 60, "2022-01-15"));

console.log(`Total Expenses: $${tracker.getTotalExpenses()}`);
console.log();

tracker.generateExpenseReport();
