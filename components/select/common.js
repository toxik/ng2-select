"use strict";
function escapeRegexp(queryToEscape) {
    queryToEscape = queryToEscape || '';
    return ('' + queryToEscape).replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
exports.escapeRegexp = escapeRegexp;
