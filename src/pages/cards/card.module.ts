import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsPage } from './cards';

@NgModule({
  declarations: [
    CardsPage,
  ],
  imports: [
    IonicPageModule.forChild(CardsPage),
  ],
  exports: [
    CardsPage
  ]
})
export class CardsPageModule { }
