import { Injectable } from '@angular/core'; //依赖注入

@Injectable()
export class AuthService {
  apiUrl:string;
  pictureUrl:string;
  captchaUrl:string;
  constructor() {
    this.apiUrl = 'http://localhost:3009/api';
    this.captchaUrl = this.apiUrl+'/captcha?t='+ Date.now()+ Math.random();
  }
  //获取验证码
  getCaptcha() {
    return  this.captchaUrl =this.apiUrl+'/captcha?t='+ Date.now()+ Math.random();
  }

  //用户登录显示  ===暂时不理解
  login(user: string, password: string): boolean {

    // if (user === 'user' && password === 'password') {
    if (user === this.getUser()) {
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }
//删除本地储存
  logout(): any {
    window.location.href='/home';
    localStorage.removeItem('phone');
  }
//得到本地储存用户名
  getUser(): any {
    return localStorage.getItem('username');
  }
  getPhone(): any {
    return localStorage.getItem('phone');
  }


//暂时不理解
  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}


export var AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
