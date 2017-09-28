import { Component, OnInit } from '@angular/core';
import {Http, Response,RequestOptions,Headers} from '@angular/http';//导入http
import {AuthService} from "../../services/auth.service";
@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
  providers:[AuthService]
})
export class TestComponentComponent implements OnInit {

//内置过滤器
  currencyValue = 42;
  dateValue: Date;
  decimalValue: number;
  jsObject: Object;
  uppercaseValue:string;
  lowercaseValue: string;
  percentValue: number;
  array: number[];
  sliceString:string;
  today:Date;
  p_pi: number;
  popular:boolean[];
  constructor(
    private http:Http,
    private authService:AuthService
  ) {
     this.popular=[true,false];
    this.p_pi = 0.31415926;
    this.today=new Date();
    this.currencyValue = 42;
    this.dateValue = new Date('02/11/2010');
    this.decimalValue = 42.1618;
    this.jsObject  = { foo: 'bar' }; //调试对象在页面显示
    this.uppercaseValue = 'FOOBAR';
    this.lowercaseValue = 'foobar';
    this.percentValue = 42;
    this.array = [1, 2, 3];
    this.sliceString="1234567890";

  }
  doSubmit(form:any){
     console.log(form)
  /*   let {phone} = form;
     let strData = `phone=${phone}`;
     this.makePost(strData);*/
  }

  makePost(strData: string): void {   //void 无返回对象
    let headers: Headers = new Headers();  //let 定义局部块级变量
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options: RequestOptions = new RequestOptions();
    options.headers = headers;
    options.method = 'POST';
    let bodyStr = strData;
    //ajax获取数据
    this.http.post(this.authService.apiUrl+'/upload-profile', bodyStr,options)
      .subscribe((res: Response) => {
        if(parseInt(res.json().code)==1){

        }
        if (parseInt(res.json().code)==0){
          alert(res.json().msg)
        }


      });

  }
  ngOnInit() {
  }

}
