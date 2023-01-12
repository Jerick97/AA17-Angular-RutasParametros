import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id!:number;
  productoDetalle!:any[];
  constructor(private route:ActivatedRoute, private dataServices:ProductosService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')); //Obtenemos el ID de la url
    console.log(this.dataServices.detalleProducto(this.id)); //Mostramos en consola el detalle del producto por el ID
    this.productoDetalle = this.dataServices.detalleProducto(this.id);
  }

}
