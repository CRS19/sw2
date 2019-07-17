import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { IntagramModule } from './intagram/intagram.module';

import { EmpleadosComponent } from './Componentes/empleados/empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
  
    IntagramModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
