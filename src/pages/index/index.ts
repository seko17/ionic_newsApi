import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NewsService } from '../../app/service/news.service';
import { IndexSingleNewsPage } from '../index-single-news/index-single-news';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage  implements OnInit {
  news : any; 
  constructor(public navCtrl: NavController, private NewsService : NewsService) {
  }
  ngOnInit(){
    this.NewsService.getNews("top-headlines?sources=bbc-news").subscribe(
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
    this.navCtrl.push(IndexSingleNewsPage);
  }
}
