import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../_modelos/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  // private url = "http://localhost:3000/empresas";
  private url = 'http://localhost:8080/trabalho_topicos2-api-1.0.0/resources/empresas';

  constructor(
    private http: HttpClient
  ) { }

  getlAll(): Observable<Empresa[]>{
    let response = this.http.get<Empresa[]>(this.url);
    return response;
  }

  getById(id: number): Observable<Empresa>{
    let respose = this.http.get<Empresa>(`${this.url}/${id}`);
    return respose;
  }

  getByCategoria(idCategoria: number): Observable<Empresa[]>{
    let response = this.http.get<Empresa[]>(`${this.url}?categoriaId=${idCategoria}`);
    return response;
  }

  getDestaque(): Observable<Empresa[]>{
    let response = this.http.get<Empresa[]>(`${this.url}?destaque=true`);
    return response;
  }

  excluir(id: number): Observable<object> {
    return this.http.delete(`${this.url}/${id}`);
  }

  private adicionar(empresa: Empresa) {
   return this.http.post(this.url, empresa);
  }

  private atualizar(empresa: Empresa) {
   return this.http.put(`${this.url}/${empresa.id}`, empresa);
  }

  salvar(empresa: Empresa) {
    if(empresa.id) {
     return this.atualizar(empresa);
    } else {
     return this.adicionar(empresa);
    }
  }

}
