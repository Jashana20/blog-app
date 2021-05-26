import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http:HttpClient) { }

  retrieveBlogDetails():Observable<Blog[]> {
    return this.http.get<Blog[]>("http://localhost:3000/blogs")
  }

  createBlogDetails(blog:any):Observable<Blog> {
    return this.http.post<Blog>("http://localhost:3000/blogs/", blog)
  }
  
  deleteBlogDetails(id:any):Observable<Blog> {
    return this.http.delete<Blog>("http://localhost:3000/blogs/"+id)
  }

  updateBlogDetails(blog:any):Observable<Blog> {
    return this.http.put<Blog>("http://localhost:3000/blogs/"+blog.id, blog)
  }
}
