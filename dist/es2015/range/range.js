var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customElement, bindingMode, autoinject } from "aurelia-framework";
let MdRange = class MdRange {
    constructor() {
        this.mdReadonly = false;
        this.mdMin = 0;
        this.mdMax = 100;
        this.mdStep = 1;
        this.mdValue = 0;
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], MdRange.prototype, "mdReadonly", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdRange.prototype, "mdMin", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdRange.prototype, "mdMax", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdRange.prototype, "mdStep", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdRange.prototype, "mdValue", void 0);
MdRange = __decorate([
    customElement("md-range"),
    autoinject
], MdRange);
export { MdRange };