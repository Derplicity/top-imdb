<!--
  @Component NavbarSearch
  @desc Input controller for navigation search - Transport user to '/search?q' with user query
 -->

<template>
  <v-text-field
    flat
    hide-details
    prepend-inner-icon="search"
    single-line
    clearable
    placeholder="Search Movies"
    v-model="value"
    @keyup.enter="onSubmit(value)"
  />
</template>

<script>
export default {
  name: 'NavbarSearch',

  /**
   * @desc Init data
   * @return {Object} with init data
   */
  data() {
    return {
      value: '',
    };
  },

  methods: {
    /**
     * @desc Alter url path based on user query
     * @param {string} query - User query
     * @return {null|function} null or func that pushes path
     */
    onSubmit(query) {
      // Return null if query is empty
      if (!query || query.trim().length === 0) return null;

      const q = query.trim(); // Trim extra spaces

      // Alter url path with encoded query
      return this.$router.push(`/search?q=${encodeURIComponent(q)}`);
    },
  },
};
</script>

<style scoped>
</style>
