"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function escapeRegexp(queryToEscape) {
    queryToEscape = queryToEscape || '';
    return ('' + queryToEscape).replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
exports.escapeRegexp = escapeRegexp;
