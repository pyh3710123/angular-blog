import { Component, OnInit } from '@angular/core';
import {RouterModule, ActivatedRoute, Router, Routes} from '@angular/router';
import {Blog} from "../../classes/blog";
import {BlogService} from '../../services/blog.service';
import {AuthService} from "../../services/auth.service";
import {Http, Response,RequestOptions,Headers} from '@angular/http';//导入http
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers:[BlogService,AuthService]
})


export class BlogsComponent implements OnInit {
   blogs:Array;
  constructor(private blogService:BlogService,
              private authService:AuthService,
              private http:Http

  )



  {
      this.blogs=blogService.getBlogs();

       }
  //GET请求

  makeGet(): void {
    alert("sdds")
    let queryStr=`${this.authService
      .apiUrl}/blog`;
        console.log(queryStr,"232332")
       this.http.get(queryStr)
      .subscribe((res: Response) => {
        if(parseInt(res.json().code)==1){
          alert("ok");
          this.blogs=res.json().blog;
          console.log(this.blogs)
        }
      });
  }

  ngOnInit() {
    this.makeGet()
  }

}
