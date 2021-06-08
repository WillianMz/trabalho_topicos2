import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Oferta } from 'src/app/_modelos/oferta';
import { OfertaService } from 'src/app/_servicos/oferta.service';

@Component({
  selector: 'app-form-oferta',
  templateUrl: './form-oferta.component.html',
  styleUrls: ['./form-oferta.component.scss'],
})
export class FormOfertaComponent implements OnInit {

  ofertaId: number;
  ofertaForm: FormGroup;

  constructor(
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private ofertaService: OfertaService,
    private router: Router,
  ) {
    
    let oferta = {
        id: null,
        descricao: '',
        dtInicio: '',
        dtFim: '',
        empresaID: null,
        empresaNome: '',
        detalhes: '',
        informacoes: '',
        url_img: '',
        destaque: false
    };
    this.inicializaFormulario(oferta);
   }

   ngOnInit() {
     const id = this.activatedRoute.snapshot.paramMap.get('id');
     if (id) {
        this.ofertaId = parseInt(id);
        this.ofertaService
         .getById(this.ofertaId)
         .subscribe((oferta) => {
           this.inicializaFormulario(oferta);
         },
         (erro) => {
          console.error(erro);
        }
         );
     }
     
   }

  inicializaFormulario(oferta: Oferta) {
    this.ofertaForm = new FormGroup({
        descricao: new FormControl(oferta.descricao),
        dtInicio: new FormControl(oferta.dtInicio),
        dtFim: new FormControl(oferta.dtFim),
        empresaID:  new FormControl(oferta.empresaID),
        empresaNome:  new FormControl(oferta.empresaNome),
        detalhes: new FormControl(oferta.detalhes),
        informacoes: new FormControl(oferta.informacoes),
        url_img: new FormControl(oferta.url_img),
        destaque: new FormControl(oferta.destaque)
    });
    
  }

  salvar() {
    const oferta = {...this.ofertaForm.value, id: this.ofertaId};
    this.ofertaService.salvar(oferta).subscribe(
      () => this.router.navigate(['cadastro-oferta']),
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

  get nome() {
    return this.ofertaForm.get('descricao');
  }

}
