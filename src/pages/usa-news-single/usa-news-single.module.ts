import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsaNewsSinglePage } from './usa-news-single';

@NgModule({
  declarations: [
    UsaNewsSinglePage,
  ],
  imports: [
    IonicPageModule.forChild(UsaNewsSinglePage),
  ],
})
export class UsaNewsSinglePageModule {}
