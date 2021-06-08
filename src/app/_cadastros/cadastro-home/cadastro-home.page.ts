import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-home',
  templateUrl: './cadastro-home.page.html',
  styleUrls: ['./cadastro-home.page.scss'],
})
export class CadastroHomePage implements OnInit {
  public appPages = [
    { title: 'Cadastro de Empresas', url: '/cadastro-empresa', icon: 'home' },
    { title: 'Cadastro de Categorias', url: '/cadastro-categoria', icon: 'book' },
    { title: 'Cadastro de Ofertas', url: '/cadastro-oferta', icon: 'people-circle' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
