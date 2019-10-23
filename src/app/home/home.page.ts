import { EleveService } from './../eleve.service';
import { Platform, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Component,AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements  OnInit, OnDestroy, AfterViewInit {
  backButtonSubscription;
  ispresentEleve=false;
  eleves=[];
  constructor(private storage: Storage, private router: Router, public platform: Platform,private menuCtrl: MenuController,private eleveService: EleveService) {
    
  }
  ngOnDestroy() { }
  ngOnInit() { 
    this.menuCtrl.enable(true);
    this.platform.ready().then((source) => {
      this.storage.get('monecolier').then((val) => {
       console.log(val);
        if ( val === 1 ) {
         
          this.storage.get('userid').then((id:any)=>{
            this.getEleves(id);
          });
         } else {
       // console.log(val);
      this.router.navigate(['register']);
     }
   });
  });
  }
  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }
  gotoAddEleve(){
   
    this.router.navigate(['eleve']);
  }
  getEleves(id){
    this.eleveService.getEleve(id).subscribe((data:any)=>{
      console.log(data);
      if(data.code==800){
        this.eleves= data.datas;
        if(this.eleves.length > 0){
          this.ispresentEleve=true;
        }
      }
    });
  }
  gotoDetails(eleve){
    console.log(eleve);
    this.eleveService.eleve=eleve;
    let navigationExtras: NavigationExtras = {
      state: {
        eleve: eleve
      }
    };
    this.router.navigate(['details'],navigationExtras);
  }
}
