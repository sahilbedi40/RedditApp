import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'detail.html'
})
export class DetailPage{
 item:any;
constructor(public navCtrl: NavController, public param:NavParams) {
   this.item=param.get("item");
  }

}