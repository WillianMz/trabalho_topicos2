import { OfertaFormComponent } from './oferta-form/oferta-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertasPageRoutingModule } from './ofertas-routing.module';

import { OfertasPage } from './ofertas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertasPageRoutingModule
  ],
  declarations: [
    OfertasPage,
    OfertaFormComponent
  ]
})
export class OfertasPageModule {}
