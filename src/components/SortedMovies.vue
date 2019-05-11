<!--
  @Component SortedMovies
  @desc Container for '/' route - Get sorted movies and display them in a list
 -->

<template>
  <MoviesView @load-movies="onLoadMovies"/>
</template>

<script>
import { mapActions } from 'vuex';

// Components
import MoviesView from './MoviesView';

export default {
  name: 'SortedMovies',

  // Register components
  components: {
    MoviesView,
  },

  watch: {
    // Watch for sortType param change in path
    '$route.params.sortType': function handleParamChange() {
      const payload = { page: 1, append: false };
      this.onLoadMovies(payload);
    },
  },

  methods: {
    // Map movie actions
    ...mapActions(['getSortedMovies']),

    /**
     * @desc Get sorted movies and increment the page
     * @param {Object} payload - Payload to send to action
     */
    onLoadMovies(payload) {
      // Get sortType from route
      const { sortType } = this.$route.params;

      // Get sorted movies
      this.getSortedMovies({ ...payload, sortType });
    },
  },
};
</script>

<style scoped>
</style>
