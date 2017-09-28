import { Component, OnInit } from '@angular/core';

import {Http, Response,RequestOptions,Headers} from '@angular/http';//导入http

@Component({
  selector: 'app-weatherinfo',
  templateUrl: './weatherinfo.component.html',
  styleUrls: ['./weatherinfo.component.css']
})

export class WeatherinfoComponent implements OnInit {

  constructor(private http:Http) {


  }


   makeget(){
     
     var url= 'http://www.weather.com.cn/data/sk/101010100';
     this.http.get(url)
       .subscribe((res:Response) => {
         console.log(res.json())
     })
   }

  ngOnInit() {

    this.makeget()

  }

}
