<!--
  @Component MediaGrid
  @desc Media grid presentator - A grid list displaying media items
 -->

<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <!-- FOR - Iterate media items -->
      <v-flex xs12 sm4 md3 lg2 v-for="mediaItem in media" :key="mediaItem.id">
        <MediaGridItem :media-type="mediaType" :media="mediaItem"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// Components
import MediaGridItem from './MediaGridItem'

export default {
  name: 'MediaList',

  // Register components
  components: {
    MediaGridItem,
  },

  // Receive props
  props: {
    media: {
      type: Array,
    },
    mediaType: {
      type: String,
    },
  },
}
</script>

<style scoped>
</style>
