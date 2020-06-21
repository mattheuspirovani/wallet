import { Component } from '@angular/core';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public walletService: WalletService) {}

  ngOnInit() {
    this.walletService.getCoins();
  }
}
