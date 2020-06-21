import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Wallet } from '../models/wallet';
import { Asset } from '../models/asset';


@Injectable({
  providedIn: 'root'
})
export class WalletService {

  wallets: Wallet[] = [];
  assets: Asset[] = [];
  
  constructor(private _storageService: StorageService) { }

  async getWallets() {
    const wallets = await this._storageService.getObject("wallets");
    this.wallets = wallets || [];

  }

  async createWallet() {
    var wallet = [{ publicKey: "8U1JA71A9OLY5AT15", privateKey: "89AJA9JAQBNALOKAH" }];
    await this._storageService.setObject("wallets", wallet);
  }

  async getCoins() {
    const assets = [
      {
        name: "TungaCoin",
        amount: 123.50
      },
      {
        name: "Kiras",
        amount: 4289.30
      }
    ];

    this.assets = assets;
  }

}
