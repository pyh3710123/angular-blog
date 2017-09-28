import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Http, Response,RequestOptions,Headers} from '@angular/http';//导入http
declare var $:any;
declare var validator:any;
@Component({
  selector: 'app-password-rest',
  templateUrl: './password-rest.component.html',
  styleUrls: ['./password-rest.component.css'],
  providers:[AuthService]
})
export class PasswordRestComponent implements OnInit {
  PasswordRest:string;
  invalidPhone:boolean;
  invalidPassword:boolean;
  invalidPassword1:boolean;
  invalidCaptcha:boolean;
  constructor(private authService:AuthService,
              private http:Http
  )

  {
          this.PasswordRest=authService.captchaUrl;
          this.invalidPhone=false;
          this.invalidPassword=false;
           this.invalidPassword1=false;
          this.invalidCaptcha=false;
  }

  ngOnInit() {

  }
  getPasswordRest() {
    this.PasswordRest = this.authService.getCaptcha();
  }
  doSubmit(formDataValue:any,obj:any): void{
    this.doValidatorFormPhone(formDataValue);
    this.doValidatorFormPassword(formDataValue);
    this.doValidatorFormPassword1(formDataValue);
    this.doValidatorFormCaptcha(formDataValue);
    console.log('You submitted value:',

      formDataValue);


    let {phone,password,password1,captcha,rememberMe} = formDataValue;

    let strData = `phone=${phone}&password=${password}&password1=${password1}&captcha=${captcha}&rememberMe=${rememberMe}`;


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
  doValidatorFormPassword1(formData:any){
  if(validator.isEmpty(formData.password1)){
      this.invalidPassword1=true;
      return;
    }else {
      this.invalidPassword1=false;
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
    this.http.post(this.authService.apiUrl+'/password-rest', bodyStr,options)
      .subscribe((res: Response) => {
        if(parseInt(res.json().code)==1){
            alert(res.json().msg)
          }
        if(parseInt(res.json().code)==0){
          alert(res.json().msg)
        }

      });

  }

}
