import { parent } from './parent';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const api = 'http://localhost:8080/auth/';
//const api = 'http://192.168.0.102:8080/auth/';
@Injectable({
  providedIn: 'root'
})

export class EleveService {
iduser=0;
username='';
password='';
  constructor(private http: HttpClient) { }
  registeruser(parent:parent){
    let apiurl = api+'register';
    return this.http.post(apiurl,parent)
  }
  confirm(iduser:number, code:string){
    let apiurl = api+'confirm/'+iduser+'/'+code;
    console.log(apiurl);
    return this.http.get(apiurl);
  }
  getEcole(){
    let apiurl = api +'ecoles'
    return this.http.get(apiurl);
  }
  getAnnees(){
    let apiurl = api + 'annees';
    return this.http.get(apiurl);
  }
  saveParent(parameters:any){
    let apiurl = api + 'addParent';
    return this.http.post(apiurl,parameters);
  }
}
