<!--
  @Component MoviesView
  @desc Container for '/' & '/search?q' routes - Get movies by params and display them in a list
 -->

<template>
  <ScrollController @scroll-bottom="onScrollBottom">
    <!-- SLOT - View header -->
    <slot name="header" :movies="movies"/>
    <MediaGrid media-type="movie" :media="movies"/>
  </ScrollController>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

// Components
import ScrollController from './ScrollController'
import MediaGrid from './MediaGrid'

export default {
  name: 'MoviesView',

  // Register components
  components: {
    ScrollController,
    MediaGrid,
  },

  /**
   * @desc Init data
   * @return {Object} of init data
   */
  data() {
    return {
      page: 1,
    }
  },

  // Map state to props
  computed: mapGetters(['movies']),

  /**
   * @desc Load movies when component is created
   */
  created() {
    // Load init movies
    this.getMovies(false)
  },

  /**
   * @desc Clear movies before component is destroyed
   */
  beforeDestroy() {
    // Clear movies
    this.clearMovies()
  },

  methods: {
    // Map movie actions
    ...mapActions(['clearMovies']),

    /**
     * @desc Get movies and increment the page
     * @param {boolean} append - Whether to append movies to current state
     */
    getMovies(append) {
      // Reset page number if !append
      if (!append) {
        this.page = 1
      }

      const payload = { page: this.page, append }

      // Get movies by user query
      this.$emit('load-movies', payload)

      // Increment page
      this.page += 1
    },

    /**
     * @desc Get more movies based on query
     */
    onScrollBottom() {
      // Load more movies
      this.getMovies(true)
    },
  },
}
</script>

<style scoped>
</style>
