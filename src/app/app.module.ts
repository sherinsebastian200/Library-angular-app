import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BooksEntryComponent } from './books-entry/books-entry.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"uregister",
    component:UserRegistrationComponent
  },
  {
    path:"ulogin",
    component:UserLoginComponent
  },
  {
    path:"entry",
    component:BooksEntryComponent
  },
  {
    path:"view",
    component:ViewbooksComponent
  },
  {
    path:"search",
    component:BookSearchComponent
  },
  {
    path:"delete",
    component:BookDeleteComponent
    
  },
  {
    path:"edit",
    component:BookEditComponent
    
  },
  {
    path:"issue",
    component:BookIssueComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    BooksEntryComponent,
    ViewbooksComponent,
    BookSearchComponent,
    BookDeleteComponent,
    BookEditComponent,
    BookIssueComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
