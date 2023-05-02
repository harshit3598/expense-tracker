import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../services/expenses-service.service';

@Component({
  selector: 'app-company-expense',
  templateUrl: './company-expense.component.html',
  styleUrls: ['./company-expense.component.css']
})
export class CompanyExpenseComponent implements OnInit {
  expenses: any;
  companyExpenses: any;

  constructor(private expenseService: ExpensesService) { }

  ngOnInit(): void {
    this.getCompanyExpenses();
  }

  getCompanyExpenses(): void {
    this.expenses = this.expenseService.getExpenses();

    this.companyExpenses = {
      "Food":0,
      "Travel":0,
      "Equipment":0

    }

    Object.keys(this.expenses).forEach((key: any) => {
      this.companyExpenses[this.expenses[key].category] += this.expenses[key].cost
    });

    console.log(this.companyExpenses);
    

  }
}
