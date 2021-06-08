import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroOfertaPageRoutingModule } from './cadastro-oferta-routing.module';

import { CadastroOfertaPage } from './cadastro-oferta.page';
import { FormOfertaComponent } from './forms/form-oferta.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadastroOfertaPageRoutingModule
  ],
  declarations: [CadastroOfertaPage, FormOfertaComponent]
})
export class CadastroOfertaPageModule {}
