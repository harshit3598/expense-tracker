import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import UserService from './services/user-service.service';
import { ExpensesService } from './services/expenses-service.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CompanyExpenseComponent } from './company-expense/company-expense.component';
import { ExpenseComponent } from './expense/expense.component';


@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    CompanyExpenseComponent,
    ExpenseComponent,
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
