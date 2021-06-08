import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./_modulos/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./_modulos/categorias/categorias.module').then(m => m.CategoriasPageModule)
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./_modulos/ofertas/ofertas.module').then(m => m.OfertasPageModule)
  },
  {
    path: 'empresas',
    loadChildren: () => import('./_modulos/empresas/empresas.module').then(m => m.EmpresasPageModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },  {
    path: 'cadastro-home',
    loadChildren: () => import('./_cadastros/cadastro-home/cadastro-home.module').then( m => m.CadastroHomePageModule)
  },
  {
    path: 'cadastro-empresa',
    loadChildren: () => import('./_cadastros/cadastro-empresa/cadastro-empresa.module').then( m => m.CadastroEmpresaPageModule)
  },
  {
    path: 'cadastro-categoria',
    loadChildren: () => import('./_cadastros/cadastro-categoria/cadastro-categoria.module').then( m => m.CadastroCategoriaPageModule)
  },
  {
    path: 'cadastro-oferta',
    loadChildren: () => import('./_cadastros/cadastro-oferta/cadastro-oferta.module').then( m => m.CadastroOfertaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
