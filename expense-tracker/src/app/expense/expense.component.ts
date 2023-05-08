import { Component } from '@angular/core';
import { ExpensesService } from '../services/expenses-service.service';
import { Expense } from '../models';
import UserService from '../services/user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {
  users: any;
  //defining and declaring the categories
  categories: String[] = ['Food', 'Travel', 'Equipment'];
  //expenses object gives all the details which contains UserId, expenses in different categories with
  //their description
  expenses!: any;

  // a FormGroup to validate the values, fetch the values, add the values in a Form
  expenseForm!: FormGroup;
  isValid: boolean = false;

  constructor(private usersService: UserService, private expenseService: ExpensesService) { }

  //runs to autopopulate the users variable and expenses variable
  //which helps html to get the data they need 
  ngOnInit(): any {
    this.users = this.usersService.getUsers();
    this.getExpenses();

    this.expenseForm = new FormGroup({
      id: new FormControl(null),
      userId: new FormControl('', Validators.required),
      category: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      cost: new FormControl(null, Validators.required),
    })

  }

  //gets the expennses data
  getExpenses(): void {
    this.expenses = this.expenseService.getExpenses();
  }

  get userKey() {
    return Object.keys(this.users);
  }

  get expensesKey() {
    return Object.keys(this.expenses);
  }

  //modifies the expenses
  modifyExpense(): void {

    let userToBeUpdated = this.expenseService.modifyExpense(this.expenseForm, this.expenses, this.isValid, this.users)
    this.usersService.updateTotalExpenseForUser(userToBeUpdated);
      //to clear the form
      this.clearForm();
  }

  //to edit the expenses
  editExpense(expense: any) {
    this.expenseService.editExpenses(expense, this.expenses, this.expenseForm);
  }

  // to delete the expenses based on the expense
  deleteExpense(expense: Expense): void {
    let userToBeUpdated = this.expenseService.deleteExpense(expense, this.expenses, this.users);
    this.usersService.updateTotalExpenseForUser(userToBeUpdated);
  }

  //writes the full name
  getFullName(userId: any): string {
    const user = this.users[userId];
    if (user) {
      return `${user.firstName} ${user.lastName}`;
    } else {
      return '';
    }
  }

  // to clear the form
  clearForm() {
    this.expenseForm.reset();
  }

}


