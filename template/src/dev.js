{{#if_eq ECMAScript "es5"}}
var Vue = require('vue');
var Main = require('./main');
{{/if_eq}}

{{#if_eq ECMAScript "es6"}}
import Vue from 'vue';
import Main from './main';
{{/if_eq}}

{{#if_eq lintConfig "airbnb"}}
/* eslint-disable no-new */
{{/if_eq}}
new Vue({
  el: '#app',
  ...Main{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
});
