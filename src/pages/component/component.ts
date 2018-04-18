import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, ModalController, NavController, NavParams, Platform} from 'ionic-angular';
import {ModalPage} from "../modal/modal";
import {SlidePage} from "../slide/slide";

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

  constructor(public navCtrl: NavController, public actionsheetCtrl: ActionSheetController, public platform:Platform, public modaCtrl:ModalController, public navParams: NavParams) {
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
}
