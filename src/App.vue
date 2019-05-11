<!--
  @Component App
  @desc Top level component - Displays the entire application
 -->

<template>
  <v-app>
    <AppNavbar/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
// Components
import AppNavbar from './components/AppNavbar';

export default {
  name: 'App',

  // Init components
  components: {
    AppNavbar,
  },
};
</script>

<style>
</style>
