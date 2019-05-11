<!--
  @Component AppNavbar
  @desc Navigation component for the application - Display navigation with desktop/mobile layouts
 -->

<template>
  <div>
    <v-toolbar app>
      <!-- CLICK - Trigger drawer -->
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"/>
      <v-toolbar-title>Top IMDB</v-toolbar-title>
      <v-spacer/>
      <div style="flex: 1 1 auto;" class="hidden-sm-and-down">
        <NavbarSearch/>
      </div>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/movies">Top Movies</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- Mobile Nav Drawer -->
    <v-navigation-drawer v-model="drawer" disable-resize-watcher absolute class="hidden-md-and-up">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">Top IMBD</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider/>
      <v-list class="pt-0">
        <v-list-tile class="mb-4">
          <NavbarSearch/>
        </v-list-tile>
        <v-list-tile to="/movies">
          <v-list-tile-action>
            <v-icon>movie</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Top Movies</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
// Components
import NavbarSearch from './NavbarSearch';

export default {
  name: 'AppNavbar',

  // Register components
  components: {
    NavbarSearch,
  },

  /**
   * @desc Init data
   * @return {Object} with init data
   */
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
</style>
