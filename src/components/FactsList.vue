<!--
  @Component FactsList
  @desc Facts presentator - Display list of facts
 -->

<template>
  <v-card flat tile height="100%">
    <v-container>
      <v-layout column>
        <v-card-title class="display-1 font-weight-medium mx-auto">Facts</v-card-title>
        <v-divider class="mb-5"/>
        <v-layout wrap align-start>
          <!-- FOR - Iterate facts -->
          <v-flex xs12 class="mb-5" v-for="fact in facts" :key="fact.value">
            <v-layout column align-center justify-center fill-height>
              <h3 class="headline">{{fact.title}}</h3>
              <div class="mt-2">
                <v-icon small>{{fact.icon}}</v-icon>
                <!-- SHOW - Display value when present -->
                <span v-show="fact.value">{{fact.value}}</span>
                <!-- SHOW - Display placeholder when not present -->
                <span v-show="!fact.value">-</span>
              </div>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
// Helper methods
import { numFormatter } from '../helpers';

export default {
  name: 'FactsList',

  // Receive props
  props: {
    media: {
      type: Object,
    },
  },

  computed: {
    /**
     * @desc Compute media facts
     * @return {Array} of media facts
     */
    facts() {
      return [
        {
          title: 'Budget',
          icon: 'money_off',
          value: numFormatter(this.media.budget),
        },
        {
          title: 'Revenue',
          icon: 'attach_money',
          value: numFormatter(this.media.revenue),
        },
        {
          title: 'Runtime',
          icon: 'timer',
          value: this.getFormattedDuration(this.media.runtime),
        },
        {
          title: 'Original Language',
          icon: 'language',
          value: this.getOriginalLanguage(this.media.original_language),
        },
      ];
    },
  },

  methods: {
    /**
     * @desc Get original language of media
     * @param {string} iso - Original language iso_639_1
     * @return {null|string} null or original language name
     */
    getOriginalLanguage(iso) {
      const spokenLanguages = this.media.spoken_languages;

      // Return null if spoken_languages is empty
      if (!spokenLanguages || spokenLanguages.length === 0) return null;

      // Find original language reference in spoken_languages
      const originalLanguage = spokenLanguages.find(
        language => language.iso_639_1 === iso,
      );

      // Return original language name
      return originalLanguage.name;
    },

    /**
     * @desc Parse duration to formatted string
     * @param {number} minutes - Duration of media
     * @return {string} with formatted duration
     */
    getFormattedDuration(minutes) {
      // Return null if minutes is not present
      if (!minutes) return null;

      // Return formatted duration
      return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
    },
  },
};
</script>

<style scoped>
</style>
