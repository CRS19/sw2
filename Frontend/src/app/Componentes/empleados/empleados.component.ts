import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/Servicios/empleado.service';



@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  constructor(
    private readonly empleadoService: EmpleadoService,
  ) { }



  ngOnInit() {
  }


  crearUsuario (){ 

  }


}
