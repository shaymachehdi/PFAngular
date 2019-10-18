import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { User } from '../user';


 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 user: any;
  private userUrl = 'http://localhost:9869/api/test/user';
  private pmUrl = 'http://localhost:9869/api/test/pm';
  private adminUrl = 'http://localhost:9869/api/test/admin';
  private baseUrl = 'http://localhost:9869/api';
    constructor(private http: HttpClient) { }
 
  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }
 
  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }
 
  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

getUser(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/user/users${id}`);
  }
 
  createUser(user: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + `/users`, user);
  }
 
  updateUser(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/user/users/${id}`, { responseType: 'text' });
  }
 
  
  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/users`)
  }
 
  getUsersById(int: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/users/${int}`);
  }
 
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }





}