import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../models/user';
import { Wallet } from '../models/wallet';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(private _storageService: StorageService) { }

  async getUser() {
    this.user = await this._storageService.getObject("user");
    if (!this.user)
      await this.createUser()
  }

  async createUser() {
    const wallet = new Wallet();
    wallet.publicKey = "6AYA61HA61KA9K1";
    wallet.privateKey = "8UYATQANZA9";
    const user = new User();
    user.name = "Mattheus";
    user.wallet = wallet;
    await this._storageService.setObject("user", user);
  }

  async getPin() {
    return await this._storageService.getObject("pin");
  }

  async setPin(pin: string) {
    this._storageService.setObject("pin", pin);
  }
}
