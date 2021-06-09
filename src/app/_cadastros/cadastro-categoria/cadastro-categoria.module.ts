import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroCategoriaPageRoutingModule } from './cadastro-categoria-routing.module';

import { CadastroCategoriaPage } from './cadastro-categoria.page';
import { FormCategoriaComponent } from './forms/form-categoria.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadastroCategoriaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CadastroCategoriaPage, FormCategoriaComponent]
})
export class CadastroCategoriaPageModule {}
