import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Categoria } from 'src/app/_modelos/categoria';
import { Empresa } from 'src/app/_modelos/empresa';
import { CategoriaService } from 'src/app/_servicos/categoria.service';
import { EmpresaService } from 'src/app/_servicos/empresa.service';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.scss'],
})
export class FormEmpresaComponent implements OnInit {

  private categorias: Categoria[];
  empresaId: number;
  empresaForm: FormGroup;

  constructor(
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private empresaService: EmpresaService,
    private categoriaService: CategoriaService,
    private router: Router,
  ) {
    
    let empresa = {
        id: null,
        nome: '',
        fantasia: '',
        sobre: '',
        endereco: '',
        telefone: '',
        whatsapp: '',
        facebook: '',
        instagram: '',

        url_logo: '',
        url_capa: '',

        categoria: null,

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
     this.categoriaService.getAll().subscribe(categorias => this.categorias = categorias);
     const id = this.activatedRoute.snapshot.paramMap.get('id');
     if (id) {
        this.empresaId = parseInt(id);
        this.empresaService
         .getById(this.empresaId)
         .subscribe((empresa) => {
           this.inicializaFormulario(empresa);
           this.empresaForm.setControl('categoria', new FormControl(this.categorias.find(x => x.id === this.empresaForm.get(`categoria`).value.id)));
           //this.empresaForm.get(`categoria`).setValue(this.categorias.find(x => x.id === this.empresaForm.get(`categoria`).value.id));
         },
         (erro) => {
          console.error(erro);
        }
         );
     }
   }

  inicializaFormulario(empresa: Empresa) {
    this.empresaForm = new FormGroup({
        nome: new FormControl(empresa.nome, [
          Validators.required,
          Validators.minLength(3)
        ]),
        fantasia: new FormControl(empresa.fantasia, [
          Validators.required,
          Validators.minLength(3)
        ]),
        sobre: new FormControl(empresa.sobre),
        // horario: new FormControl(empresa.horario),
        endereco: new FormControl(empresa.endereco),
        // cidadeId: new FormControl(empresa.cidadeId),
        // cidadeNome: new FormControl(empresa.cidadeNome),
        telefone: new FormControl(empresa.telefone, Validators.required),
        whatsapp: new FormControl(empresa.whatsapp),
        facebook: new FormControl(empresa.facebook),
        instagram: new FormControl(empresa.instagram),

        url_logo: new FormControl(empresa.url_logo),
        url_capa: new FormControl(empresa.url_capa),

        categoria: new FormControl(empresa.categoria, Validators.required),

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

  // setaDadosCategoria(event) {
  //   if (event.detail.value) {
  //      let categoriaId = parseInt(event.detail.value);
  //      this.categoriaService
  //       .getCategoriaById(categoriaId)
  //       .subscribe((categoria) => {
  //         this.empresaForm.setControl('categoriaNome', new FormControl(categoria.nome));
  //       },
  //       (erro) => {
  //        console.error(erro);
  //       }
  //       );
  //   }
  // }

  get nome() {
    return this.empresaForm.get('nome');
  }

  get fantasia() {
    return this.empresaForm.get('fantasia');
  }

  get telefone() {
    return this.empresaForm.get('telefone');
  }

  get categoria() {
    return this.empresaForm.get('categoria');
  }

  cancelar() {
    this.router.navigate(['cadastro-empresa']);
  }

  // get categoriaNome() {
  //   return this.empresaForm.get('categoriaNome');
  // }
}
