import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroHomePage } from './cadastro-home.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroHomePageRoutingModule {}
