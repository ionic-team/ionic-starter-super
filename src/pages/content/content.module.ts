import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContentPage } from './content';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ContentPage,
  ],
  imports: [
    IonicPageModule.forChild(ContentPage),
    TranslateModule.forChild()
  ],
  exports: [
    ContentPage
  ]
})
export class ContentPageModule { }
