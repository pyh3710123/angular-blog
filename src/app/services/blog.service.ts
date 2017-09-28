import { Injectable } from '@angular/core';
import {Blogs} from '../data/blog-data';
@Injectable()
export class BlogService {

  constructor() {
    
  }
  
    getBlogs(){
      return Blogs
    }
}
