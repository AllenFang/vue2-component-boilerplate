import Vue from 'vue';
import Hello from 'src/hello';

describe('hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Hello){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    });
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App');
  });
});
