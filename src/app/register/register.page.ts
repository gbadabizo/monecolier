import { EleveService } from './../eleve.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuController, Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { parent } from '../parent';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm = new FormGroup({
    nom : new FormControl('', Validators.required),
    prenoms : new FormControl('', Validators.required),
    telephone : new FormControl('', Validators.required),
   
  });
  parent:parent;
  
  constructor(private menuCtrl: MenuController, public platform: Platform, public alertCtrl: AlertController,private router: Router, private eleveService: EleveService) {
    this.menuCtrl.enable(false);
    this.platform.ready().then(() => {
     
    });
   }

  ngOnInit() {
  }
  saveParent(){
    console.log(this.registerForm.value);
    this.parent=this.registerForm.value;
    this.eleveService.registeruser(this.parent).subscribe((data:any)=>{
      if(data.code==800){
        let user = data.datas ;
        this.eleveService.iduser= user.id;
        this.eleveService.username= user.username;
        this.eleveService.password=user.password;
        this.router.navigate(['confirm']);
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
