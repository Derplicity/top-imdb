<!--
  @Component MediaHeader
  @desc Media header presentator - Display media header props
 -->

<template>
  <v-img :src="getImageUrl(media.backdrop_path)" min-height="0" aspect-ratio="1.7778">
    <v-card height="100%" flat tile color="rgba(235, 235, 235, 0.85)">
      <v-container>
        <v-layout wrap align-start>
          <v-flex xs12 sm8 md7>
            <v-card-title class="display-1 font-weight-medium">{{media.title}}</v-card-title>
            <!-- FOR - Iterates movie card text -->
            <v-card-text v-for="text in cardText" :key="text.title">
              <h3 class="headline font-weight-light">{{text.title}}</h3>
              <span class="body-2">{{text.body}}</span>
            </v-card-text>
          </v-flex>
          <v-flex xs12 sm4 md5>
            <v-img
              :src="getImageUrl(media.poster_path)"
              :alt="media.title"
              aspect-ratio="0.6837"
              max-height="480px"
              contain
            />
          </v-flex>
          <v-flex xs12>
            <v-card-actions>
              <v-layout wrap>
                <!-- FOR - Iterates media genres -->
                <v-chip
                  label
                  disabled
                  color="blue-grey darken-1"
                  text-color="white"
                  v-for="genre in genres"
                  :key="genre.id"
                >
                  <v-icon color="white" left>label</v-icon>
                  <span>{{genre.name}}</span>
                </v-chip>
              </v-layout>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-img>
</template>

<script>
import moment from 'moment'

// Helper methods
import { ImageUrlSelector } from '../helpers'

export default {
  name: 'MediaHeader',

  // Receive props
  props: {
    media: {
      type: Object,
    },
  },

  computed: {
    /**
     * @desc Compute media card text
     * @return {Array} of text objects
     */
    cardText() {
      return [
        {
          title: 'Overview',
          body: this.media.overview,
        },
        {
          title: 'Release Date',
          body: this.getFormattedDate(this.media.release_date),
        },
      ]
    },

    /**
     * @desc Compute media genres
     * @return {Array} of genres
     */
    genres() {
      return this.media.genres
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

    /**
     * @desc Format date
     * @param {string} date - Date
     * @return {null|string} null or formatted date
     */
    getFormattedDate(date) {
      // Return null if date is not present
      if (!date) {
        return null
      }

      // Return formatted date
      return moment(this.media.release_date).format('D MMMM YYYY')
    },
  },
}
</script>

<style scoped>
</style>
