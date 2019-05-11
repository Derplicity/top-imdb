<!--
  @Component CastGrid
  @desc Cast Grid presentator - A grid list displaying cast grid items
 -->

<template>
  <v-container fluid grid-list-xl>
    <h3 class="display-1 font-weight-medium text-xs-center text-sm-left">Top Cast</h3>
    <v-layout wrap justify-start>
      <!-- FOR - Iterate cast items -->
      <v-flex xs6 sm3 v-for="member in members" :key="member.id">
        <CastGridItem :member="member"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// Components
import CastGridItem from './CastGridItem'

export default {
  name: 'CastGrid',

  // Register components
  components: {
    CastGridItem,
  },

  // Receive props
  props: {
    castList: {
      type: Array,
    },
  },

  computed: {
    /**
     * @desc Compute cast member list
     * @return {Array} of cast members
     */
    members() {
      // Return cast members - max 4
      return this.castList.slice(0, 4)
    },
  },
}
</script>

<style scoped>
</style>
