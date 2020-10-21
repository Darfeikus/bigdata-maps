import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopUpService } from '../services/pop-up.service';
import { DataApiService } from '../services/data-api.service';

import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/usa-capitals.geojson';

  constructor(private http: HttpClient,
    private popupService: PopUpService,
    private dataApiService: DataApiService) { }

    makeDenuesMarkers(map: L.map, idestado, idmunicipio, actividad): void {
   
      this.dataApiService.getDenues(idestado, idmunicipio, actividad).subscribe((res: any) => {        
        for (const c of res) {
          const lat = parseFloat(c.lat);
          const lon = parseFloat(c.lng);
          console.log(lat + ' ' + lon);
          const marker = L.marker([lat, lon],
            {
              icon: L.icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: 'assets/522110.png',
              shadowUrl: 'assets/marker-shadow.png'
              })
            }); 

          marker.bindPopup(this.popupService.makeDenuesPopup(c));
          marker.addTo(map);

          //.addTo(map);
        }
      });
    
  }

  makePoblacionMarkers(map: L.map, idestado, idmunicipio, idlocalidad, tipoPob): void {
   
    this.dataApiService.getPoblacion(idestado, idmunicipio, idlocalidad, tipoPob).subscribe((res: any) => {

      for (const c of res) {

        var lat = c.lat.toString();
        var lon = c.lng.toString();

        var arrlat = [];
        var arrlon = [];

        if(lat.length == 7)
          arrlat.push(Number(lat.substring(0,3)), Number(lat.substring(3,5)), Number(lat.substring(5,7)))
        else
          arrlat.push(Number(lat.substring(0,2)), Number(lat.substring(2,4)), Number(lat.substring(4,6)))

        if(lon.length == 7)
          arrlon.push(Number(lon.substring(0,3)), Number(lon.substring(3,5)), Number(lon.substring(5,7)))
        else
          arrlon.push(Number(lon.substring(0,2)), Number(lon.substring(2,4)), Number(lon.substring(4,6)))

        lat = arrlat[0] + arrlat[1]/60 + arrlat[2]/3600;
        lon = arrlon[0] + arrlon[1]/60 + arrlon[2]/3600;

        const marker = L.marker([lon, -lat],
          {
            icon: L.icon({
            iconSize: [ 25, 41 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: 'assets/522110.png',
            shadowUrl: 'assets/marker-shadow.png'
            })
          }); 

        marker.bindPopup(this.popupService.makePoblacionPopup(c,tipoPob));
        marker.addTo(map);

        //.addTo(map);
      }
    });
  
}

  makeCapitalMarkers(map: L.map): void {
  
          this.http.get(this.capitals).subscribe((res: any) => {
        for (const c of res.features) {
          const lat = c.geometry.coordinates[0];
          const lon = c.geometry.coordinates[1];
          const marker = L.marker([lon, lat]);

          marker.bindPopup(this.popupService.makeCapitalPopup(c.properties));
          marker.addTo(map);

          //.addTo(map);
        }
      });
    
  }
}
