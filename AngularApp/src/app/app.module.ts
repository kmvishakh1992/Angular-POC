import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component'
import { SignupFormComponent } from './signup-form/signup-form.component'

import { UsernameValidators } from './signup-form/username.validators'

import { CourseService } from './course/course.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CourseService,
    UsernameValidators
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
