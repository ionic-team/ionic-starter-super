import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
@Injectable()
export class Settings {
  private SETTINGS_KEY: string = '_settings';

  settings: any;

  _defaults: any;
  _readyPromise: Promise<any>;

  constructor(public storage: Storage, defaults: any) {
    this._defaults = defaults;
  }

  load() {
    return this.storage.get(this.SETTINGS_KEY).then((value) => {
      if (value) {
        this.settings = value;
        this._mergeDefaults(this._defaults);
      } else {
        return this.setAll(this._defaults).then((val) => {
          this.settings = val;
        })
      }
    });
  }

  _mergeDefaults(defaults: any, callback?: () => void) {
    for (let k in defaults) {
      if (!(k in this.settings)) {
        this.settings[k] = defaults[k];
      }
    }
    return this.setAll(this.settings, callback);
  }

  merge(settings: any, callback?: () => void) {
    for (let k in settings) {
      this.settings[k] = settings[k];
    }
    return this.save(callback);
  }

  setValue(key: string, value: any, callback?: (res: string) => void) {
    this.settings[key] = value;
    return this.storage.set(this.SETTINGS_KEY, this.settings).then(res => {
      callback(res);
    });
  }

  setAll(value: any, callback?: () => void) {
    return this.storage.set(this.SETTINGS_KEY, value).then(res => {
      callback();
    });
  }

  getValue(key: string, callback?: (res: string) => void) {
    return this.storage.get(key).then(settings => {
      if (callback) {
        callback(settings[key]);
      }
      else {
        return settings[key];
      }
    });
  }

  save(callback?: () => void) {
    return this.setAll(this.settings, callback);
  }

  get allSettings() {
    return this.settings;
  }
}
