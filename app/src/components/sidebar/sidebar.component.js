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
var _index_1 = require('../../models/@index');
var Ng2ol3SidebarComponent = (function () {
    function Ng2ol3SidebarComponent() {
        this.activeElement = { type: 'any', title: 'Empty sidebar' };
    }
    Ng2ol3SidebarComponent.prototype.ngOnInit = function () {
        this.sidebarClosed = false;
        this.hasToolbar = this.options.hasOwnProperty("toolbar");
        this.hasLayertree = this.hasToolbar && this.options.toolbar.hasOwnProperty("layertree");
        this.hasMeasure = this.hasToolbar && this.options.toolbar.hasOwnProperty("measure");
        this.hasPrint = this.hasToolbar && this.options.toolbar.hasOwnProperty("print");
        this.map.updateSize();
    };
    Ng2ol3SidebarComponent.prototype.toggleSidebar = function () {
        this.sidebarClosed = !this.sidebarClosed;
    };
    Ng2ol3SidebarComponent.prototype.onElementActivated = function (element) {
        this.activeElement = element;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2ol3SidebarComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', _index_1.Ng2ol3Map)
    ], Ng2ol3SidebarComponent.prototype, "map", void 0);
    Ng2ol3SidebarComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-sidebar',
            template: "\n      <div class=\"sidebar-outer\">\n          <ng2ol3-toolbar \n                  *ngIf=\"hasToolbar\"\n                  [options]=\"options.toolbar\"\n                  (elementActivated)=\"onElementActivated($event)\">\n          </ng2ol3-toolbar>\n          <div class=\"sidebar-main\">\n          \t  <div class=\"sidebar-title\">\n\t              <md-toolbar>\n                    <!--<div class=\"closediv\">X</div>-->\n\t                <span>{{activeElement.title}}</span>    \n\t              </md-toolbar>\n              </div>\n              <div class=\"sidebar-content\">\n\t              <ng2ol3-layertree \n\t                  *ngIf=\"hasLayertree && activeElement.type=='layertree'\" \n\t                  [map]=\"map\">\n\t              </ng2ol3-layertree>\n\t              <ng2ol3-measure\n\t              \t  *ngIf=\"hasMeasure && activeElement.type=='measure'\"\n\t                  [map]=\"map\">\n\t              </ng2ol3-measure>\n\t              <ng2ol3-print \n\t              \t  *ngIf=\"hasPrint && activeElement.type=='print'\"\n\t                  [map]=\"map\"></ng2ol3-print>\n              </div>\t\n          </div>\n      </div>\n    ",
            host: {
                class: 'ng2ol3-sidebar'
            },
            animations: []
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3SidebarComponent);
    return Ng2ol3SidebarComponent;
}());
exports.Ng2ol3SidebarComponent = Ng2ol3SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map