import { EmpresaService } from './../../_servicos/empresa.service';
import { Empresa } from './../../_modelos/empresa';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.page.html',
  styleUrls: ['./empresas.page.scss'],
})
export class EmpresasPage implements OnInit {

  empresas: Empresa[];

  constructor(
    private alertController: AlertController,
    private empresaService: EmpresaService
  ) { }

  ngOnInit() {
    this.listarEmpresas();
  }

  listarEmpresas(){
    this.empresaService.getlAll().subscribe(
      (response) => {
        console.log(response);
        this.empresas = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
