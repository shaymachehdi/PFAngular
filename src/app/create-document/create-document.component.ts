import { Component, OnInit } from '@angular/core';
import {DocumentService } from '../services/document.service';
import{TokenStorageService} from '../auth/token-storage.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})

  export class CreateDocumentComponent implements OnInit {
    board: string;
    errorMessage: string;
    documents: Observable<Document[]>;
    document: Document = new Document();
    submitted = false;
    token : TokenStorageService;
  
  
  id : number = 2 ;  
    constructor(private documentService: DocumentService) { }
   
    ngOnInit() {
    }
   
    newCourse(): void {
      this.submitted = false;
      this.document = new Document();
    }
   
    save() {
      this.documentService.createDocument(this.document, this.id , this.document)
        .subscribe(data => console.log(data), error => console.log(error));
      this.document = new Document();
    }
   
    onSubmit() {
      this.submitted = true;
      this.save();
    }
  
   
   
  }
  
    
  