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
        this.elementActivated = new core_1.EventEmitter();
        this.myColor = "primary";
        this.elements = [];
    }
    Ng2ol3ToolbarComponent.prototype.ngOnInit = function () {
        if (this.options.hasOwnProperty("layertree")) {
            var obj = this.options.layertree;
            this.elements.push({
                type: "layertree",
                title: obj.hasOwnProperty("title") ? obj.title : "Layer manager",
                fontSet: obj.hasOwnProperty("fontSet") ? obj.fontSet : "ms",
                fontIcon: obj.hasOwnProperty("fontIcon") ? obj.fontIcon : "ms-layers",
                active: obj.hasOwnProperty("active") ? obj.active : true,
                disabled: obj.hasOwnProperty("disabled") ? obj.disabled : false
            });
        }
        if (this.options.hasOwnProperty("measure")) {
            var obj = this.options.measure;
            this.elements.push({
                type: "measure",
                title: obj.hasOwnProperty("title") ? obj.title : "Measure",
                fontSet: obj.hasOwnProperty("fontSet") ? obj.fontSet : "ms",
                fontIcon: obj.hasOwnProperty("fontIcon") ? obj.fontIcon : "ms-measure-distance",
                active: obj.hasOwnProperty("active") ? obj.active : true,
                disabled: obj.hasOwnProperty("disabled") ? obj.disabled : false
            });
        }
        if (this.options.hasOwnProperty("print")) {
            var obj = this.options.print;
            this.elements.push({
                type: "print",
                title: obj.hasOwnProperty("title") ? obj.title : "Print",
                fontSet: obj.hasOwnProperty("fontSet") ? obj.fontSet : "ms",
                fontIcon: obj.hasOwnProperty("fontIcon") ? obj.fontIcon : "ms-printer",
                active: obj.hasOwnProperty("active") ? obj.active : true,
                disabled: obj.hasOwnProperty("disabled") ? obj.disabled : false
            });
        }
        //set active the first active element
        for (var i = 0; i < this.elements.length; i++) {
            if (this.elements[i].active === true && this.elements[i].disabled === false) {
                this.activateElement(this.elements[i]);
                break;
            }
        }
    };
    Ng2ol3ToolbarComponent.prototype.activateElement = function (element) {
        for (var i = 0; i < this.elements.length; i++) {
            if (this.elements[i] === element) {
                this.elements[i].active = true;
                this.elementActivated.emit(element);
            }
            else {
                this.elements[i].active = false;
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2ol3ToolbarComponent.prototype, "options", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2ol3ToolbarComponent.prototype, "elementActivated", void 0);
    Ng2ol3ToolbarComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-toolbar',
            template: "\n        <div class=\"toolbar-div\">\n\t\t\t<md-list>\n            \t<md-list-item *ngFor=\"let element of elements\">\n                    <button md-mini-fab [class.active]=\"element.active\" [disabled]=\"element.disabled\" (click)=\"activateElement(element)\">\n                    \t<md-icon fontSet=\"{{element.fontSet}}\" fontIcon=\"{{element.fontIcon}}\"></md-icon>\n                    </button>\n                </md-list-item>\n            </md-list>\n        </div>\n    ",
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