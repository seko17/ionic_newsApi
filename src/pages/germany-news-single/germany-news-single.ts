import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../app/service/news.service';

/**
 * Generated class for the GermanyNewsSinglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-germany-news-single',
  templateUrl: 'germany-news-single.html',
})
export class GermanyNewsSinglePage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsService: NewsService) {
  }

  ngOnInit(){

  }

}
