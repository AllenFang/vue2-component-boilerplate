<template>
  <div id="app" class="component">
    <hello></hello>
  </div>
</template>

<script>
{{#if_eq ECMAScript "es5"}}
var Hello = require('./hello'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

module.exports = {
  name: 'app',
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}
{{#if_eq ECMAScript "es6"}}
import Hello from './hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'app',
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if_eq}}
</script>
