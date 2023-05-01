import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { CompanyTableComponent } from './company-table/company-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    ExpensesTableComponent,
    CompanyTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
