import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroCategoriaPage } from './cadastro-categoria.page';
import { FormCategoriaComponent } from './forms/form-categoria.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroCategoriaPage
  },
  {
    path: 'cadastro',
    component: FormCategoriaComponent
  },
  {
    path: 'edicao/:id',
    component: FormCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroCategoriaPageRoutingModule {}
