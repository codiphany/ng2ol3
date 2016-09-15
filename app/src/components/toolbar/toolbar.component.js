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
var Ng2ol3ToolbarComponent = (function () {
    function Ng2ol3ToolbarComponent() {
    }
    Ng2ol3ToolbarComponent.prototype.ngOnInit = function () {
        this.hasLayertree = this.options.hasOwnProperty("layertree");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2ol3ToolbarComponent.prototype, "options", void 0);
    Ng2ol3ToolbarComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-toolbar',
            template: "\n      <div>\n          <i class=\"ms ms-layers pointer\" *ngIf=\"hasLayertree\"></i>\n      </div>\n    ",
            host: {
                class: 'ng2ol3-toolbar'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3ToolbarComponent);
    return Ng2ol3ToolbarComponent;
}());
exports.Ng2ol3ToolbarComponent = Ng2ol3ToolbarComponent;
//# sourceMappingURL=toolbar.component.js.map