import { Platform, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Component,AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements  OnInit, OnDestroy, AfterViewInit {
  backButtonSubscription;
  constructor(private storage: Storage, private router: Router, public platform: Platform,private menuCtrl: MenuController) {
    this.menuCtrl.enable(true);
    this.platform.ready().then((source) => {
      this.storage.get('monecolier').then((val) => {
       console.log(val);
        if ( val === 1 ) {
           return;
         } else {
       // console.log(val);
      this.router.navigate(['register']);
     }
   });
  });
  }
  ngOnDestroy() { }
  ngOnInit() { }
  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }
  gotoAddEleve(){
    console.log("bonjoiur");
    this.router.navigate(['eleve']);
  }
}
