import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
   shoes: Array<Object>;
   cars:Array<Object>;
  clothes:Array<Object>
   choice: number;
  constructor() {
    this.choice = 1;
    this. shoes=[
      {
        imgSrc:'assets/images/shot1.jpg',
        counter:5,
        price:333.23,
        discount:250,
        isDiscount:true,
        freepost:true,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot2.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:true,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:true,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:true,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:true,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },  {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/shot3.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      }


    ];
    this.cars=[
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        discount:250,
        isDiscount:true,
        freepost:true,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:true,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:true,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:true,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:true,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },  {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/car.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      }


    ];
    this.clothes=[
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        discount:250,
        isDiscount:true,
        freepost:true,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:true,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:true,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:true,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:true,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },  {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      },
      {
        imgSrc:'assets/images/closeth.jpg',
        counter:5,
        price:333.23,
        freepost:true,
        discount:250,
        isDiscount:false,
        des:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
      }


    ];
  }
  nextChoice(num) {
      this.choice = num;
    $(function(){
      $("div.holder").jPages({
        containerID : "itemContainer"
      });
    });
  }
  ngOnInit() {
    $(function(){
      $("div.holder").jPages({
        containerID : "itemContainer"
      });
    });
  }

}
