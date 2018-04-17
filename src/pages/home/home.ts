import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [
    {"id":1, name:"첫번째 item"},
    {"id":2, name:"두번째 item"},
    {"id":3, name:"세번째 item"},
  ]

  itemselected(item){
    alert(item.id);
  }

  clickButton(event){

  }
  userName:any;


  constructor(public navCtrl: NavController) {
    this.userName = "아이오닉";
  }

}
