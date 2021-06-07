import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../_modelos/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url = "http://localhost:3000/empresas";

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

}
