import { ModalsuiviPage } from './../modalsuivi/modalsuivi.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuivisPage } from './suivis.page';

const routes: Routes = [
  {
    path: '',
    component: SuivisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuivisPage],
  
})
export class SuivisPageModule {}
