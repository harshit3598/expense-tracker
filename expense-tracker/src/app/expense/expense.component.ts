import { Component } from '@angular/core';
import { ExpensesService } from '../services/expenses-service.service';
import { Expense, User } from '../models';
import UserService from '../services/user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {
  users: any;
  categories: String[] = ['Food', 'Travel', 'Equipment'];
  expenses!: any;
  selectedExpense: Expense = {
    id: 0,
    userId: 0,
    category: '',
    description: '',
    cost: 0
  };
  expenseForm!: FormGroup;

  constructor(private usersService: UserService, private expenseService: ExpensesService) { }

  ngOnInit(): any {
    this.users = this.usersService.getUsers();
    console.log(this.users);

    this.getExpenses();

    this.expenseForm = new FormGroup({
      id: new FormControl(null),
      userId: new FormControl(null),
      category: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      cost: new FormControl(null, Validators.required),
    })

  }

  getExpenses(): void {
    this.expenses = this.expenseService.getExpenses();
  }

  get userKey() {
    return Object.keys(this.users);
  }

  get expensesKey() {
    return Object.keys(this.expenses);
  }

  modifyExpense(): void {

    var id: number;
    if (this.expenseForm.get('id')?.value == null) {
      id = Math.floor(Math.random() * 100000);
    }
    else {
      id = this.expenseForm.get('id')?.value
    }
    var expense = {
      id: id,
      userId: this.expenseForm.get('userId')?.value,
      category: this.expenseForm.get('category')?.value,
      description: this.expenseForm.get('description')?.value,
      cost: this.expenseForm.get('cost')?.value
    }

    this.expenses[id] = expense;

    let userToBeUpdated = this.users[expense.userId];
    userToBeUpdated.totalExpenses = this.calculateUserExpense(expense.userId);
    this.usersService.updateUser(userToBeUpdated);


    this.clearForm();


  }

  editExpense(expense: any) {
    this.expenseForm.get('id')?.setValue(expense['id']);
    this.expenseForm.get('userId')?.setValue(expense['userId']);
    this.expenseForm.get('category')?.setValue(expense['category']);
    this.expenseForm.get('description')?.setValue(expense['description']);
    this.expenseForm.get('cost')?.setValue(expense['cost']);

  }

  deleteExpense(expense: Expense): void {
    delete this.expenses[expense.id]

    let userToBeUpdated = this.users[expense.userId];
    userToBeUpdated.totalExpenses = this.calculateUserExpense(expense.userId);
    this.usersService.updateUser(userToBeUpdated);
  }

  getFullName(userId: any): string {
    const user = this.users[userId];
    if (user) {
      return `${user.firstName} ${user.lastName}`;
    } else {
      return '';
    }
  }

  clearForm() {
    this.expenseForm.reset();
  }

  calculateUserExpense(userId: any): number {
    let totalExpense = 0;
    Object.keys(this.expenses).forEach((key: any) => {
      if (this.expenses[key].userId == userId) {
        totalExpense += this.expenses[key].cost
      }
    });


    return totalExpense;

  }

}


