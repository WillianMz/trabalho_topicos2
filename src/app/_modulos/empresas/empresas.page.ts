import { EmpresaService } from './../../_servicos/empresa.service';
import { Empresa } from './../../_modelos/empresa';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.page.html',
  styleUrls: ['./empresas.page.scss'],
})
export class EmpresasPage implements OnInit {

  categoriaID: number;
  empresas: Empresa[];
  empresasFiltradas: Empresa[];
  filtro: string;

  constructor(
    private empresaService: EmpresaService,
    private activatedRoute: ActivatedRoute,
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

  procurar(event){
    this.filtro = event.target.value.toLowerCase();
    console.log(this.filtro);
    this.empresasFiltradas = this.filtrarEmpresas(this.filtro);
  }

  limparConsulta(){
    this.empresasFiltradas = this.empresas;
  }

  private filtrarEmpresas(nome: string){
    this.empresasFiltradas = this.empresas;

    return this.empresasFiltradas.filter((empresa) => {
      return empresa.fantasia.toLowerCase().includes(nome.toLowerCase());
    })
  }

  private consultar(){
    const id =  this.activatedRoute.snapshot.paramMap.get('id');

    if(id){
      this.categoriaID = parseInt(id);
      this.empresaService.getByCategoria(this.categoriaID).subscribe(
        (response) => {
          this.empresas = response;
          this.empresasFiltradas = this.empresas;
        },
        (error) => {
          this.exibirAlerta('Ocorreu um erro ao consultar dados', 10000, 'danger');
        }
      )
    }
    else{
      this.empresaService.getlAll().subscribe(
        (response) => {
          this.empresas = response;
          this.empresasFiltradas = this.empresas;
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
