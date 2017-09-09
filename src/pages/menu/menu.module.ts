import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
    TranslateModule.forChild()
  ],
  exports: [
    MenuPage
  ]
})
export class MenuPageModule { }
