import { CategoriaService } from './../../_servicos/categoria.service';
import { Oferta } from 'src/app/_modelos/oferta';
import { OfertaService } from './../../_servicos/oferta.service';
import { EmpresaService } from './../../_servicos/empresa.service';
import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/_modelos/empresa';
import { Categoria } from 'src/app/_modelos/categoria';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    preloadImages: true,
    lazy:true,
    speed: 300,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    //loop: true,
  };

  ofertas: Oferta[];
  empresas: Empresa[];
  categorias: Categoria[];

  constructor(
    private empresaService: EmpresaService,
    private ofertaService: OfertaService,
    private categoriaService: CategoriaService,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.empresasDestaque();
    this.ofertasDestaque();
    this.categoriasDestaque();
  }

  private categoriasDestaque(){
    this.categoriaService.getDestaque().subscribe(
      (response) => {
        this.categorias = response;
      },
      (error) => {
        this.exibirAlerta('Ocorreu um erro ao consultar dados', 10000, 'danger');
      }
    )
  }

  private empresasDestaque(){
    this.empresaService.getDestaque().subscribe(
      (response) => {
        this.empresas = response;
        console.log(this.empresas);
      },
      (error) => {
        this.exibirAlerta('Ocorreu um erro ao consultar dados', 10000, 'warning');
      }
    )
  }

  private ofertasDestaque(){
    this.ofertaService.getDestaque().subscribe(
      (response) => {
        this.ofertas = response;
        console.log(this.ofertas);
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
