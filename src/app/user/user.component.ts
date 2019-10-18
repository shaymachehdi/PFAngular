import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CourseService } from '../services/Course.service';
import { Course } from '../course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  board: string;
  errorMessage: string;
  courses: Observable<Course[]>;
  constructor(private courseService: CourseService) { }
 
  ngOnInit() {
    this.reloadData();
   
  }
  
    reloadData() {
      this.courseService.getCoursesList()
      .subscribe( data => {
        console.log(data);
        this.courses = data;
      });
    }
}