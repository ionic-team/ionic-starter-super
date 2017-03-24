import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { GoogleMap, GoogleMaps, LatLng } from '@ionic-native/google-maps';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild('map') map;

  googleMap: GoogleMap;

  constructor(public googleMaps: GoogleMaps, public navCtrl: NavController, public platform: Platform) {}

  initJSMaps(mapEle) {
    new google.maps.Map(mapEle, {
      center: { lat: 43.071584, lng: -89.380120 },
      zoom: 16
    });
  }

  initNativeMaps(mapEle) {
    this.googleMap = this.googleMaps.create(mapEle);
    mapEle.classList.add('show-map');

    this.googleMaps.isAvailable().then(() => {
      const position = new LatLng(43.074395, -89.381056);
      this.googleMap.setCenter(position);
    });
  }

  ionViewDidLoad() {
    let mapEle = this.map.nativeElement;

    if (!mapEle) {
      console.error('Unable to initialize map, no map element with #map view reference.');
      return;
    }

    // Disable this switch if you'd like to only use JS maps, as the APIs
    // are slightly different between the two. However, this makes it easy
    // to use native maps while running in Cordova, and JS maps on the web.
    if (this.platform.is('cordova') === true) {
      this.initNativeMaps(mapEle);
    } else {
      this.initJSMaps(mapEle);
    }
  }

}
