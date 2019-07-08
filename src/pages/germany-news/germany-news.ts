import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../app/service/news.service';
import { GermanyNewsSinglePage } from '../germany-news-single/germany-news-single';

/**
 * Generated class for the GermanyNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-germany-news',
  templateUrl: 'germany-news.html',
})
export class GermanyNewsPage implements OnInit {
news :any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private newsService: NewsService) {
  }

  ngOnInit(){
    this.newsService.getNews("top-headlines?country=de&category=business").subscribe(
      (res)=>{
        this.news = res;
      },
      (err) => {
        console.log('the error is', err)
      }
    )
  }
  itemSelected(news){
    this.newsService.newsItem = news; 
    this.navCtrl.push(GermanyNewsSinglePage);
  }
  }
