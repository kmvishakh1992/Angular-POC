import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor( service: CourseService) { 
    this.courses=service.getCourses();
  }
  contactMethods=[
    {id:1,name:'Email'},
    {id:2,name:'Form'},

  ];
  log(x){
    console.log(x);
  }
  submit(f){
    console.log(f);
  }
  ngOnInit() {
  }
title = "test title";
courses;
}
