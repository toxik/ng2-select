export function escapeRegexp(queryToEscape:string):string {
  queryToEscape = queryToEscape || '';
  return ('' + queryToEscape).replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
