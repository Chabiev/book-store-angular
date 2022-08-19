import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  {
    path: 'public', 
    component: PublicComponent,
    children: [
      { path: '', redirectTo: 'all-books', pathMatch: 'full' },
      { path: 'all-books', component: AllBooksComponent },
      { path: 'book-details/:id/author/:authorId', 
      component: BookDetailsComponent,
      },
    ],
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PublicRoutingModule { }
