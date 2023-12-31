import { Component, OnInit } from '@angular/core';

// Model
import { UserModel } from '../../models/user.model';

// Service
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users!: UserModel[];
  constructor(
    private usersService: UserService
   ) { }
  
  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(users => this.users = users)
  }

  ngOnInit() {
    this.getUsers()
  }

}