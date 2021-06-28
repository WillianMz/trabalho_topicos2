import { OfertaService } from './../../_servicos/oferta.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/_modelos/oferta';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  ofertas: Oferta[];

  constructor(
    private ofertaService: OfertaService,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.consultar();
  }

  refresh(event) {
    this.consultar();

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  private consultar(){
    this.ofertaService.getAll().subscribe(
      (response) => {
        this.ofertas = response;
        console.log(response);
        console.log(this.ofertas);
      },
      (error) => {
        this.exibirAlerta('Ocorreu um erro ao consultar dados', 5000, 'danger');
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
