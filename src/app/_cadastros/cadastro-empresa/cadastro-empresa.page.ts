import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Empresa } from 'src/app/_modelos/empresa';
import { EmpresaService } from 'src/app/_servicos/empresa.service';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.page.html',
  styleUrls: ['./cadastro-empresa.page.scss'],
})
export class CadastroEmpresaPage implements OnInit {

  empresas: Empresa[];

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private empresaService: EmpresaService
    ) { }

  ngOnInit() {
  }

  listar() {
    this.empresaService
      .getlAll()
      .subscribe(
        (dados) => {
          this.empresas = dados;
        },
        (erro) => {
          console.error(erro);
        }
      );
  }

  confirmarExclusao(empresa: Empresa) {

    this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir a empresa ${empresa.nome}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.excluir(empresa);
          }
        },
        'Não'
      ]
    }).then(alerta => alerta.present());

  }

  private excluir(empresa: Empresa) {
    this.empresaService
      .excluir(empresa.id)
      .subscribe(
        () => this.listar(),
        (erro) => {
          console.error(erro);
          this.toastController.create({
            message: `Não foi possível excluir a empresa ${empresa.nome}`,
            duration: 5000,
            keyboardClose: true,
            color: 'danger'
          }).then(t => t.present());
        }
      );
    
  }

  imagemInvalida(event) {
    event.srcElement.shadowRoot.children[0].src = "../../../assets/imagens/sem_imagem.png";
  }

  ionViewWillEnter() {
    this.listar();
  }

}
