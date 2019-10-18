import { Component, OnInit } from '@angular/core';
import{Session} from '../session';
import { Observable } from 'rxjs';
import {SessionService} from '../services/session.service';
@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  errorMessage: string;
  sessions: Observable<Session[]>;
  constructor(private sessionService: SessionService) { }
  
  ngOnInit() {
    this.reloadData();
  }
 
  deleteSessions(id:number) {
    this.sessionService.deleteSession(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));

       
  }
 
  

  reloadData() {
    this.sessionService.getSessionsList()
    .subscribe( data => {
      console.log(data);
      this.sessions = data;
    });
};
}