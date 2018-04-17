import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BindPage} from "../bind/bind";
import {ComponentPage} from "../component/component";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [
    {"id":1, name:"Component"},
    {"id":2, name:"두번째 item"},
    {"id":3, name:"세번째 item"},
  ]

  itemselected(item){
   // alert(item.id);
    if(item.id === 1){
      this.navCtrl.push('ComponentPage',);
    }
  }

  myButton(event){
    //alert(event.target.textContent)
    //console.log(event.target.textContent);
    if(typeof this.userName !== "undefined"){ //userName이 정의되어 있을경우
      //this.navCtrl.push('bindPage');
      //this.navCtrl.push('bindPage',{name:this.userName}); //page:이동 할 페이지명, params:넘길 값
      this.navCtrl.push('BindPage',{name:this.userName}); //page:이동 할 페이지명, params:넘길 값
    }else{
      alert('userName 입력!!!');
    }

  }

  disabledSwitch = false;

  userName:any;


  constructor(public navCtrl: NavController) {
    //this.userName = "아이오닉";
  }

  ionViewDidLoad(){
    console.log("1. HomePage ionViewDidLoad() 호출");
  }

  ionViewWillEnter(){
    console.log("2. HomePage ionViewWillEnter() 호출");
  }

  ionViewWillUnload(){
    console.log("3. HomePage ionViewWillUnload() 호출");
  }
}
