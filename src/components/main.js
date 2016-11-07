var Vue = require('vue')
var App = require('./app.vue')

Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(App)
  }
})
