import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//place where users data is stored
export default class UserService {
  usersUrl: any
  usersJsonArray = []
  usersData: any = {
    "1": {
      "id": "1",
      "firstName": "John",
      "lastName": "Doe",
      "totalExpenses": 300
    },
    "2": {
      "id": "2",
      "firstName": "Jane",
      "lastName": "Doe",
      "totalExpenses": 500
    },
    "3": {
      "id": "3",
      "firstName": "Bob",
      "lastName": "Smith",
      "totalExpenses": 0
    }
  };

  constructor() {

  }

  //gets the list of user
  getUsers(): any {
    return this.usersData;
  }

  //gets users, add users, update users and delete users
  getUser(id: number): User {
    return this.usersData.get(id);
  }


  addUser(user: User): User {
    return this.usersData.set(user.id, { id: user.id, firstName: user.firstName, lastName: user.lastName, totalExpense: this.usersData.totalExpense });
  }

  updateUser(user: User): void {
    this.usersData[user.id] = user;
  }

  // deleteUser(id: number): Observable < User > {
  //   const url = `${this.usersUrl}/${id}`;
  //   return this.http.delete<User>(url);
  // }
}
