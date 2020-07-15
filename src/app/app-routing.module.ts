import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { BlogComponent } from './blog/blog.component';
import { DrupalBetterArticleComponent } from './drupal-better-article/drupal-better-article.component';
import { DrupalSimpleArticleComponent } from './drupal-simple-article/drupal-simple-article.component';


const routes: Routes = [
  {
    path: "register",
    component: RegistrationComponent,
  },
  {
    path: "blog",
    component: BlogComponent,
  },
  {
    path: "",
    component: DrupalSimpleArticleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
