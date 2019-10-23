import { Storage } from '@ionic/storage';
import { EleveService } from './../eleve.service';
import { Ecole } from './../../../../suiviscolaire-enseignant/src/app/models/ecole';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.page.html',
  styleUrls: ['./eleve.page.scss'],
})

export class ElevePage implements OnInit {
  addEleveForm = new FormGroup({
    matricule : new FormControl('', Validators.required),
    ecole : new FormControl('', Validators.required),
    annee : new FormControl('', Validators.required),
   
  });
  eleve:any;
  matieres=[];
  souscrimats=[];
  classe:any;
  isadd=true;
  annee:any;
  idparent='';
  savedMatiere:any;
  parameters={
    id_ecole:'',
    id_user:'',
    id_annee:'',
    matricule:''
  }
  souscrireData={
    id_eleve:'',
    id_annee:'',
    id_classe:'',
    id_parent:'',
    matieres:[]
  }
  ecoles: Ecole[];
  ecole: Ecole;
  annees=[];
  userid:any;
  

  constructor(public alertCtrl: AlertController,private router: Router, private eleveService: EleveService,private storage: Storage,
    private toastCtrl: ToastController) {
    
}

portChange() {

}

 
  ngOnInit() {
    this.eleveService.getEcole().subscribe((data:any)=>{
      console.log(data)
      if(data.code==800){
        this.ecoles=data.datas ;
      }
    });
    this.eleveService.getAnnees().subscribe((data:any)=>{
      if(data.code==800){
        this.annees= data.datas;
      }
    });
    this.storage.get('userid').then((val) => {
      this.userid= val;
      console.log(this.userid);
    });
  }
  saveAddEleve(){
    console.log(this.addEleveForm.value);
    let eleveform= this.addEleveForm.value;
    this.parameters.id_annee=eleveform.annee;
    this.parameters.id_ecole= eleveform.ecole.id_ecole;
    this.parameters.id_user= this.userid;
    this.parameters.matricule= eleveform.matricule;
    console.log(this.parameters);
    this.eleveService.saveParent(this.parameters).subscribe((data:any)=>{
          console.log(data);
          if(data.code==800){
            this.isadd=false;
            this.eleve=data.datas[0];
            this.classe=data.datas[1];
            this.matieres=data.datas[2];
            this.savedMatiere=this.matieres;
            this.annee=data.datas[3];
            this.idparent=data.datas[4];
          }else{
            let message="Matricule introuvable";
            this.presentToast(message);
          }
    });

  }
  souscrire(){
    this.souscrireData.id_annee=this.annee.id_annee;
    this.souscrireData.id_eleve=this.eleve.id_eleve;
    this.souscrireData.id_classe=this.classe.id_classe;
    this.souscrireData.id_parent=this.idparent;

    this.souscrireData.matieres= this.matieres;
    this.eleveService.souscrire(this.souscrireData).subscribe((data:any)=>{
      if(data.code==800){
        this.router.navigate(['home']);
      }else{
        let message="Echec de souscription ";
            this.presentToast(message);
      }
    });

    console.log(this.souscrireData);
  }
  datachanged(m){
    console.log(m);
    let mat = this.savedMatiere.find(ob => ob.id_matiere === m.id_matiere);
    let index = this.savedMatiere.findIndex(item => item.id_matiere=== m.id_matiere);
    console.log(index);
    if(mat.status==1){
       mat.status=2; 
    }else{
      mat.status=1;
      this.souscrimats.push(mat);
    }
    this.savedMatiere.splice(index,1,mat);
    console.log(this.savedMatiere);
  }
  exitApp() {
    this.alertCtrl.create({
      header : 'Attention!!',
      message: 'Revenir à l\'accueil',
      buttons : [
        {
          text: 'Annuler',
          role: 'cancel',
      },
      {
        text: 'OK',
        handler: () => {
          this.addEleveForm=  new FormGroup({
            matricule : new FormControl('', Validators.required),
            ecole : new FormControl('', Validators.required),
            annee : new FormControl('', Validators.required),
           
          });
          this.router.navigate(['home']);
        }
      }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

    async presentToast(mess:string) {
      const toast = await this.toastCtrl.create({
        message: mess,
        duration: 5000,
        position:'bottom',
        color: 'danger'
      });
      toast.present();
    }
  
}
