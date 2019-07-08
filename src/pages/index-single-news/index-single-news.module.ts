import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexSingleNewsPage } from './index-single-news';

@NgModule({
  declarations: [
    IndexSingleNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(IndexSingleNewsPage),
  ],
})
export class IndexSingleNewsPageModule {}
