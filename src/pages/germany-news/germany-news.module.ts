import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GermanyNewsPage } from './germany-news';

@NgModule({
  declarations: [
    GermanyNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(GermanyNewsPage),
  ],
})
export class GermanyNewsPageModule {}
