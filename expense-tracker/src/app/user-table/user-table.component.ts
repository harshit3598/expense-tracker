import { Component } from '@angular/core';
import { User } from '../models';
import { ExpensesService } from '../services/expenses-service.service';
import UserService from "../services/user-service.service"
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  public users: any;
  selectedUser: User = { id: 0, firstName: '', lastName: '', totalExpenses: 0 };
  newUser: User = { id: 0, firstName: '', lastName: '', totalExpenses: 0 };
  userForm!: FormGroup;
  isDisabled: boolean = false;

  //initialize the service to make the changes
  constructor(private userService: UserService, private expenseService: ExpensesService) { }

  async ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
    })

    this.users =this.userService.getUsers();
  }

  //to get the user which is selected
  onSelect(user: any): void {
    this.selectedUser = user;
  }

  add(): void {
    //Added validations for the form
    this.userService.add(this.userForm, this.isDisabled, this.users);
  }

  //to obtain the keys of users which will be used to iterate in the array with the values
  get key() {
    return Object.keys(this.users);
  }

  //to delete the users
  delete(id: any): void {
    this.userService.deleteUser(this.users, id);
    this.expenseService.deleteExpenseByUserId(id);
  }

  //to update the users
  update(user: any): void {
    //to prevent from updating blank user
    this.userService.updateUser(this.users, user);
    
  }
}