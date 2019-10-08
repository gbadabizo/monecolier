import { Storage } from '@ionic/storage';
import { EleveService } from './../eleve.service';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {
  confirmForm = new FormGroup({
    code : new FormControl('', Validators.required),
   
  });
  code:string;
  userid=0;
  username='';
  password=''

  constructor( public alertCtrl: AlertController,private router: Router, private eleveService: EleveService,private storage: Storage) { }

  ngOnInit() {
    this.userid= this.eleveService.iduser;
    this.username = this.eleveService.username;
    this.password= this.eleveService.password;
  }
  confirm(){
    console.log(this.confirmForm.value);
    console.log(this.confirmForm.value.code);
    this.code=""+this.confirmForm.value.code;
    console.log(this.code);
      this.eleveService.confirm(this.userid,this.code).subscribe((data:any)=>{
        if(data.code==800){
          this.storage.set('monecolier',1)
          this.storage.set('username',this.username);
          this.storage.set('password',this.password);
          this.storage.set('userid',this.userid);
          this.router.navigate(['slide']);
        }
      });
    
  }
  exitApp() {
    this.alertCtrl.create({
      header : 'Attention!!',
      message: 'Etes-vous sûr de quitter l\'application',
      buttons : [
        {
          text: 'Annuler',
          role: 'cancel',
      },
      {
        text: 'Quitter',
        handler: () => {
          // tslint:disable-next-line: no-string-literal
          navigator['app'].exitApp();
        }
      }
      ]
    }).then((alert) => {
      alert.present();
    });
  }
}
