<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
</template>

<script>
{{#if_eq ECMAScript "es5"}}
module.exports = {
  name: 'hello'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  data: function() {
    return {
      msg: 'Welcome to Your Vue.js App'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    };
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
};
{{/if_eq}}
{{#if_eq ECMAScript "es6"}}
export default {
  name: 'hello'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: 'Welcome to Your Vue.js App'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    };
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
};
{{/if_eq}}
</script>

<style scoped>
.hello {
  color: #42b983;
}
</style>
