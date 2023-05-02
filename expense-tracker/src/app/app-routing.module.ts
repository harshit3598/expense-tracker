import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyExpenseComponent } from './company-expense/company-expense.component';
import { ExpenseComponent } from './expense/expense.component';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserTableComponent },
  {
    path: 'expenses', component: ExpenseComponent,
  },
  { path: 'company-expenses', component: CompanyExpenseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
