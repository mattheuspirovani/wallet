import { Component } from '@angular/core';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public walletService: WalletService) {}

  ngOnInit() {
    this.walletService.getCoins();
  }

  openWalletPage() {
    console.log('Open wallet');
    
  }
}
