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
const common_1 = require('@angular/common');
const core_1 = require('@angular/core');
const map_component_1 = require('./map.component');
let Ng2ol3MapModule = class Ng2ol3MapModule {
};
Ng2ol3MapModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [map_component_1.Ng2ol3MapComponent],
        exports: [map_component_1.Ng2ol3MapComponent]
    }), 
    __metadata('design:paramtypes', [])
], Ng2ol3MapModule);
exports.Ng2ol3MapModule = Ng2ol3MapModule;
//# sourceMappingURL=map.module.js.map