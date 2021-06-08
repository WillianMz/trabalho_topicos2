import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroHomePageRoutingModule } from './cadastro-home-routing.module';

import { CadastroHomePage } from './cadastro-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroHomePageRoutingModule
  ],
  declarations: [CadastroHomePage]
})
export class CadastroHomePageModule {}
