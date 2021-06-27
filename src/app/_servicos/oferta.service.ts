import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from '../_modelos/oferta';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  // private url = "http://localhost:3000/ofertas";
  private url = "http://localhost:8080/trabalho_topicos2-api-1.0.0/resources/ofertas";

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Oferta[]>{
    let response = this.http.get<Oferta[]>(this.url);
    return response;
  }

  getById(id: number): Observable<Oferta>{
    let response = this.http.get<Oferta>(`${this.url}/${id}`);
    return response;
  }

  getByEmpresa(id: number): Observable<Oferta[]>{
    let response = this.http.get<Oferta[]>(`${this.url}?empresaID=${id}`);
    return response;
  }

  getDestaque(): Observable<Oferta[]>{
    let response = this.http.get<Oferta[]>(`${this.url}?destaque=true`);
    return response;
  }

  excluir(id: number): Observable<object> {
    return this.http.delete(`${this.url}/${id}`);
  }

  private adicionar(oferta: Oferta) {
   return this.http.post(this.url, oferta);
  }

  private atualizar(oferta: Oferta) {
   return this.http.put(`${this.url}/${oferta.id}`, oferta);
  }

  salvar(oferta: Oferta) {
    if(oferta.id) {
     return this.atualizar(oferta);
    } else {
     return this.adicionar(oferta);
    }
  }

}
