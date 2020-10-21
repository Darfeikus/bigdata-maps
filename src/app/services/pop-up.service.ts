import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +
      `<div>Capital: ${ data.name }</div>` +
      `<div>State: ${ data.state }</div>` +
      `<div>Population: ${ data.population }</div>`
  }

  makeDenuesPopup(data: any): string {
    return `` +
      `<div>Capital: ${ data.nombre }</div>` +
      `<div>State: ${ data.calle }</div>` +
      `<div>Population: ${ data.municipio }</div>`
  }

  makePoblacionPopup(data: any, tipo): string {
    
    var string = "";
    if(tipo == 0)
      string = `` + `<div>Total: ${ data.poblacion }</div>`;
    else if(tipo == 1)
      string = `` + `<div>Total: ${ data.poblacionMas } hombres </div>`;
    else
      string = `` + `<div>Total: ${ data.poblacionFem } mujeres </div>`;

    return string + `<div>Localidad: ${ data.localidad }</div>`
  }
}
