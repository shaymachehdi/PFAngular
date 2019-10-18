import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CourseService } from '../services/Course.service';
import { Observable } from 'rxjs';
import { User } from '../user';
import { Course } from '../course';
import {TokenStorageService} from '../auth/token-storage.service'
@Component({
  selector: 'app-pm',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.css']
})
export class PmComponent implements OnInit {
  board: string;
  errorMessage: string;
  courses: Observable<Course[]>;
  course: Course = new Course();
  submitted = false;
  
 // id : number = 2 ;
  constructor(private courseService: CourseService , private  token : TokenStorageService) { }
  id : any = this.token.getId();  
  
  ngOnInit() {
    console.log(this.id)
     }
 
  newCourse(): void {
    this.submitted = false;
    this.course = new Course();
  }
 
  save() {
    this.courseService.createCourse(this.course, this.id , this.course)
      .subscribe(data => console.log(data), error => console.log(error));
    this.course = new Course();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

 
 
}

  
