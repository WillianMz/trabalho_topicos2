import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from '../_modelos/oferta';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private url = "http://localhost:3000/ofertas";

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

}
