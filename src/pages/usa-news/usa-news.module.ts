import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsaNewsPage } from './usa-news';

@NgModule({
  declarations: [
    UsaNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(UsaNewsPage),
  ],
})
export class UsaNewsPageModule {}
