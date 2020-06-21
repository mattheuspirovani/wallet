// import * as iroha from 'iroha-lib';
// const crypto = new iroha.ModelCrypto() ;

import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  accountName: string;
  pin: number;

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  createAccount() {    
    if(this.validate()){
      
      console.log(crypto.generateKeyPair());
      
    } 
  }

  validate() {
    if (!this.accountName || !this.pin) {
      this.presentToast('Preencha o login e o PIN.');
      return false;
    }
    if (this.pin.toString().length != 4) {
      this.presentToast('O PIN deve ter 4 dígitos.');
      return false;
    }

    if (this.accountName.match(/[a-z_0-9]{1,32}/)[0].length
      != this.accountName.length) {
      this.presentToast('O nome da conta deve ter no máximo 32 dígitos e apenas letras minúsculas,_ e números.');
      return false;
    }
    return true;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      header: 'Erro!',
      message: message,
      position: 'top',
      color: 'danger',
      buttons: [
        {
          icon: 'close-circle-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
