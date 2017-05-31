import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListMasterPage } from './list-master';

@NgModule({
  declarations: [
    ListMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterPage),
  ],
  exports: [
    ListMasterPage
  ]
})
export class ListMasterPageModule { }
