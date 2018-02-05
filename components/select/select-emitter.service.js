"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SelectEmitterService = /** @class */ (function () {
    function SelectEmitterService() {
        this.notification = new core_1.EventEmitter();
    }
    SelectEmitterService.prototype.sendNotification = function (instance) {
        this.notification.emit(instance);
    };
    SelectEmitterService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    SelectEmitterService.ctorParameters = function () { return []; };
    SelectEmitterService.propDecorators = {
        "notification": [{ type: core_1.Output },],
    };
    return SelectEmitterService;
}());
exports.SelectEmitterService = SelectEmitterService;
