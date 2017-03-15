import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { Constants } from '../app/constants';

/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
@Injectable()
export class Settings {
  settings: any;

  load$: Observable<any> = Observable.fromPromise(this.storage.get(Constants.STORAGE_KEY_SETTINGS)
    .then((value) => {
      if (value) {
        this.settings = value;
        return this._mergeDefaults(this._defaults);
      } else {
        return this.setAll(this._defaults)
      }
    })
  ).share();


  _defaults: any;

  constructor(public storage: Storage, defaults: any) {
    this._defaults = defaults;
  }

  _mergeDefaults(defaults: any) {
    for (let k in defaults) {
      if (!(k in this.settings)) {
        this.settings[k] = defaults[k];
      }
    }
    return this.setAll(this.settings);
  }

  merge(settings: any): void {
    for (let k in settings) {
      this.settings[k] = settings[k];
    }
    this.save();
  }

  setValue(key: string, value: any) {
    this.settings[key] = value;
    return this.storage.set(Constants.STORAGE_KEY_SETTINGS, this.settings);
  }

  setAll(value: any) {
    return this.storage.set(Constants.STORAGE_KEY_SETTINGS, value);
  }

  getValue(key: string) {
    return this.storage.get(Constants.STORAGE_KEY_SETTINGS).then(result => {
      return result;
    })
  }

  save() {
    return this.setAll(this.settings);
  }

  get allSettings() {
    return this.settings;
  }
}
