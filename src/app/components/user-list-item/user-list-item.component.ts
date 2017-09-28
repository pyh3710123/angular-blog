import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
 names: string[];
  constructor() {
    this.names=['JACK','ROSE','JSON','Faker','Tiesto']
  }
  ngOnInit() {
    
  }

}
