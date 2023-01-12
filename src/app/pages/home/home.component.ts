import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaProductos !: any[];
  constructor(private dataServices:ProductosService) { }

  ngOnInit(): void {
    this.listaProductos = this.dataServices.productos; //el array con los productos del servicio se lo pasamos al array listaProductos
  }

  editar(id:number){
    console.log(id);
  }
}
