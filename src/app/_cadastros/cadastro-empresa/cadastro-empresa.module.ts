import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEmpresaPageRoutingModule } from './cadastro-empresa-routing.module';

import { CadastroEmpresaPage } from './cadastro-empresa.page';
import { FormEmpresaComponent } from './forms/form-empresa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadastroEmpresaPageRoutingModule
  ],
  declarations: [CadastroEmpresaPage, FormEmpresaComponent]
})
export class CadastroEmpresaPageModule {}
