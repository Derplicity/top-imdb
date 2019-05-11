<!--
  @Component QueriedMovies
  @desc Container for '/search?q' route - Get movies based on user query and display them in a list
 -->

<template>
  <MoviesView @load-movies="onLoadMovies">
    <template v-slot:header="{ movies }">
      <v-container class="pb-0">
        <h2 class="headline text-xs-center text-sm-left">
          <!-- SHOW - Print value when list is empty -->
          <span v-show="movies.length === 0">No</span>
          Search results for "{{$route.query.q}}"
        </h2>
      </v-container>
    </template>
  </MoviesView>
</template>

<script>
import { mapActions } from 'vuex';

// Components
import MoviesView from './MoviesView';

export default {
  name: 'QueriedMovies',

  // Register components
  components: {
    MoviesView,
  },

  watch: {
    // Watch for query param change in path
    '$route.query.q': function handleQueryChange() {
      const payload = { page: 1, append: false };
      this.onLoadMovies(payload);
    },
  },

  methods: {
    // Map movie actions
    ...mapActions(['getMoviesByQuery']),

    /**
     * @desc Get movies by query and increment the page
     * @param {Object} payload - Payload to send to action
     */
    onLoadMovies(payload) {
      // Get query from route
      const { q } = this.$route.query;

      // Get movies by user query
      this.getMoviesByQuery({ ...payload, query: q });
    },
  },
};
</script>

<style scoped>
</style>
