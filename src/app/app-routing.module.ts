import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import {UsersListComponent} from './users-list/users-list.component';
import{CreateUserComponent} from './create-user/create-user.component';
import {SearchUsersComponent} from './search-users/search-users.component';
import {CourseComponent} from './course/course.component'
import {DocumentComponent} from './document/document.component'
import {CreateDocumentComponent} from './create-document/create-document.component'
import {SessionComponent} from './session/session.component'
import {CreateSessionComponent} from './create-session/create-session.component'
import {ApplySessionComponent} from './apply-session/apply-session.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
},
{
    path: 'user',
    component: UserComponent
},
{
    path: 'pm',
    component: PmComponent
},
{
    path: 'admin',
    component: AdminComponent
},
{
    path: 'auth/login',
    component: LoginComponent
},
{
    path: 'signup',
    component: RegisterComponent
},
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},
{ path: 'user', component: UsersListComponent },
{ path: 'add', component: CreateUserComponent },
{ path: 'course', component: CourseComponent },
{ path: 'document', component: DocumentComponent },
{ path: 'createDocument', component: CreateDocumentComponent },
{ path: 'session', component: SessionComponent },
{ path: 'createSession', component: CreateSessionComponent },
{ path: 'sessionApply', component: ApplySessionComponent },

{ path: 'findbyId', component: SearchUsersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent,UserComponent,PmComponent,AdminComponent,LoginComponent,RegisterComponent]