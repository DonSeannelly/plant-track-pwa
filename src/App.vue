<template>
  <div id="app">
    <layout>
      <span slot="title">Plant Tracker</span>
      <div slot="content" class="listing-container" v-for="plant of plants" v-bind:key="plant.id">
        <plant-listing v-bind:name="plant.name"></plant-listing>
      </div>
    </layout>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      plants: [{ id: 0, name: "Aloe" }, { id: 1, name: "Basil" }, { id: 2, name: "Mint"}] 
    };
  }
};
</script>

<style lang="scss">
$primary: #38485E;
$accent: #46CFB6;
ion-app {
  font-family: "Roboto", sans-serif;
}
ion-toolbar {
  .toolbar-background {
    background: linear-gradient($accent, darken($accent,15));
  }
  .toolbar-title {
    color: white;
  }
}
.listing-container {
  padding-left: 16px;
  padding-right: 16px;
}
</style>
