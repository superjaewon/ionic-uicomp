import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//{name:'bindPage',}
@IonicPage()
@Component({
  selector: 'page-bind',
  templateUrl: 'bind.html',
})
export class BindPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  //life cycle method 화면이 load되고 난 후에 바로 호출되는 메소드
  ionViewDidLoad() {
    //alert('ionViewDidLoad BindPage '+ this.navParams.get("name")); //파라미터로 받은 값 가져오기
    //this.test(this.navParams.get("name"));
  //  this.test(this.navParams.get("name"));
    console.log("1>> BindPage ionViewDidLoad() 호출");
  }

  goBack(){
    this.navCtrl.pop();
  }

  test(name){
    alert(name);
  }


  ionViewWillEnter(){
    console.log("2>> BindPage ionViewWillEnter() 호출");
  }

  ionViewWillUnload(){
    console.log("3>> BindPage ionViewWillUnload() 호출");
  }

}
