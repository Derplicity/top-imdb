<!--
  @Component MovieView
  @desc View for '/movie/:id' route - Get movie by id and display movie details
 -->

<template>
  <v-container grid-list-xl>
    <v-layout wrap justify-center>
      <v-flex xs12 md11 lg9 xl7>
        <v-layout wrap>
          <v-flex xs12>
            <MediaHeader :media="movie"/>
          </v-flex>
          <v-flex xs12 sm6>
            <StatsList :media="movie"/>
          </v-flex>
          <v-flex xs12 sm6>
            <FactsList :media="movie"/>
          </v-flex>
          <v-flex xs12>
            <CastGrid :castList="castList"/>
          </v-flex>
          <v-flex xs12>
            <v-divider class="mb-5"/>
            <v-container class="pb-0">
              <h3 class="display-1 font-weight-medium text-xs-center text-sm-left">Recommended</h3>
            </v-container>
            <MediaGrid media-type="movie" :media="recommended"/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

// Components
import MediaHeader from './MediaHeader'
import StatsList from './StatsList'
import FactsList from './FactsList'
import CastGrid from './CastGrid'
import MediaGrid from './MediaGrid'

export default {
  name: 'MovieView',

  // Register components
  components: {
    MediaHeader,
    StatsList,
    FactsList,
    CastGrid,
    MediaGrid,
  },

  computed: {
    // Map state to props
    ...mapGetters(['movie']),

    /**
     * @desc Compute movie cast list
     * @return {Array} empty or movie cast
     */
    castList() {
      // Return empty array if credits not present
      if (!this.movie.credits) return []

      // Return movie cast list
      return this.movie.credits.cast
    },

    /**
     * @desc Compute recommended movies list
     * @return {Array} empty or recommended movies
     */
    recommended() {
      // Return empty array if recommendations not present
      if (!this.movie.recommendations) return []

      // Return recommended movies - max 6
      return this.movie.recommendations.results.slice(0, 6)
    },
  },

  watch: {
    // Watch for id param change in path
    '$route.params.id': 'loadMovie',
  },

  /**
   * @desc Load movie when component is created
   */
  created() {
    // Load movie
    this.loadMovie()
  },

  /**
   * @desc Clear movie before component is destroyed
   */
  beforeDestroy() {
    // Clear movie
    this.clearMovie()
  },

  methods: {
    // Map movie actions
    ...mapActions(['clearMovie', 'getMovieById']),

    /**
     * @desc Get movie by id
     */
    loadMovie() {
      const { id } = this.$route.params
      const payload = { id }

      // Get movie by id
      this.getMovieById(payload)
    },
  },
}
</script>

<style scoped>
</style>
