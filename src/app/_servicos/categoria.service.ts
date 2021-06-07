import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Categoria } from '../_modelos/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url = 'http://localhost:3000/categorias';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Categoria[]>{
    let response = this.http.get<Categoria[]>(this.url);
    console.log(response);
    return response;
  }

  getDestaque(): Observable<Categoria[]>{
    let response = this.http.get<Categoria[]>(`${this.url}?destaque=true`);
    return response;
  }

}
