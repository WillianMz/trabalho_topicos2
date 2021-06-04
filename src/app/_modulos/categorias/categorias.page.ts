import { CategoriaService } from './../../_servicos/categoria.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Categoria } from 'src/app/_modelos/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categorias: Categoria[];

  constructor(
    private alertController: AlertController,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.listarCategorias();
  }


  listarCategorias(){
    this.categoriaService.getAll().subscribe(
      (response) => {
        this.categorias = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
