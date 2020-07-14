import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {
    path: "register",
    component: RegistrationComponent,
  },
  {
    path: "blog",
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
