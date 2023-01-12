import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaProductos !: any[];
  constructor(private dataServices:ProductosService,private router:Router) { } //Importamos los Servicios y Router para dirigir a la pagina detalle

  ngOnInit(): void {
    this.listaProductos = this.dataServices.productos; //el array con los productos del servicio se lo pasamos al array listaProductos
  }

  editar(id:number){
    this.router.navigate(['/detalle',id]);
  }
}
