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

  myButton(event){
    //alert(event.target.textContent)
    //console.log(event.target.textContent);
    if(typeof this.userName !== "undefined"){ //userName이 정의되어 있을경우
      //this.navCtrl.push('bindPage');
      this.navCtrl.push('bindPage',{name:this.userName}); //page:이동 할 페이지명, params:넘길 값
    }else{
      alert('userName 입력!!!');
    }

  }

  disabledSwitch = false;

  userName:any;


  constructor(public navCtrl: NavController) {
    //this.userName = "아이오닉";
  }

}
