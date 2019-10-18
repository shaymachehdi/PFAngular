import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';
 
import { UsersListComponent } from '../users-list/users-list.component';
 
@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 
  @Input() user: User;
 
  constructor(private userService: UserService, private listComponent: UsersListComponent) { }
 
  ngOnInit() {
  }
 
  updateActive() {
    this.userService.updateUser(this.user.id,
      { name: this.user.name, username: this.user.username, email: this.user.email , roles: this.user.roles , password: this.user.password   })
      .subscribe(
        data => {
          console.log(data);
          this.user = data as User;
        },
        error => console.log(error));
  }
 
  deleteUser() {
    this.userService.deleteUser(this.user.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}