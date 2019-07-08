import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../app/service/news.service';
import { UsaNewsSinglePage } from '../usa-news-single/usa-news-single';

/**
 * Generated class for the UsaNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usa-news',
  templateUrl: 'usa-news.html',
})
export class UsaNewsPage implements OnInit {
news:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private NewsService: NewsService) {
  }

  ngOnInit(){
    this.NewsService.getNews("top-headlines?country=us").subscribe(
      (res)=>{
        this.news = res;
      },
      (err) => {
        console.log('the error is', err)
      }
    )
  }
  itemSelected(news){
    this.NewsService.newsItem = news;
this.navCtrl.push(UsaNewsSinglePage);

  }

}
