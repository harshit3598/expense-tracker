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

  //when this component is rendered we will take the expenses object
  ngOnInit(): void {
    this.getCompanyExpenses();
  }

  getCompanyExpenses(): void {
    this.expenses = this.expenseService.getExpenses();

    //initialized an object which gives the expenses for a particular category
    this.companyExpenses = {
      "Food":0,
      "Travel":0,
      "Equipment":0

    }

    //will add the result to the object
    Object.keys(this.expenses).forEach((key: any) => {
      this.companyExpenses[this.expenses[key].category] += this.expenses[key].cost
    });
  }
}
