import { Component, OnInit } from '@angular/core';
import{Document} from '../document';
import { Observable } from 'rxjs';
import {DocumentService} from '../services/Document.service';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  errorMessage: string;
  documents: Observable<Document[]>;
  constructor(private documentService: DocumentService) { }
  
  ngOnInit() {
    this.reloadData();
  }
 
  deleteDocuments(id:number) {
    this.documentService.deleteDocument(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));

       
  }
 
  

  reloadData() {
    this.documentService.getDocumentsList()
    .subscribe( data => {
      console.log(data);
      this.documents = data;
    });
};
}