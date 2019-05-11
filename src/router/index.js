import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import SortedMovies from '../components/SortedMovies'
import QueriedMovies from '../components/QueriedMovies'
import MovieView from '../components/MovieView'
import NotFoundView from '../components/NotFoundView'

// Load VueRouter
Vue.use(VueRouter)

// Create Router
export default new VueRouter({
  routes: [
    { path: '/', redirect: '/movies' },
    { path: '/movies/:sortType?', component: SortedMovies },
    { path: '/search', component: QueriedMovies },
    { path: '/movie/:id', component: MovieView },
    { path: '*', component: NotFoundView },
  ],

  // Use history router
  mode: 'history',

  /**
   * @desc Set scroll functionality
   * @param {Object} to - to props
   * @param {Object} from - from props
   * @param {Object} savedPosition - saved position props
   */
  scrollBehavior(to, from, savedPosition) {
    // Scroll to saved position if using forward/back functionality
    if (savedPosition) {
      return savedPosition
    }

    // Scroll to top on unique page loads
    return { x: 0, y: 0 }
  },
})
