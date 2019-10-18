import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseService } from '../services/Course.service';
import {TokenStorageService} from '../auth/token-storage.service'

import { User } from '../user';
import { Course } from '../course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  errorMessage: string;
  courses: Observable<Course[]>;
  users: Observable<User>; 
  constructor(private courseService: CourseService , private token : TokenStorageService ) { }
  id : number = this.token.getId();
  
  ngOnInit() {
     this.reloadData();
   }
   
   deleteCourses(c: number) {
   this.id;
    
     this.courseService.deleteCourse( this.id, c)
       .subscribe(
         data => {
           console.log(data);
           this.reloadData();
         },
         error => console.log('ERROR: ' + error));

        
   }
  
   

   reloadData() {
     this.courseService.getCoursesList()
     .subscribe( data => {
       console.log(data);
       this.courses = data;
     });
 };
}