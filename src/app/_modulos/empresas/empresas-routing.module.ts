import { EmpresaPerfilComponent } from './empresa-perfil/empresa-perfil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresasPage } from './empresas.page';

const routes: Routes = [
  {
    path: '',
    component: EmpresasPage
  },
  {
    path: 'categoria/:id',
    component: EmpresasPage
  },
  {
    path: ':id',
    component: EmpresaPerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresasPageRoutingModule {}
