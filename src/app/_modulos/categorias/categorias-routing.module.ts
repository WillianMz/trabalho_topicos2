import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasPage } from './categorias.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasPage
  },
  {
    path: 'novo',
    component: CategoriaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasPageRoutingModule {}
