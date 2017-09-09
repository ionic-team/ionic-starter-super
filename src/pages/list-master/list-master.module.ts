import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListMasterPage } from './list-master';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ListMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListMasterPage
  ]
})
export class ListMasterPageModule { }
