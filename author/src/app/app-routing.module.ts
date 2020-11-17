import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {BookComponent} from './book/book.component';
import {SocialComponent} from './social/social.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'book',component: BookComponent},
  {path : 'social', component: SocialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
