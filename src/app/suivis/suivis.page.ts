import { ModalsuiviPage } from './../modalsuivi/modalsuivi.page';
import { EleveService } from './../eleve.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-suivis',
  templateUrl: './suivis.page.html',
  styleUrls: ['./suivis.page.scss'],
})
export class SuivisPage implements OnInit {
  el :any;
  page:number;
  suivis=[];
  constructor(private eleveService: EleveService, public modalController: ModalController) { }

  ngOnInit() {
    this.el= this.eleveService.eleve;
    this.getSuivis();
  }
  getSuivis(){
    this.page =0;
    this.eleveService.getAllSuivs(this.el.id_eleve, this.el.annee,this.page).subscribe((data:any)=>{
      console.log(data)
      if(data.code==800){
        this.suivis = data.datas ;
      }
    });
  }
  details(suivi){
    this.presentModal();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalsuiviPage
    });
    return await modal.present();
  }


}
