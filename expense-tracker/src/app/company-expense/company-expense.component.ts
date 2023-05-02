import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../services/expenses-service.service';

@Component({
  selector: 'app-company-expense',
  templateUrl: './company-expense.component.html',
  styleUrls: ['./company-expense.component.css']
})
export class CompanyExpenseComponent implements OnInit {
  companyExpenses: any[]=[];

  constructor(private expenseService: ExpensesService) { }

  ngOnInit(): void {
    this.getCompanyExpenses();
  }

  getCompanyExpenses(): void {
    // this.expenseService.getExpensesByCategory()
    //   .subscribe(companyExpenses => {
    //     this.companyExpenses = companyExpenses;
    //   });
  }
}
