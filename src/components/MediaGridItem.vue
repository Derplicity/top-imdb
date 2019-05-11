<!--
  @Component MediaGridItem
  @desc Media grid presentator - A grid item displaying media props
 -->

<template>
  <v-card hover :to="`/${mediaType}/${media.id}`">
    <v-img aspect-ratio="0.6837" :src="getImageUrl(media.poster_path)" :alt="media.title"/>
    <v-card-title>
      <v-layout align-center justify-space-between>
        <!-- FOR - Iterate media ratings -->
        <div v-for="rating in ratings" :key="rating.icon">
          <v-icon :color="rating.color" small>{{rating.icon}}</v-icon>
          {{rating.value}}
        </div>
      </v-layout>
    </v-card-title>
  </v-card>
</template>

<script>
// Helper methods
import { ImageUrlSelector } from '../helpers'

export default {
  name: 'MediaGridItem',

  // Receive props
  props: {
    media: {
      type: Object,
    },
    mediaType: {
      type: String,
    },
  },

  computed: {
    ratings() {
      return [
        {
          color: 'amber accent-3',
          icon: 'grade',
          value: this.media.vote_average,
        },
        {
          color: 'green accent-4',
          icon: 'trending_up',
          value: Math.round(this.media.popularity),
        },
      ]
    },
  },

  methods: {
    /**
     * @desc Get image url based on path
     * @param {string} path - Path to image
     * @return {string} image url
     */
    getImageUrl(path) {
      return ImageUrlSelector(path)
    },
  },
}
</script>

<style scoped>
</style>
