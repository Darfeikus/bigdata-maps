import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Denues } from '../models/denues';
import { Estados } from '../models/estados';
import { Municipios } from '../models/municipios';
import { Unidades } from '../models/unidades';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

 

  apiURL = 'http://localhost:8087/api/auth/';
  // apiURL = 'https://valid-decoder-258800.appspot.com/';
  
  
  constructor(
    private http: HttpClient,
  ) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'

    })
  }  

  
  getEstados(): Observable<Estados> {
    console.log("estados: " + this.apiURL);
    return this.http.get<Estados>(this.apiURL + 'estados', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }   

  getMunicipios(idestado): Observable<Municipios> {
    console.log("municipios: " + this.apiURL);
    
    return this.http.get<Municipios>(this.apiURL + 'municipios?idestado=' + idestado, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getLocalidad(idmunicipio,idestado): Observable<Municipios> {
    console.log("Localidad: " + this.apiURL);
    
    return this.http.get<Municipios>(this.apiURL + 'localidades?idestado=' + idestado + '&idmunicipio=' + idmunicipio, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getUnidades(): Observable<Unidades> {
    console.log("unidades: " + this.apiURL);
    return this.http.get<Unidades>(this.apiURL + 'categorias', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  getDenues(idestado, idmunicipio, tipo): Observable<Denues> {
    console.log("empresas: " + this.apiURL + idestado);
    return this.http.get<Denues>(this.apiURL + 'empresas?idestado=' + idestado +
    '&idmunicipio=' + idmunicipio + '&tipo=' + tipo, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  getPoblacion(idestado, idmunicipio, idlocalidad, tipoPob): Observable<Denues> {
    console.log("poblacion: " + this.apiURL);
    return this.http.get<Denues>(this.apiURL + 'poblacion?idestado=' + idestado +
    '&idmunicipio=' + idmunicipio + '&idlocacion=' + idlocalidad, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

   // Error handling 
   handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
