import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Categoria } from 'src/app/_modelos/categoria';
import { CategoriaService } from 'src/app/_servicos/categoria.service';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.scss'],
})
export class FormCategoriaComponent implements OnInit {

  categoriaId: number;
  categoriaForm: FormGroup;

  constructor(
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private categoriaService: CategoriaService,
    private router: Router,
  ) {
    let categoria = {
      id: null,
      nome: '',
      url_img: '',
    };
    this.inicializaFormulario(categoria);
   }

   ngOnInit() {
    console.log('ngOnInit');
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
       this.categoriaId = parseInt(id);
       this.categoriaService
        .getCategoriaById(this.categoriaId)
        .subscribe((categoria) => {
          this.inicializaFormulario(categoria);
        });
    }
  }

  inicializaFormulario(categoria: Categoria) {
    this.categoriaForm = new FormGroup({
      nome: new FormControl(categoria.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150)
      ]),
      url_img: new FormControl(categoria.url_img, [
        Validators.required,
        Validators.minLength(3)
      ]),
    })
  }

  salvar() {
    const categoria = {...this.categoriaForm.value, id: this.categoriaId};
    this.categoriaService.salvar(categoria).subscribe(
      () => this.router.navigate(['cadastro-categoria']),
      (erro) => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível salvar a categoria ${categoria.nome}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
    );
    
  }

  get nome() {
    return this.categoriaForm.get('nome');
  }

  get url_img() {
    return this.categoriaForm.get('url_img');
  }

}
