<!--
  @Component CastGridItem
  @desc Cast item presentator - A grid item displaying cast props
 -->

<template>
  <v-card flat tile height="100%">
    <v-img aspect-ratio="0.6837" :src="getImageUrl(member.profile_path)" :alt="member.name"/>
    <v-card-title>
      <v-layout column align-center justify-center>
        <span class="subheading font-weight-bold">{{member.name}}</span>
        <span class="caption">{{member.character}}</span>
      </v-layout>
    </v-card-title>
  </v-card>
</template>

<script>
// Helper methods
import { ImageUrlSelector } from '../helpers'

export default {
  name: 'CastGridItem',

  // Receive props
  props: {
    member: {
      type: Object,
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
