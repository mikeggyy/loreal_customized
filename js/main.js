import {
  data
} from './modules/data.js'
import {
  watch
} from './modules/watch.js'
import {
  method
} from './modules/method.js'
var app = new Vue({
  el: "#zone_desktop",
  data: data(),
  watch: watch(),
  methods: method()
});