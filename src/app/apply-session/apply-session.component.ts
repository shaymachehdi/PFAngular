import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {SessionService} from '../services/session.service';
import{Session} from '../session'
@Component({
  selector: 'app-apply-session',
  templateUrl: './apply-session.component.html',
  styleUrls: ['./apply-session.component.css']
})
export class ApplySessionComponent implements OnInit {

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