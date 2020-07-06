import {IMesa} from './../../modelos/Mesas';
import { Component, OnInit } from '@angular/core';
import {MesasService} from 'src/app/servicios/mesas.service'
@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {

  constructor(private MesasServicio: MesasService) { }
mesas: IMesa[];
  ngOnInit(): void {
    this.MesasServicio.ListaMesas()
    .subscribe(datos =>{
      this.mesas = datos;
      console.table(datos)
    });
  }

}
