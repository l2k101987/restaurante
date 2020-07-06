import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMesa} from './../modelos/Mesas';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  constructor(private http:HttpClient, @Inject('base') private baseURL: string) { }
  ruta:string = this.baseURL +'mesas';
  ListaMesas(): Observable<IMesa[]>{
    return this.http.get<IMesa[]>(this.ruta);
  }
}
