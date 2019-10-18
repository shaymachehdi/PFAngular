import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
 

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { LoginTestComponent } from './login-test/login-test.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CourseComponent } from './course/course.component';
import { DocumentComponent } from './document/document.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { GetDocumentComponent } from './get-document/get-document.component';
import { SessionComponent } from './session/session.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { ApplySessionComponent } from './apply-session/apply-session.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    PmComponent,
    AdminComponent,
    LoginTestComponent,
    CreateUserComponent,
    SearchUsersComponent,
    UserDetailsComponent,
    UsersListComponent,
    CourseComponent,
    DocumentComponent,
    CreateDocumentComponent,
    GetDocumentComponent,
    SessionComponent,
    CreateSessionComponent,
    ApplySessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
