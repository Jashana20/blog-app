import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  blogRef = new FormGroup ({
    id: new FormControl(),
    title: new FormControl(),
    content: new FormControl()
  });

  blogs?:Array<Blog>
  showForm:boolean = false;
  message:string = "";
  constructor(public bser:BlogService) { }

  ngOnInit(): void {
    this.bser.retrieveBlogDetails().subscribe(result => this.blogs = result)
  }

  deleteBlogPost(id:any) {
    console.log("Delete function called..."+id)
    this.bser.deleteBlogDetails(id).subscribe(result => {
      this.bser.retrieveBlogDetails().subscribe(result => this.blogs = result)
    })
  }

  populateForm(blog:any) {
    this.showForm = true;
    this.blogRef.setValue(blog)
  }

  hideForm() {
    this.showForm = false;
    let blog = this.blogRef.value;
    this.bser.updateBlogDetails(blog).subscribe(result => {
      this.message = "Blog updated successfully!"
      this.bser.retrieveBlogDetails().subscribe(result => this.blogs = result)
    })
  }

}
