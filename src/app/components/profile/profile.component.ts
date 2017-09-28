import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Http, Response,RequestOptions,Headers} from '@angular/http';//导入http
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';  //配置数据型表单模块
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[AuthService]
})

export class ProfileComponent implements OnInit {
   loading:boolean;
   picture:string;
   phone:string;
   profileForm:FormGroup;
   year:any;
   month:any;
   timestr:any;
  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private http:Http

  ) {
    var now         = new Date();
    this.loading=false;
    this.year=now.getFullYear();
    this.month   = now.getMonth();
    this.timestr = Date.now();

  }
  
  doSubmitModel(form:any):void{


   let {realname,username,age,gender,email} = form;

    let strData = `phone=${this.phone}&realname=${realname}&username=${username}&age=${age}&gender=${gender}&email=${email}`;

     this.makePost(strData)

  }

  doSubmitPicture(form:any):void{
    console.log(form,"bbbb")
  }
  makePost(strData: string): void {   //void 无返回对象
    let headers: Headers = new Headers();  //let 定义局部块级变量
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options: RequestOptions = new RequestOptions();
    options.headers = headers;
    options.method = 'POST';
    let bodyStr = strData;
    //ajax获取数据
    this.http.post(this.authService.apiUrl+'/profile-save', bodyStr,options)
      .subscribe((res: Response) => {
        if(parseInt(res.json().code)==1){
           alert("新增成功")
          localStorage.removeItem('phone');
        }
        if (parseInt(res.json().code)==0){
          alert(res.json().msg)
        }
      });
  }

 //GET请求
   makeGet(): void {
    this.loading = true;
    let queryStr=`${this.authService
      .apiUrl}/profile/${localStorage.getItem('phone')}`;
      this.http.get(queryStr)
      .subscribe((res: Response) => {
        if(parseInt(res.json().code)==1){
             this.loading = false;
             var user=res.json().user;
            console.log(user,"哈哈哈")
          this.picture='http://localhost:3009/'+user.picture;
              this.profileForm=this.fb.group({   //获取定义数据
                'phone':[user.phone],
                'captcha':[user.hashed_password],
                'email':[user.email],
                'realname':[user.realname],
                'username':[user.username],
                'age':[user.age],
                'picture':'http://localhost:3009/'+user.picture
              });

        }
      });
  }
  ngOnInit() {
    this.makeGet();
  }

}
