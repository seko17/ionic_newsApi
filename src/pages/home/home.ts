import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IndexPage } from '../index';
import { GermanyNewsPage } from '../germany-news/germany-news';
import { UsaNewsPage } from '../usa-news/usa-news';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  constructor(public navCtrl: NavController) {

    
  }
  openContact(){
      this.navCtrl.push(IndexPage);
  }
  openGermanyNews(){
    this.navCtrl.push(GermanyNewsPage);
  }
  openUSA(){
    this.navCtrl.push(UsaNewsPage);
  }
}
