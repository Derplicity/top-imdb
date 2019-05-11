<!--
  @Component NotFoundView
  @desc Fallback View - Display a not found page for unknown url paths
 -->

<template>
  <v-container>
    <v-layout>
      <v-flex class="text-xs-center">
        <h2>Oops, it doesn't look like that page exists!</h2>
        <v-btn to="/">Return to the movies</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'NotFoundView',
};
</script>

<style scoped>
</style>
