import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Categoria } from '../_modelos/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  // private url = 'http://localhost:3000/categorias';
  private url = 'http://localhost:8080/trabalho_topicos2-api-1.0.0/resources/categorias';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Categoria[]>{
    let response = this.http.get<Categoria[]>(this.url);
    return response;
  }

  getDestaque(): Observable<Categoria[]>{
    let response = this.http.get<Categoria[]>(`${this.url}?destaque=true`);
    return response;
  }

  getCategoriaById(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.url}/${id}`);
  }

  excluir(id: number): Observable<object> {
    return this.http.delete(`${this.url}/${id}`);
  }

  private adicionar(categoria: Categoria) {
   return this.http.post(this.url, categoria);
  }

  private atualizar(categoria: Categoria) {
   return this.http.put(`${this.url}/${categoria.id}`, categoria);
  }

  salvar(categoria: Categoria) {
    if(categoria.id) {
     return this.atualizar(categoria);
    } else {
     return this.adicionar(categoria);
    }
  }

}
