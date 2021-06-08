import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Empresa } from 'src/app/_modelos/empresa';
import { EmpresaService } from 'src/app/_servicos/empresa.service';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.scss'],
})
export class FormEmpresaComponent implements OnInit {

  empresaId: number;
  empresaForm: FormGroup;

  constructor(
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private empresaService: EmpresaService,
    private router: Router,
  ) {
    
    let empresa = {
        id: null,
        nome: '',
        fantasia: '',
        sobre: '',
        horario: '',
        endereco: '',
        cidadeId: null,
        cidadeNome: '',
        telefone: '',
        whatsapp: '',
        facebook: '',
        instagram: '',

        url_logo: '',
        url_capa: '',

        categoriaId: null,
        categoriaNome: '',

        //horario
        dom: '',
        seg: '',
        ter: '',
        qua: '',
        qui: '',
        sex: '',
        sab: '',

        destaque: false
    };
    this.inicializaFormulario(empresa);
   }

   ngOnInit() {
     const id = this.activatedRoute.snapshot.paramMap.get('id');
     if (id) {
        this.empresaId = parseInt(id);
        this.empresaService
         .getById(this.empresaId)
         .subscribe((empresa) => {
           this.inicializaFormulario(empresa);
         },
         (erro) => {
          console.error(erro);
        }
         );
     }
     
   }

  inicializaFormulario(empresa: Empresa) {
    this.empresaForm = new FormGroup({
        nome: new FormControl(empresa.nome),
        fantasia: new FormControl(empresa.fantasia),
        sobre: new FormControl(empresa.sobre),
        horario: new FormControl(empresa.horario),
        endereco: new FormControl(empresa.endereco),
        cidadeId: new FormControl(empresa.cidadeId),
        cidadeNome: new FormControl(empresa.cidadeNome),
        telefone: new FormControl(empresa.telefone),
        whatsapp: new FormControl(empresa.whatsapp),
        facebook: new FormControl(empresa.facebook),
        instagram: new FormControl(empresa.instagram),

        url_logo: new FormControl(empresa.url_logo),
        url_capa: new FormControl(empresa.url_capa),

        categoriaId: new FormControl(empresa.categoriaId),
        categoriaNome: new FormControl(empresa.categoriaNome),

        //horario
        dom: new FormControl(empresa.dom),
        seg: new FormControl(empresa.seg),
        ter: new FormControl(empresa.ter),
        qua: new FormControl(empresa.qua),
        qui: new FormControl(empresa.qui),
        sex: new FormControl(empresa.sex),
        sab: new FormControl(empresa.sab),

        destaque: new FormControl(empresa.destaque)
    });
    
  }

  salvar() {
    const empresa = {...this.empresaForm.value, id: this.empresaId};
    this.empresaService.salvar(empresa).subscribe(
      () => this.router.navigate(['cadastro-empresa']),
      (erro) => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível salvar a empresa ${empresa.nome}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
    );
    
  }

  get nome() {
    return this.empresaForm.get('nome');
  }

}