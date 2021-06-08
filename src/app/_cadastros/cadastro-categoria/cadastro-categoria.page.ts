import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Categoria } from 'src/app/_modelos/categoria';
import { CategoriaService } from 'src/app/_servicos/categoria.service';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.page.html',
  styleUrls: ['./cadastro-categoria.page.scss'],
})
export class CadastroCategoriaPage implements OnInit {

  categorias: Categoria[];

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
  }

  listar() {
    this.categoriaService
      .getAll()
      .subscribe(
        (dados) => {
          this.categorias = dados;
        },
        (erro) => {
          console.error(erro);
        }
      );
  }

  confirmarExclusao(categoria: Categoria) {

    this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir a categoria ${categoria.nome}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.excluir(categoria);
          }
        },
        'Não'
      ]
    }).then(alerta => alerta.present());

  }

  private excluir(categoria: Categoria) {
    this.categoriaService
      .excluir(categoria.id)
      .subscribe(
        () => this.listar(),
        (erro) => {
          console.error(erro);
          this.toastController.create({
            message: `Não foi possível excluir a categoria ${categoria.nome}`,
            duration: 5000,
            keyboardClose: true,
            color: 'danger'
          }).then(t => t.present());
        }
      );
    
  }

  ionViewWillEnter() {
    this.listar();
  }

}
