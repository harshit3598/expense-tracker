import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  //place where data for expenses are stored and manipulated
  expensesData:any = {

    "1": { "id": 1, "userId": 1, "category": "Food", "description": "Lunch", "cost": 100 },
    "2": { "id": 2, "userId": 1, "category": "Travel", "description": "Gas", "cost": 200 },
    "3": { "id": 3, "userId": 2, "category": "Equipment", "description": "Laptop", "cost": 500 }
  }

  constructor() { }

  getExpenses(): any {
    return this.expensesData;
  }

  //edits the expenses
  editExpenses(expense: any, expenses: any, expenseForm: any): any{
    expenseForm.get('id')?.setValue(expense['id']);
    expenseForm.get('userId')?.setValue(expense['userId']);
    expenseForm.get('category')?.setValue(expense['category']);
    expenseForm.get('description')?.setValue(expense['description']);
    expenseForm.get('cost')?.setValue(expense['cost']);
    expenses[expense.id] = expense;
    this.expensesData = expenses;
  }

  //deletes the expenses
  deleteExpense(expense: any, expenses: any, users: any): any{
    delete expenses[expense.id];
    this.expensesData = expenses;
    let userToBeUpdated = users[expense.userId];
    userToBeUpdated.totalExpenses = this.calculateUserExpense(expenses, expense.userId);
    return userToBeUpdated
  }

  //deletes the expenses by userId
  deleteExpenseByUserId(userId: any): any{
    let expenses = this.getExpenses();
    Object.keys(expenses).forEach((key: any) => {
      if (expenses[key].userId == userId) {
        delete expenses[key];
      }
    });
    this.expensesData = expenses;
    return expenses;
  }

  //to calculate totalExpense for a user
  calculateUserExpense(expenses: any, userId: any): number {
    let totalExpense = 0;

    //iterate through expenses keys which helps in determining the cost for totalExpenses
    Object.keys(expenses).forEach((key: any) => {
      if (expenses[key].userId == userId) {
        totalExpense += expenses[key].cost
      }
    });

    return totalExpense;

  }

  //modifies the expenses
  modifyExpense(expenseForm: any, expenses: any, isValid: any, users: any): any{
    var id: number;
    if (expenseForm.valid) {
      isValid = false;
      // to add new data in if part or updated data inn else part
      if (expenseForm.get('id')?.value == null) {
        id = Math.floor(Math.random() * 1000000);
      }
      else {
        id = expenseForm.get('id')?.value
      }
      var expense = {
        id: id,
        userId: expenseForm.get('userId')?.value,
        category: expenseForm.get('category')?.value,
        description: expenseForm.get('description')?.value,
        cost: expenseForm.get('cost')?.value
      }
      expenses[id] = expense;
      this.expensesData = expenses;
      let userToBeUpdated = users[expense.userId];
      userToBeUpdated.totalExpenses = this.calculateUserExpense(expenses, expense.userId);
      return userToBeUpdated;
    }
    else {
      isValid = true;
    }
  }

}
