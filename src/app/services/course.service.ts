import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Course} from '../course'
import{TokenStorageService} from '../auth/token-storage.service'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost:9869/api';
  course : Course;
  toekn : TokenStorageService
 
  constructor(private http: HttpClient) { }
  
  getCourse(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/users/${id}/cours${id}`);
  }
  createCourse(user: object,  id : number , cours : object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + `/users/${id}/cours`, cours);
  }

  updateCourse(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/users/${id}/cours/${id}/`, value);
  }
 
  deleteCourse(id: number , coursId : number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}/cours/${coursId}`, { responseType: 'text' });
  }

  getCoursesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cours`);
  }
 
 getCoursesById(int: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/users/${int}`);
  }
 
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }





}

