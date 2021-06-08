import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEmpresaPage } from './cadastro-empresa.page';
import { FormEmpresaComponent } from './forms/form-empresa.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroEmpresaPage
  },
  {
    path: 'cadastro',
    component: FormEmpresaComponent
  },
  {
    path: 'edicao/:id',
    component: FormEmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEmpresaPageRoutingModule {}
