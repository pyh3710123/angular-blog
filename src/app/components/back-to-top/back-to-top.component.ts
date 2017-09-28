import { Component, OnInit } from '@angular/core';
declare  var $:any;
@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function () {
      if ($(window).scrollTop()>200){
        $('#toTop').css('display','block')
      }else{
        $('#toTop').css('display','none')
      }
    })
    $(function () {
      $('#toTop').click(function () {
        $('body').animate({scrollTop:0},300);
        return false;
      });
    })
  }

}
