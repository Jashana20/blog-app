import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: "blogform", component: BlogFormComponent},
  {path: "blogposts", component: BlogPostsComponent},
  {path: "homepage", component: HomepageComponent},
  {path: "contactus", component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
