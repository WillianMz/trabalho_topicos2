import { EmpresaPerfilComponent } from './empresa-perfil/empresa-perfil.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresasPageRoutingModule } from './empresas-routing.module';

import { EmpresasPage } from './empresas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresasPageRoutingModule
  ],
  declarations: [
    EmpresasPage,
    EmpresaPerfilComponent
  ]
})
export class EmpresasPageModule {}
