import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import moment from 'moment/moment';

/*
  Generated class for the Cards page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/marty-avatar.png',
          name: 'Marty McFly'
        },
        date: '1970-11-05T20:24:01+00:00',
        image: 'assets/img/advance-card-bttf.png',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      },
      {
        user: {
          avatar: 'assets/img/sarah-avatar.png.jpeg',
          name: 'Sarah Connor'
        },
        date: '	1984-05-12T20:24:01+00:00',
        image: 'assets/img/advance-card-tmntr.jpg',
        content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
      },
      {
        user: {
          avatar: 'assets/img/ian-avatar.png',
          name: 'Dr. Ian Malcolm'
        },
        date: '1990-06-28T20:24:01+00:00',
        image: 'assets/img/advance-card-jp.jpg',
        content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.'
      }
    ];

  }
  /**
   * @description Returns the time ago of a date object
   * @param date: ISO-formatted date
   * @returns formatted: time ago
   */
  ago(date) {
    return moment(date).fromNow();
  }

    /**
   * @description Returns the time ago of a date object
   * @param date: ISO-formatted date
   * @returns formatted: formatted date 
   */
  date(date) {
    return moment(date).format('MMMM D, YYYY');
  }
}
