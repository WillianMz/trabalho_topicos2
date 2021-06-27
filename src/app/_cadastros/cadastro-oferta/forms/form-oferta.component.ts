import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Empresa } from 'src/app/_modelos/empresa';
import { Oferta } from 'src/app/_modelos/oferta';
import { EmpresaService } from 'src/app/_servicos/empresa.service';
import { OfertaService } from 'src/app/_servicos/oferta.service';

@Component({
  selector: 'app-form-oferta',
  templateUrl: './form-oferta.component.html',
  styleUrls: ['./form-oferta.component.scss'],
})
export class FormOfertaComponent implements OnInit {
  mesesAbreviados = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];

  private empresas: Empresa[];
  ofertaId: number;
  ofertaForm: FormGroup;

  constructor(
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private ofertaService: OfertaService,
    private empresaService: EmpresaService,
    private router: Router,
  ) {
    
    let oferta = {
        id: null,
        descricao: '',
        dtInicio: '',
        dtFim: '',
        empresa: null,
        detalhes: '',
        informacoes: '',
        url_img: '',
        destaque: false
    };
    this.inicializaFormulario(oferta);
   }

   ngOnInit() {
     this.empresaService.getlAll().subscribe(empresas => this.empresas = empresas);
     const id = this.activatedRoute.snapshot.paramMap.get('id');
     if (id) {
        this.ofertaId = parseInt(id);
        this.ofertaService
         .getById(this.ofertaId)
         .subscribe((oferta) => {
           this.inicializaFormulario(oferta);
           console.log(this.empresas);
            
           this.ofertaForm.setControl('empresa', new FormControl(this.empresas.find(x => x.id === this.ofertaForm.get(`empresa`).value.id)));
         },
         (erro) => {
          console.error(erro);
        }
         );
     }
     
   }

  inicializaFormulario(oferta: Oferta) {
    this.ofertaForm = new FormGroup({
        descricao: new FormControl(oferta.descricao, Validators.required),
        dtInicio: new FormControl(oferta.dtInicio, Validators.required),
        dtFim: new FormControl(oferta.dtFim, Validators.required),
        empresa:  new FormControl(oferta.empresa, Validators.required),
        detalhes: new FormControl(oferta.detalhes),
        informacoes: new FormControl(oferta.informacoes),
        url_img: new FormControl(oferta.url_img),
        destaque: new FormControl(oferta.destaque)
    });
    
  }

  salvar() {
    const oferta = {...this.ofertaForm.value, id: this.ofertaId};
    this.ofertaService.salvar(oferta).subscribe(
      () => this.router.navigate(['cadastro-oferta'], { replaceUrl: true }),
      (erro) => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível salvar a oferta ${oferta.descricao}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
    );
    
  }

  // setaDadosEmpresa(event) {
  //   if (event.detail.value) {
  //      let empresaId = parseInt(event.detail.value);
  //      this.empresaService
  //       .getById(empresaId)
  //       .subscribe((empresa) => {
  //         this.ofertaForm.setControl('empresaNome', new FormControl(empresa.nome));
  //       },
  //       (erro) => {
  //        console.error(erro);
  //       }
  //       );
  //   }
  // }

  get descricao() {
    return this.ofertaForm.get('descricao');
  }

  get dtInicio() {
    return this.ofertaForm.get('dtInicio');
  }

  get dtFim() {
    return this.ofertaForm.get('dtFim');
  }

  get empresa() {
    return this.ofertaForm.get('empresa');
  }

  cancelar() {
    this.router.navigate(['cadastro-oferta'], { replaceUrl: true });
  }

  // get empresaNome() {
  //   return this.ofertaForm.get('empresaNome');
  // }

}
