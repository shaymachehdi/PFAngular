import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../user';
import {TokenStorageService} from '../auth/token-storage.service';
 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  board: string;
  errorMessage: string;
 
  roles: String [];

 
 /* constructor(private userService: UserService) { }
 
  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }*/
  users: Observable<User[]>;
  info:any;
  
   constructor(private userService: UserService , private token:TokenStorageService) { }
  
   ngOnInit() {
     this.reloadData();
  
   }
  
   deleteUsers(id:number) {
     this.userService.deleteUser(id)
       .subscribe(
         data => {
           console.log(data);
           this.reloadData();
         },
         error => console.log('ERROR: ' + error));

        
   }

  
  
   

   reloadData() {
     
     this.userService.getUsersList()
     .subscribe( data => {
       console.log(data);
      this.roles=this.token.getAuthorities();
     
       this.users =data;
     
     });
 };
}