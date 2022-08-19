import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';


@NgModule({
  declarations: [
    UserComponent,
    AddBookComponent,
    DeleteBookComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule
    
  ]
})
export class UserModule { }
