import { Component } from '@angular/core';
import {
  ActionSheetController, AlertController, IonicPage, ModalController, NavController, NavParams,
  Platform, ToastController
} from 'ionic-angular';
import {ModalPage} from "../modal/modal";
import {SlidePage} from "../slide/slide";
import {AccountInterface} from "../../interfaces/account";
import {NavPage} from "../nav/nav"; //인터페이스 추가
/**
 * Generated class for the ComponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//{name:'componentPage'}
@IonicPage()
@Component({
  selector: 'page-component',
  templateUrl: 'component.html',
})
export class ComponentPage {
  private accountData = {} as AccountInterface; //선언
  constructor(public navCtrl: NavController,
              public actionsheetCtrl: ActionSheetController,
              public platform:Platform,
              public modaCtrl:ModalController,
              public navParams: NavParams,
              public alertCtrl:AlertController,
              public toastCtrl:ToastController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentPage');
  }

  actionSheet(){
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page', //css스타일
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => { //이벤트
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });//actionSheet 생성
    actionSheet.present();//띄우기
 }

 modal(){
    let modal = this.modaCtrl.create('ModalPage');
    modal.onDidDismiss(data => {
      console.log(data);
    })
    modal.present();
 }

 slide(){
    this.navCtrl.push('SlidePage');
 }

 promptAlert(){
   let prompt = this.alertCtrl.create({
     title: 'Login',
     message: "이름과E-Mail를입력하세요",
     inputs: [
       { name: 'name', placeholder: 'Name 입력' },
       { name: 'email', placeholder: 'Email 입력' },
     ],
     buttons: [
       { text: '취소', handler: data => { console.log('Cancel clicked'); } },
       {text: '저장',handler: data => {
         this.accountData= { name : data.name, email : data.email}
         this.navCtrl.push('NavPage',{account:this.accountData});}}
       ]}
       );

   prompt.present();
   console.log(this.accountData);

  }
  toast(){
    let toast = this.toastCtrl.create({
      message:'3초동안 보였다가 사라집니다.',
      duration:3000,
      position:'top',
      showCloseButton: true,
      closeButtonText: 'Ok',
    });
    toast.onDidDismiss((data) => console.log("toast사라짐"+data));

    toast.present();
  }
}
