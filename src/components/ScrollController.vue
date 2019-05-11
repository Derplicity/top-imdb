<!--
  @Component ScrollController
  @desc Scroll Listener - Emit events based on scroll props
 -->

<template>
  <div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'ScrollController',

  /**
   * @desc Add scroll listener when component is created
   */
  created() {
    // Add scroll listener
    this.scrollListener().add();
  },

  /**
   * @desc Remove scroll listener before component is destroyed
   */
  beforeDestroy() {
    // Remove scroll listener
    this.scrollListener().remove();
  },

  methods: {
    /**
     * @desc Create add and remove functions that create scroll listeners
     * @return {Object} of functions
     */
    scrollListener() {
      return {
        /**
         * @desc Add event listener
         * @callback {handleScroll} handle the scroll
         */
        add: () => window.addEventListener('scroll', this.handleScroll, false),

        /**
         * @desc Remove event listener
         * @callback {handleScroll} handle the scroll
         */
        remove: () =>
          window.removeEventListener('scroll', this.handleScroll, false),
      };
    },

    /**
     * @desc Load content if scroll to bottom of page
     */
    handleScroll() {
      // Check if user has scrolled to bottom of page
      if (
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight
      ) {
        // Emit scroll-bottom event
        this.$emit('scroll-bottom');
      }
    },
  },
};
</script>

<style scoped>
</style>
