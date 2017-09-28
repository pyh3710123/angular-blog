import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Http, Response,RequestOptions,Headers} from '@angular/http';//导入http
declare var validator:any;
declare var $:any;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers:[AuthService]
})
export class SignInComponent implements OnInit {
  signInCaptcha:string;
  invalidPhone:boolean;
  invalidPassword:boolean;
  invalidCaptcha:boolean;
    constructor(private authService:AuthService,

                  private  http:Http
    ) {
     this.signInCaptcha=authService.captchaUrl;
     this.invalidPhone=false;
     this.invalidPassword=false;
     this.invalidCaptcha=false;
  }
//获取验证码
  getSignInCaptcha() {

    this.signInCaptcha = this.authService.getCaptcha();
  }
//表单提交验证方法
  doSubmit(formDataValue:any,obj:any): void{
      console.log('You submitted value:',
      formDataValue);
    this.doValidatorFormPhone(formDataValue);
    this.doValidatorFormPassword(formDataValue);
    this.doValidatorFormCaptcha(formDataValue);

    /*http请求*/
//解构 表单数据
    let {phone,password,captcha,rememberMe} = formDataValue;

    let strData = `phone=${phone}&password=${password}&captcha=${captcha}&rememberMe=${rememberMe}`;

    this.makePost(strData,obj)

  }
  doValidatorFormPhone(formData:any){
    if(!validator.isMobilePhone(formData.phone,'zh-CN')){
      this.invalidPhone = true;

       return;
    }else {

      this.invalidPhone=false;
    }
  }
  doValidatorFormPassword(formData:any){
    if(validator.isEmpty(formData.password)){
      this.invalidPassword=true;
      return;
    }else {
      this.invalidPassword=false;

    }
  }
  doValidatorFormCaptcha(formData:any){
    if(!validator.isLength(formData.captcha,{min:4,max:4})){
      this.invalidCaptcha=true;

      return;
    }else {
      this.invalidCaptcha=false;
    }
  }

  //定义post方法
  makePost(strData: string,obj): void {   //void 无返回对象
    let headers: Headers = new Headers();  //let 定义局部块级变量
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options: RequestOptions = new RequestOptions();
    options.headers = headers;
    options.method = 'POST';
    let bodyStr = strData;
  //ajax获取数据
    this.http.post(this.authService.apiUrl+'/sign-in', bodyStr,options)
      .subscribe((res: Response) => {
        if(parseInt(res.json().code)==1){
          localStorage.setItem('phone', res.json().user.phone);
             obj.click();
        }
        if (parseInt(res.json().code)==0){
              alert(res.json().msg)
        }

      });

  }

  ngOnInit() {

  }
}
