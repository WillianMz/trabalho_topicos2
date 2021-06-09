import { CategoriaService } from './../../_servicos/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Categoria } from 'src/app/_modelos/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categorias: Categoria[];
  filtro: string;
  categoriasFiltradas: Categoria[];

  constructor(
    private categoriaService: CategoriaService,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.listarCategorias();
  }

  refresh(event) {
    this.listarCategorias();

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  procurar(event){
    this.filtro = event.target.value.toLowerCase();
    console.log(this.filtro);
    this.categoriasFiltradas = this.filtrarCategorias(this.filtro);
  }

  limparConsulta(){
    this.categoriasFiltradas = this.categorias;
  }

  private filtrarCategorias(nome: string){
    this.categoriasFiltradas = this.categorias;

    return this.categoriasFiltradas.filter((filtro) => {
      return filtro.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }

  private listarCategorias(){
    this.categoriaService.getAll().subscribe(
      (response) => {
        this.categorias = response;
        this.categoriasFiltradas = this.categorias;
      },
      (error) => {
        this.exibirAlerta('Ocorreu um erro ao consultar dados', 10000, 'danger');
      }
    )
  }

  private exibirAlerta(msg: string, duracao: number, cor: string){
    this.toast.create({
      message: msg,
      duration: duracao,
      keyboardClose: true,
      color: cor
    }).then(t => t.present());
  }

}
