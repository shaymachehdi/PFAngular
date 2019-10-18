import { Component, OnInit } from '@angular/core';
import {SessionService } from '../services/session.service';
import{CourseService} from '../services/course.service'
import { Observable } from 'rxjs';
import {Session} from '../session';
import {TokenStorageService} from '../auth/token-storage.service'

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  board: string;
  errorMessage: string;
  sessions: Observable<Session[]>;
  session: Session = new Session();
  submitted = false;
  
 // id : number = 2 ;
  constructor(private sessionService: SessionService , private  token : TokenStorageService) { }
  id : any = this.token.getId();  
  idCours : number =2;
  ngOnInit() {
    console.log(this.id)
     }
 
  newCourse(): void {
    this.submitted = false;
    this.session = new Session();
  }
 
  save() {
    this.sessionService.createSession(this.session, this.idCours ,this.id , this.session)
      .subscribe(data => console.log(data), error => console.log(error));
    this.session = new Session();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

 
 
}
