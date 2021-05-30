import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../_modulos/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'categorias',
        loadChildren: () => import('../_modulos/categorias/categorias.module').then(m => m.CategoriasPageModule)
      },
      {
        path: 'ofertas',
        loadChildren: () => import('../_modulos/ofertas/ofertas.module').then(m => m.OfertasPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
