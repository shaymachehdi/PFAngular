import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import{TokenStorageService} from '../auth/token-storage.service'
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private baseUrl = 'http://localhost:9869/api';
  document : Document;
  toekn : TokenStorageService
 
  constructor(private http: HttpClient) { }
  
  getSession(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/sessions/{id}/users/{userId}"`);
  }
  createSession(user: object, idCours : number , id : number , session : object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + `/sessions/${idCours}/users/${id}`, session);
  }

  updateSession(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/sessions/${id}`, value);
  }
 
  deleteSession(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/sessions`, { responseType: 'text' });
  }
 
  getSessionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sessions`);
  }
 
 getSessionById(int: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/session/sessions/${int}`);
  }


}

