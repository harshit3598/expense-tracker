import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyExpenseComponent } from './company-expense/company-expense.component';
import { ExpenseComponent } from './expense/expense.component';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
import { EditExpenseComponent } from './expense/edit-expense/edit-expense.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserTableComponent },
  {
    path: 'expenses', component: ExpenseComponent, children:
      [
        { path: 'add', component: AddExpenseComponent },
        { path: ':expenseId', component: EditExpenseComponent }
      ]
  },
  { path: 'expenses-table', component: ExpensesTableComponent },
  { path: 'company-expenses', component: CompanyExpenseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
