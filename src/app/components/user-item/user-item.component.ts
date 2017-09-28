import { Component, OnInit,Input } from '@angular/core';

/*标注部分*/
@Component({
  selector: 'app-user-item', //选择器  标签
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
    @Input() name: string;//类的属性 ,input 输入
  constructor() {
    /*this.name='奥巴马'*/
  }
  ngOnInit() {

  }

}
