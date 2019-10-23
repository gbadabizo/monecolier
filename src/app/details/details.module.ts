import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsPage } from './details.page';

const routes: Routes = [
  {
    path: 'details',
    component: DetailsPage,
   
        children: [
       
            { path: 'suivis', loadChildren: '../suivis/suivis.module#SuivisPageModule' },
           { path: 'messages', loadChildren: '../messages/messages.module#MessagesPageModule' },
           { path: 'informations', loadChildren: '../informations/informations.module#InformationsPageModule' },
        ]
  },
  {
    path:'',
    redirectTo:'details/suivis',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
