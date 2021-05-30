import { OfertaFormComponent } from './oferta-form/oferta-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertasPage } from './ofertas.page';

const routes: Routes = [
  {
    path: '',
    component: OfertasPage
  },
  {
    path: 'novo',
    component: OfertaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertasPageRoutingModule {}
