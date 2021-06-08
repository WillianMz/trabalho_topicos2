import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Oferta } from 'src/app/_modelos/oferta';
import { OfertaService } from 'src/app/_servicos/oferta.service';

@Component({
  selector: 'app-cadastro-oferta',
  templateUrl: './cadastro-oferta.page.html',
  styleUrls: ['./cadastro-oferta.page.scss'],
})
export class CadastroOfertaPage implements OnInit {

  ofertas: Oferta[];

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private ofertaService: OfertaService
    ) { }

  ngOnInit() {
  }

  listar() {
    this.ofertaService
      .getAll()
      .subscribe(
        (dados) => {
          this.ofertas = dados;
        },
        (erro) => {
          console.error(erro);
        }
      );
  }

  confirmarExclusao(oferta: Oferta) {

    this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir a oferta ${oferta.descricao}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.excluir(oferta);
          }
        },
        'Não'
      ]
    }).then(alerta => alerta.present());

  }

  private excluir(oferta: Oferta) {
    this.ofertaService
      .excluir(oferta.id)
      .subscribe(
        () => this.listar(),
        (erro) => {
          console.error(erro);
          this.toastController.create({
            message: `Não foi possível excluir a oferta ${oferta.descricao}`,
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
