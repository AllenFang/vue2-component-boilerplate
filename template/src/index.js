{{#if_eq ECMAScript "es5"}}
var Main = require('./main'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}

{{#if_eq ECMAScript "es6"}}
import Main from './main'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}

if (typeof window !== 'undefined') {
  window.Main = Main{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

{{#if_eq ECMAScript "es5"}}
module.exports = {
  Main: Main{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq ECMAScript "es6"}}
{{#if_eq lintConfig "airbnb"}}
/* eslint import/prefer-default-export: 0 */
{{/if_eq}}
export {
  Main{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}