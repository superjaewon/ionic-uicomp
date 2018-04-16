import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName:any;


  constructor(public navCtrl: NavController) {
    this.userName = "아이오닉";
  }

}
