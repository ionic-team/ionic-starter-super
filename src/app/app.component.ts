import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { Settings } from '../providers/providers';

import { FirstRunPage } from '../pages/pages';
import { CardsPage } from '../pages/cards/cards';
import { ContentPage } from '../pages/content/content';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListMasterPage } from '../pages/list-master/list-master';
import { MenuPage } from '../pages/menu/menu';
import { SettingsPage } from '../pages/settings/settings';
import { SearchPage } from '../pages/search/search';

import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tutorial', component: TutorialPage },
    { title: 'Welcome', component: WelcomePage },
    { title: 'Tabs', component: TabsPage },
    { title: 'Cards', component: CardsPage },
    { title: 'Content', component: ContentPage },
    { title: 'Login', component: LoginPage },
    { title: 'Signup', component: SignupPage },
    { title: 'Map', component: MapPage },
    { title: 'Master Detail', component: ListMasterPage },
    { title: 'Menu', component: MenuPage },
    { title: 'Settings', component: SettingsPage },
    { title: 'Search', component: SearchPage }
  ]

  constructor(public translate: TranslateService, public http: Http, platform: Platform, settings: Settings) {
    // Prevent race condition: wait for Promise resolution before loading root view
    this.initI18n().then(() => {
      this.rootPage = FirstRunPage;
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  initI18n(): Promise<any> {
    // Set the default language for translation strings.
    let defaultLanguage = 'en';
    this.translate.setDefaultLang(defaultLanguage);

    // Detect user language.
    let browserLang = this.translate.getBrowserLang();

    // Pending issue https://github.com/ocombe/ng2-translate/issues/282 resolution,
    // we can first try to loan the I18N JSON file for the detected language
    return new Promise((resolve, reject) => {
      this.http.get(`../assets/i18n/${browserLang}.json`)
        .catch((error: any) => {
          // I18N File failed to load, fall back to English
          this.translate.use(defaultLanguage);
          resolve(true);

          return Observable.throw(error);
        })
        .subscribe((data) => {
          // I18N File loaded successfully, we can proceed
          this.translate.use(browserLang);
          resolve(true);
        });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
