import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../app/service/news.service';

/**
 * Generated class for the UsaNewsSinglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usa-news-single',
  templateUrl: 'usa-news-single.html',
})
export class UsaNewsSinglePage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams , private newsService: NewsService) {
  }

  ngOnInit(){

  }

}
