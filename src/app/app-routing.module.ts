import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginNavComponent} from './login-nav/login-nav.component';


const routes: Routes = [
  {
    path: '',
    component: LoginNavComponent,
         children: [
 {path: '', redirectTo: 'landing-page', pathMatch: 'full' },
     
     ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
