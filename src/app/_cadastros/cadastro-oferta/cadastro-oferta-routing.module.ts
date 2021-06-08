import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroOfertaPage } from './cadastro-oferta.page';
import { FormOfertaComponent } from './forms/form-oferta.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroOfertaPage
  },
  {
    path: 'cadastro',
    component: FormOfertaComponent
  },
  {
    path: 'edicao/:id',
    component: FormOfertaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroOfertaPageRoutingModule {}
