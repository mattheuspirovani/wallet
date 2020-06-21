import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setObject(key: string, value: any) {
    await Storage.set({
      key: key,
      value: JSON.stringify(value)
    });
  }
  
  async getObject(key: string) {
    const ret = await Storage.get({ key: key });
    return JSON.parse(ret.value);
  }

  async keys() {
    const { keys } = await Storage.keys();
    return keys;
  }
}
