import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';
 
@Component({
  selector: 'search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
 
  id: number;
  users: User[];
 
  constructor(private dataService: UserService) { }
 
  ngOnInit() {
    this.id = 0;
  }
 
  private searchUsers() {
    this.dataService.getUsersById(this.id)
      .subscribe(users => this.users = users);
  }
 
  onSubmit() {
    this.searchUsers();
  }
}