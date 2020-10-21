(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-map></app-map>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bigdata-maps';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_marker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/marker.service */ "./src/app/services/marker.service.ts");
/* harmony import */ var _services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            providers: [_services_marker_service__WEBPACK_IMPORTED_MODULE_5__["MarkerService"], _services_pop_up_service__WEBPACK_IMPORTED_MODULE_6__["PopUpService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: 30px;\n  }\n  \n  .map-frame {\n    border: 2px solid black;\n    height: 100%;\n  }\n  \n  #map {\n    height: 100%;\n  }"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> \n        \n  <label class=\"container\"> \n       <b> Estado </b>\n         \n       <select  name=\"selectedEstado\" id=\"selectedEstado\" [(ngModel)]=\"selectedEstado\" (change)=\"changeEstado();\">\n        <option *ngFor=\"let edo of arrEstados; let i = index\" [value]=\"edo.idestado\">\n          {{edo.estado}}\n        </option>\n      </select>\n     \n       <b> Municipio </b>\n       <select  name=\"selectedMunicipio\" id=\"selectedMunicipio\" [(ngModel)]=\"selectedMunicipio\" (change)=\"changeMunicipio()\">\n        <option *ngFor=\"let mun of arrMunicipios; let i = index\" [value]=\"mun.idmunicipio\">\n          {{mun.municipio}}\n        </option>\n      </select>\n\n      \n       <b> Unidad Economica </b>\n       <select  name=\"selectedUnidad\" id=\"selectedUnidad\" [(ngModel)]=\"selectedUnidad\">\n        <option *ngFor=\"let uni of arrActividades; let i = index\" [value]=\"uni.tipo\">\n          {{uni.descripcion}}\n        </option>\n      </select>\n\n      <button (click)=\"buscarDenues()\" type=”button”>Buscar</button>\n\n      <b> Localidad </b>\n       <select  name=\"selectedLocalidad\" id=\"selectedLocalidad\" [(ngModel)]=\"selectedLocalidad\">\n        <option *ngFor=\"let loc of arrLocalidades; let i = index\" [value]=\"loc.idlocalidad\">\n          {{loc.localidad}}\n        </option>\n      </select>\n      \n      <b> TipoPoblacion </b>\n       <select  name=\"selectedTipoPob\" id=\"selectedTipoPob\" [(ngModel)]=\"selectedTipoPob\">\n        <option *ngFor=\"let tipo of arrTipoPob; let i = index\" [value]=\"tipo.id\">\n          {{tipo.tipo}}\n        </option>\n      </select>\n\n      <button (click)=\"buscarPoblacion()\" type=”button”>Buscar</button>\n\n</label>\n</div>\n\n<div class=\"map-container\">\n  <div class=\"map-frame\">\n    <div id=\"map\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_marker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/marker.service */ "./src/app/services/marker.service.ts");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data-api.service */ "./src/app/services/data-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var iconRetinaUrl = 'assets/marker-icon-2x.png';
var iconUrl = 'assets/marker-icon.png';
var shadowUrl = 'assets/marker-shadow.png';
var iconDefault = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
    iconRetinaUrl: iconRetinaUrl,
    iconUrl: iconUrl,
    shadowUrl: shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});
leaflet__WEBPACK_IMPORTED_MODULE_1__["Marker"].prototype.options.icon = iconDefault;
var MapComponent = /** @class */ (function () {
    function MapComponent(markerService, dataApiService) {
        this.markerService = markerService;
        this.dataApiService = dataApiService;
        this.arrEstados = [];
        this.arrMunicipios = [];
        this.arrLocalidades = [];
        this.arrTipoPob = [
            {
                id: 0,
                tipo: "total"
            },
            {
                id: 1,
                tipo: "hombres"
            },
            {
                id: 2,
                tipo: "mujeres"
            }
        ];
        this.arrActividades = [];
    }
    MapComponent.prototype.ngAfterViewInit = function () {
        this.initMap();
        //this.markerService.makeCapitalMarkers(this.map);
        this.getEstados();
        this.getUnidades();
    };
    MapComponent.prototype.initMap = function () {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map', {
            center: [39.8282, -98.5795],
            zoom: 3
        });
        var tiles = leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });
        tiles.addTo(this.map);
    };
    MapComponent.prototype.getEstados = function () {
        var _this = this;
        this.dataApiService.getEstados().subscribe(function (estados) {
            _this.arrEstados = estados;
        });
    };
    MapComponent.prototype.getUnidades = function () {
        var _this = this;
        this.dataApiService.getUnidades().subscribe(function (unidades) {
            _this.arrActividades = unidades;
        });
    };
    MapComponent.prototype.changeEstado = function () {
        var _this = this;
        this.dataApiService.getMunicipios(this.selectedEstado)
            .subscribe(function (municipios) {
            _this.arrMunicipios = municipios;
        });
    };
    MapComponent.prototype.changeMunicipio = function () {
        var _this = this;
        this.dataApiService.getLocalidad(this.selectedMunicipio, this.selectedEstado)
            .subscribe(function (localidades) {
            _this.arrLocalidades = localidades;
        });
    };
    MapComponent.prototype.buscarDenues = function () {
        this.markerService.makeDenuesMarkers(this.map, this.selectedEstado, this.selectedMunicipio, this.selectedUnidad);
    };
    MapComponent.prototype.buscarPoblacion = function () {
        this.markerService.makePoblacionMarkers(this.map, this.selectedEstado, this.selectedMunicipio, this.selectedLocalidad, this.selectedTipoPob);
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_services_marker_service__WEBPACK_IMPORTED_MODULE_2__["MarkerService"],
            _services_data_api_service__WEBPACK_IMPORTED_MODULE_3__["DataApiService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/services/data-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/data-api.service.ts ***!
  \**********************************************/
/*! exports provided: DataApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApiService", function() { return DataApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataApiService = /** @class */ (function () {
    // apiURL = 'https://valid-decoder-258800.appspot.com/';
    function DataApiService(http) {
        this.http = http;
        this.apiURL = 'http://localhost:8080/api/auth/';
        /*========================================
          CRUD Methods for consuming RESTful API
        =========================================*/
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
    }
    DataApiService.prototype.getEstados = function () {
        console.log("estados: " + this.apiURL);
        return this.http.get(this.apiURL + 'estados', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataApiService.prototype.getMunicipios = function (idestado) {
        console.log("municipios: " + this.apiURL);
        return this.http.get(this.apiURL + 'municipios?idestado=' + idestado, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataApiService.prototype.getLocalidad = function (idmunicipio, idestado) {
        console.log("Localidad: " + this.apiURL);
        return this.http.get(this.apiURL + 'localidades?idestado=' + idestado + '&idmunicipio=' + idmunicipio, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataApiService.prototype.getUnidades = function () {
        console.log("unidades: " + this.apiURL);
        return this.http.get(this.apiURL + 'categorias', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataApiService.prototype.getDenues = function (idestado, idmunicipio, tipo) {
        console.log("empresas: " + this.apiURL + idestado);
        return this.http.get(this.apiURL + 'empresas?idestado=' + idestado +
            '&idmunicipio=' + idmunicipio + '&tipo=' + tipo, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataApiService.prototype.getPoblacion = function (idestado, idmunicipio, idlocalidad, tipoPob) {
        console.log("poblacion: " + this.apiURL);
        return this.http.get(this.apiURL + 'poblacion?idestado=' + idestado +
            '&idmunicipio=' + idmunicipio + '&idlocacion=' + idlocalidad, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // Error handling 
    DataApiService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    DataApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataApiService);
    return DataApiService;
}());



/***/ }),

/***/ "./src/app/services/marker.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/marker.service.ts ***!
  \********************************************/
/*! exports provided: MarkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerService", function() { return MarkerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_pop_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MarkerService = /** @class */ (function () {
    function MarkerService(http, popupService, dataApiService) {
        this.http = http;
        this.popupService = popupService;
        this.dataApiService = dataApiService;
        this.capitals = '/assets/data/usa-capitals.geojson';
    }
    MarkerService.prototype.makeDenuesMarkers = function (map, idestado, idmunicipio, actividad) {
        var _this = this;
        this.dataApiService.getDenues(idestado, idmunicipio, actividad).subscribe(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var c = res_1[_i];
                var lat = parseFloat(c.lat);
                var lon = parseFloat(c.lng);
                console.log(lat + ' ' + lon);
                var marker = leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"]([lat, lon], {
                    icon: leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"]({
                        iconSize: [25, 41],
                        iconAnchor: [13, 41],
                        iconUrl: 'assets/522110.png',
                        shadowUrl: 'assets/marker-shadow.png'
                    })
                });
                marker.bindPopup(_this.popupService.makeDenuesPopup(c));
                marker.addTo(map);
                //.addTo(map);
            }
        });
    };
    MarkerService.prototype.makePoblacionMarkers = function (map, idestado, idmunicipio, idlocalidad, tipoPob) {
        var _this = this;
        this.dataApiService.getPoblacion(idestado, idmunicipio, idlocalidad, tipoPob).subscribe(function (res) {
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var c = res_2[_i];
                var lat = c.lat.toString();
                var lon = c.lng.toString();
                var arrlat = [];
                var arrlon = [];
                if (lat.length == 7)
                    arrlat.push(Number(lat.substring(0, 3)), Number(lat.substring(3, 5)), Number(lat.substring(5, 7)));
                else
                    arrlat.push(Number(lat.substring(0, 2)), Number(lat.substring(2, 4)), Number(lat.substring(4, 6)));
                if (lon.length == 7)
                    arrlon.push(Number(lon.substring(0, 3)), Number(lon.substring(3, 5)), Number(lon.substring(5, 7)));
                else
                    arrlon.push(Number(lon.substring(0, 2)), Number(lon.substring(2, 4)), Number(lon.substring(4, 6)));
                lat = arrlat[0] + arrlat[1] / 60 + arrlat[2] / 3600;
                lon = arrlon[0] + arrlon[1] / 60 + arrlon[2] / 3600;
                var marker = leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"]([lon, -lat], {
                    icon: leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"]({
                        iconSize: [25, 41],
                        iconAnchor: [13, 41],
                        iconUrl: 'assets/522110.png',
                        shadowUrl: 'assets/marker-shadow.png'
                    })
                });
                marker.bindPopup(_this.popupService.makePoblacionPopup(c, tipoPob));
                marker.addTo(map);
                //.addTo(map);
            }
        });
    };
    MarkerService.prototype.makeCapitalMarkers = function (map) {
        var _this = this;
        this.http.get(this.capitals).subscribe(function (res) {
            for (var _i = 0, _a = res.features; _i < _a.length; _i++) {
                var c = _a[_i];
                var lat = c.geometry.coordinates[0];
                var lon = c.geometry.coordinates[1];
                var marker = leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"]([lon, lat]);
                marker.bindPopup(_this.popupService.makeCapitalPopup(c.properties));
                marker.addTo(map);
                //.addTo(map);
            }
        });
    };
    MarkerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_pop_up_service__WEBPACK_IMPORTED_MODULE_2__["PopUpService"],
            _services_data_api_service__WEBPACK_IMPORTED_MODULE_3__["DataApiService"]])
    ], MarkerService);
    return MarkerService;
}());



/***/ }),

/***/ "./src/app/services/pop-up.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/pop-up.service.ts ***!
  \********************************************/
/*! exports provided: PopUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpService", function() { return PopUpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopUpService = /** @class */ (function () {
    function PopUpService() {
    }
    PopUpService.prototype.makeCapitalPopup = function (data) {
        return "" +
            ("<div>Capital: " + data.name + "</div>") +
            ("<div>State: " + data.state + "</div>") +
            ("<div>Population: " + data.population + "</div>");
    };
    PopUpService.prototype.makeDenuesPopup = function (data) {
        return "" +
            ("<div>Capital: " + data.nombre + "</div>") +
            ("<div>State: " + data.calle + "</div>") +
            ("<div>Population: " + data.municipio + "</div>");
    };
    PopUpService.prototype.makePoblacionPopup = function (data, tipo) {
        var string = "";
        if (tipo == 0)
            string = "" + ("<div>Total: " + data.poblacion + "</div>");
        else if (tipo == 1)
            string = "" + ("<div>Total: " + data.poblacionMas + " hombres </div>");
        else
            string = "" + ("<div>Total: " + data.poblacionFem + " mujeres </div>");
        return string + ("<div>Localidad: " + data.localidad + "</div>");
    };
    PopUpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PopUpService);
    return PopUpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/darfeikus/Documents/Proyectos de Software/bigdata-maps/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map