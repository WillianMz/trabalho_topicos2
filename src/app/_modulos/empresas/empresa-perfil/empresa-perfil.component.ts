import { Empresa } from './../../../_modelos/empresa';
import { EmpresaService } from './../../../_servicos/empresa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empresa-perfil',
  templateUrl: './empresa-perfil.component.html',
  styleUrls: ['./empresa-perfil.component.scss'],
})
export class EmpresaPerfilComponent implements OnInit {

  empresaID: number;
  empresa: Empresa = new Empresa();

  constructor(
    private empresaService: EmpresaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.carregarEmpresa();
  }

  private carregarEmpresa(){
    const id =  this.activatedRoute.snapshot.paramMap.get('id');

    if(id){
      this.empresaID = parseInt(id);
      this.empresaService.getById(this.empresaID).subscribe(
        (response) => {
          this.empresa = response;
          console.log(this.empresa);
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

}
