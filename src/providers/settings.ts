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

  settingsObservable: Observable<any> = Observable.fromPromise(this.storage.get(Constants.STORAGE_KEY_SETTINGS)
    .then((value) => {
      if (value) {
        this.settings = value;
        return this._mergeDefaults(this._defaults);
      } else {
        return this.setAll(this._defaults).then((val) => {
          this.settings = val;
        })
      }
    })
  ).share();


  _defaults: any;

  constructor(public storage: Storage, defaults: any) {
    this._defaults = defaults;
  }

  _mergeDefaults(defaults: any): Promise<any> {
    return new Promise((resolve, reject) => {
      for (let k in defaults) {
        if (!(k in this.settings)) {
          this.settings[k] = defaults[k];
        }
      }
      this.setAll(this.settings).then(result => {
        resolve(result);
      }).catch(error => {
        reject(error);
      });
    });
  }

  merge(settings: any): Promise<any> {
    return new Promise((resolve, reject) => {
      for (let k in settings) {
        this.settings[k] = settings[k];
      }
      this.save().then(result => {
        resolve(result);
      }).catch(error => {
        reject(error);
      });
    })
  }

  setValue(key: string, value: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.settings[key] = value;
      this.storage.set(Constants.STORAGE_KEY_SETTINGS, this.settings).then(result => {
        resolve(result);
      }).catch(error => {
        reject(error);
      });
    })
  }

  setAll(value: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.set(Constants.STORAGE_KEY_SETTINGS, value).then(result => {
        resolve(result);
      }).catch(error => {
        reject(error);
      });
    });
  }

  getValue(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.get(Constants.STORAGE_KEY_SETTINGS).then(result => {
        resolve(result);
      }).catch(error => {
        reject(error);
      });
    });
  }

  save(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.setAll(this.settings).then(result => {
        resolve(result);
      }).catch(error => {
        reject(error);
      });
    });
  }

  get allSettings() {
    return this.settings;
  }
}
