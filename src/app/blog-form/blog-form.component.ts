import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  blogRef = new FormGroup ({
    id: new FormControl(),
    title: new FormControl(),
    content: new FormControl()
  });

  message:string = "";
  constructor(public bser:BlogService) { }

  ngOnInit(): void {
  }

  createBlog() {
    let blog = this.blogRef.value;
    this.bser.createBlogDetails(blog).subscribe(result => {
      this.message = "Blog saved successfully! :)";
    }, error => {
      this.message = "Blog didn't save! :(";
    })
  }

}
