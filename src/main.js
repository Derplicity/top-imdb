import Vue from 'vue'

// Material components
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Store config
import storeConfig from './store'

// Router config
import routerConfig from './router'

// App
import App from './App'

// Load Vuetify
Vue.use(Vuetify)

// Create new Vue instance
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store: storeConfig,
  router: routerConfig,
})
