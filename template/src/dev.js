{{#if_eq ECMAScript "es5"}}
var Vue = require('vue'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
var Main = require('./main'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq ECMAScript "es6"}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Main from './main'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}

{{#if_eq lintConfig "airbnb"}}
/* eslint-disable no-new */
{{/if_eq}}
{{#if_eq lintConfig "standard"}}
/* eslint-disable no-new */
{{/if_eq}}
new Vue({
  el: '#app',
  ...Main{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
