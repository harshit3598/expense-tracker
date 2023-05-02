import { Component } from '@angular/core';
import { User, Expense } from '../models';
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



  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
    })

    this.users =this.userService.getUsers();
    // console.log(this.users);

  }

  onSelect(user: any): void {
    this.selectedUser = user;
  }

  add(): void {

    if (this.userForm.valid) {
      this.isDisabled = false;
      var id: number = Math.floor(Math.random() * 100);
      var firstName = this.userForm.get('firstName')?.value;
      var lastName = this.userForm.get('lastName')?.value;
      this.users[id] = { id, firstName, lastName, totalExpenses: 0 };
    }
    else {
      this.isDisabled = true;
    }

  }

  get key() {
    return Object.keys(this.users);
  }

  delete(id: any): void {
    delete this.users[id];
  }

  update(user: any): void {
    this.users[user.id] = { id: user.id, firstName: user.firstName, lastName: user.lastName, totalExpenses: user.totalExpenses };
    console.log(this.users);

  }
}