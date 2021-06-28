import { Empresa } from './../../../_modelos/empresa';
import { OfertaService } from './../../../_servicos/oferta.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/_modelos/oferta';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta-form',
  templateUrl: './oferta-form.component.html',
  styleUrls: ['./oferta-form.component.scss'],
})
export class OfertaFormComponent implements OnInit {

  ofertaID: number;
  oferta: Oferta = new Oferta;
  empresa: Empresa = new Empresa;

  constructor(
    private ofertaService: OfertaService,
    private toast: ToastController,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.carregarOferta();
  }

  private carregarOferta(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id){
      this.ofertaID = parseInt(id);
      this.ofertaService.getById(this.ofertaID).subscribe(
        (response) => {
          this.oferta = response;
          this.empresa = this.oferta.empresa;
          console.log(this.empresa);
        },
        (error) => {
          this.exibirAlerta('Ocorreu um erro ao consultar dados', 5000, 'danger');
        }
      )
    }

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
