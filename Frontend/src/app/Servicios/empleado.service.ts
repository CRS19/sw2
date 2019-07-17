import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Empleado } from '../Modelos/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  readonly URL_API = 'http://localhost:3000/api/empleados';

  seleccionarEmpleado: Empleado;
  empleados: Empleado[];

  constructor( private http: HttpClient) { }

  obtenerEmpleado(){
    return this.http.get(this.URL_API);
  }

  agregarEmpleado(Empleado: Empleado) {
    return this.http.post(this.URL_API, Empleado);
  }

  actualizarEmpleado (empleado: Empleado){  
    return this.http.put(this.URL_API + `/${empleado._id}`, empleado);
  }

  borrarEmpleado (_id: String){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
