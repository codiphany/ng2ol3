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
const layertree_component_1 = require('./layertree.component');
let Ng2ol3LayertreeModule = class Ng2ol3LayertreeModule {
};
Ng2ol3LayertreeModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [layertree_component_1.Ng2ol3LayertreeComponent],
        exports: [layertree_component_1.Ng2ol3LayertreeComponent]
    }), 
    __metadata('design:paramtypes', [])
], Ng2ol3LayertreeModule);
exports.Ng2ol3LayertreeModule = Ng2ol3LayertreeModule;
//# sourceMappingURL=layertree.module.js.map