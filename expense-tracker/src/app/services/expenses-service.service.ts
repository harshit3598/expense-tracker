import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from '../models';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  //place where data for expenses are stored and manipulated
  expensesData = {

    "1": { "id": 1, "userId": 1, "category": "Food", "description": "Lunch", "cost": 100 },
    "2": { "id": 2, "userId": 1, "category": "Travel", "description": "Gas", "cost": 200 },
    "3": { "id": 3, "userId": 2, "category": "Equipment", "description": "Laptop", "cost": 500 }
  }


  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getExpenses(): any {
    return this.expensesData;
  }

}
