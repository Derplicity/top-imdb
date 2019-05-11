<!--
  @Component StatsList
  @desc Stats presentator - Display list of stats
 -->

<template>
  <v-card flat tile height="100%">
    <v-container>
      <v-layout column>
        <v-card-title class="display-1 font-weight-medium mx-auto">Stats</v-card-title>
        <v-divider class="mb-5"/>
        <v-layout wrap align-start>
          <!-- FOR - Iterate stats -->
          <v-flex xs12 class="mb-5" v-for="stat in stats" :key="stat.value">
            <v-layout column align-center justify-center fill-height>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <span v-on="on">
                    <!-- IF - Handle rating stat -->
                    <v-progress-circular
                      v-if="stat.type === 'Rating'"
                      rotate="360"
                      size="100"
                      width="10"
                      :value="stat.rating"
                      :color="stat.color"
                      class="headline font-weight-medium"
                    >{{ stat.value }}</v-progress-circular>
                    <!-- ELSE - Handle all other stats -->
                    <v-badge v-else color="rgba(0, 0, 0, 0)" bottom overlap>
                      <template v-slot:badge>
                        <span class="badge">{{stat.value}}</span>
                      </template>
                      <span class="badge-icon">
                        <v-icon :color="stat.iconColor">{{stat.icon}}</v-icon>
                      </span>
                    </v-badge>
                  </span>
                </template>
                <span>{{stat.type}}</span>
              </v-tooltip>
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
  name: 'StatsList',

  // Receive props
  props: {
    media: {
      type: Object,
    },
  },

  computed: {
    /**
     * @desc Compute stats
     * @return {Array} of stats
     */
    stats() {
      return [
        {
          type: 'Rating',
          color: 'green accent-4',
          rating: this.media.vote_average * 10,
          value: this.media.vote_average,
        },
        {
          type: 'Score',
          icon: 'trending_up',
          iconColor: 'amber accent-3',
          value: numFormatter(Math.floor(this.media.popularity)),
        },
        {
          type: 'Votes',
          icon: 'poll',
          iconColor: 'purple accent-3',
          value: numFormatter(this.media.vote_count),
        },
      ];
    },
  },
};
</script>

<style scoped>
.badge {
  position: absolute;
  top: -20px;
  left: -20px;
  background-color: #000000;
  font-size: 20px;
  font-weight: 500;
  padding: 0 2px;
  border-radius: 14px;
}

.badge-icon .v-icon {
  /* Override v-icon font-size */
  font-size: 100px !important;
}
</style>
