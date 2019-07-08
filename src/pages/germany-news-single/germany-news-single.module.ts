import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GermanyNewsSinglePage } from './germany-news-single';

@NgModule({
  declarations: [
    GermanyNewsSinglePage,
  ],
  imports: [
    IonicPageModule.forChild(GermanyNewsSinglePage),
  ],
})
export class GermanyNewsSinglePageModule {}
