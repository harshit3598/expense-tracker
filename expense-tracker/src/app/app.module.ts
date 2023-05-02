import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { CompanyTableComponent } from './company-table/company-table.component';
import UserService from './services/user-service.service';
import { ExpensesService } from './services/expenses-service.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CompanyExpenseComponent } from './company-expense/company-expense.component';
import { Routes } from '@angular/router';
import { ExpenseComponent } from './expense/expense.component';
import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
import { EditExpenseComponent } from './expense/edit-expense/edit-expense.component';



@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    ExpensesTableComponent,
    CompanyTableComponent,
    CompanyExpenseComponent,
    ExpenseComponent,
    AddExpenseComponent,
    EditExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, ExpensesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
