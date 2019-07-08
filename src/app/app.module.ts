import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http';
import { NewsService } from './service/news.service';
import { IndexPage } from '../pages/index';
import { GermanyNewsPage } from '../pages/germany-news/germany-news';
import { UsaNewsPage } from '../pages/usa-news/usa-news';
import { IndexSingleNewsPage } from '../pages/index-single-news/index-single-news';
import { GermanyNewsSinglePage } from '../pages/germany-news-single/germany-news-single';
import { UsaNewsSinglePage } from '../pages/usa-news-single/usa-news-single';

@NgModule({
  declarations: [
    MyApp,
    HomePage, IndexPage, GermanyNewsPage,UsaNewsPage,IndexSingleNewsPage,GermanyNewsSinglePage,UsaNewsSinglePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IndexPage,
    GermanyNewsPage,
    UsaNewsPage,
    IndexSingleNewsPage,
    GermanyNewsSinglePage,
    UsaNewsSinglePage
  ],
  providers: [
    NewsService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
