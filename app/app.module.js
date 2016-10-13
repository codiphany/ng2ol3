"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var material_1 = require('@angular/material');
var _index_1 = require('./src/components/@index');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var _index_2 = require('./demo/@index');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                material_1.MaterialModule.forRoot(),
                _index_1.Ng2ol3Module,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                _index_2.DemoFullComponent,
                _index_2.DemoMapComponent,
                _index_2.DemoSidebarComponent,
                _index_2.DemoLayertreeComponent,
                _index_2.DemoMeasureComponent,
                _index_2.DemoPrintComponent
            ],
            providers: [
                app_routing_1.appRoutingProviders,
                { provide: Window, useValue: window },
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map