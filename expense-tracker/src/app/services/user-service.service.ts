import { Injectable } from '@angular/core';
import { User } from '../models';
import { FormGroup } from '@angular/forms';

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

  //add the user
  add(userForm: FormGroup, isDisabled:boolean, users:any) {
    if (userForm.valid) {
      isDisabled = false;
      //To generate the id for the user
      var id: number = Math.floor(Math.random() * 1000000);
      var firstName = userForm.get('firstName')?.value;
      var lastName = userForm.get('lastName')?.value;
      users[id] = { id, firstName, lastName, totalExpenses: 0 };
    }
    else {
      //if the Add button is clicked and still values are 
      isDisabled = true;
    }
  }

  //delete the user
  deleteUser(users:any, id:number){
    delete users[id];
  }

  //update user after updating the total expense value of the user while updating or deleting expenses
  updateTotalExpenseForUser(user: User): void {
    this.usersData[user.id] = user;
  }

  //update the user
  updateUser(users: any, user:any){
    if(user.id==0 && user.firstName=='' && user.lastName==''){
      return
    }
    users[user.id] = { id: user.id, firstName: user.firstName, lastName: user.lastName, totalExpenses: user.totalExpenses };
  }
}
