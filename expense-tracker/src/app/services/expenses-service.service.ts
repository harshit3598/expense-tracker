import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from '../models';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

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

  // addExpense(expense: Expense): Observable<Expense> {
  //   // return this.http.post<Expense>(this.expensesUrl, expense, this.httpOptions)
  //   //   .pipe(
  //   //     tap((newExpense: Expense) => console.log(`added expense w/ id=${newExpense.id}`)),
  //   //     catchError(this.handleError<Expense>('addExpense'))
  //   //   );
  // }

  // updateExpense(expense: Expense): Observable<any> {
  //   // return this.http.put(this.expensesUrl, expense, this.httpOptions)
  //   //   .pipe(
  //   //     tap(_ => console.log(`updated expense id=${expense.id}`)),
  //   //     catchError(this.handleError<any>('updateExpense'))
  //   //   );
  // }

  // deleteExpense(id: number): Observable<Expense> {
  //   // const url = `${this.expensesUrl}/${id}`;

  //   // return this.http.delete<Expense>(url, this.httpOptions)
  //   //   .pipe(
  //   //     tap(_ => console.log(`deleted expense id=${id}`)),
  //   //     catchError(this.handleError<Expense>('deleteExpense'))
  //   //   );
  // }

  // getExpensesByCategory(): Observable<any[]> {
  //   return this.http.get<any[]>(this.expensesUrl);
  // }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   // return (error: any): Observable<T> => {
  //   //   console.error(error);
  //   //   console.log(`${operation} failed: ${error.message}`);
  //   //   return of(result as T);
  //   // };
  // }
}
