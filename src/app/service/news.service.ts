import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {environment} from '../../app/environment/environment';
@Injectable()
export class NewsService {
newsItem : any;
    constructor(private httpClient: HttpClient){

    }
  getNews(url){
   var comp = `${environment.API_URL}/${url}&apiKey=${environment.API_KEY}`;
   console.log('complete url', comp);
   return this.httpClient.get(comp);
  }
}