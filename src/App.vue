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
      plants: [{ id: 0, name: "Aloe" }, { id: 1, name: "Basil" }]
    };
  }
};
</script>

<style lang="scss">
$primary: rgb(10, 206, 108);
ion-app {
  font-family: "Roboto", sans-serif;
}
ion-toolbar {
  .toolbar-background {
    background: linear-gradient($primary, rgb(18, 161, 82));
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
