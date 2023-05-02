import { Component, Input } from '@angular/core';
import { Expense, User } from '../models';
import { ExpensesService } from '../services/expenses-service.service';
import UserService from '../services/user-service.service';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.css']
})
export class ExpensesTableComponent {
  
  expenses!: Expense[];
  selectedExpense!: Expense;
  categories: string[] = ['Food', 'Travel', 'Equipment'];
  users: User[]=[];

  constructor(private expenseService: ExpensesService, private userService: UserService) { }

  ngOnInit(): void {
    this.getExpenses();
    // this.getUsers();
  }

  getExpenses(): void {
    this.expenseService.getExpenses();

      // .subscribe(expenses => this.expenses = expenses);
  }


  onSelect(expense: Expense): void {
    this.selectedExpense = expense;
  }

  add(userId: number, category: string, description: string, cost: number): void {
    category = category.trim();
    description = description.trim();
    if (!userId || !category || !description || !cost) { return; }
    // this.expenseService.addExpense({ userId, category, description, cost } as Expense)
    //   .subscribe(expense => {
    //     this.expenses.push(expense);
    //   });
  }

  delete(expense: Expense): void {
    this.expenses = this.expenses.filter(e => e !== expense);
    // this.expenseService.deleteExpense(expense.id).subscribe();
  }

  update(): void {
    // this.expenseService.updateExpense(this.selectedExpense)
    //   .subscribe();
  }

  getTotalExpenseByCategory(category: string): number {
    const categoryExpenses = this.expenses.filter(expense => expense.category === category);
    return categoryExpenses.reduce((total, expense) => total + expense.cost, 0);
  }

  getTotalExpense(): number {
    return this.expenses.reduce((total, expense) => total + expense.cost, 0);
  }

  getFullName(userId: number): string {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      return `${user.firstName} ${user.lastName}`;
    }
    return '';
  }
}
