import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Course} from '../course'
import{TokenStorageService} from '../auth/token-storage.service'

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private baseUrl = 'http://localhost:9869/api';
  document : Document;
  toekn : TokenStorageService
 
  constructor(private http: HttpClient) { }
  
  getDocument(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/sessions/${id}/documents${id}`);
  }
  createDocument(user: object,  id : number , document : object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + `/sessions/${id}/documents`, document);
  }

  updateDocument(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/sessions/${id}/documents/${id}/`, value);
  }
 
  deleteDocument(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/sessions/${id}/documents/${id}`, { responseType: 'text' });
  }
 
  getDocumentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sessions/documents`);
  }
 
 getDocumentsById(int: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/session/sessions/${int}`);
  }


}

