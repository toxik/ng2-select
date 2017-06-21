"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var select_1 = require('./select/select');
var select_pipes_1 = require('./select/select-pipes');
var off_click_1 = require('./select/off-click');
var select_emitter_service_1 = require('./select/select-emitter.service');
var SelectModule = (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective],
                    exports: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective],
                    providers: [select_emitter_service_1.SelectEmitterService]
                },] },
    ];
    /** @nocollapse */
    SelectModule.ctorParameters = [];
    return SelectModule;
}());
exports.SelectModule = SelectModule;
