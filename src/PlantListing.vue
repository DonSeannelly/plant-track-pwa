<template>
  <div id="plant-listing">
    <div 
      class="icon-container" 
      v-bind:class="{ water_drop: needsWater }"
      v-on:click="waterPlant()"
    ></div>
    <div class="info-container">
      <p>{{ name }}</p>
      <div class="meter">
        <div class="progress" v-bind:style="{ width: timeUntilWatering + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "plant-listing",
  props: ["name"],
  data() {
    const timeUntilWatering = 5;
    return {
      timeUntilWatering: timeUntilWatering,
      needsWater: timeUntilWatering < 10,
      waterPlant: function() {
        this.needsWater = !this.needsWater;
        this.timeUntilWatering = 100;
      }
    };
  }
};
</script>

<style lang="scss">
$icon_size: 50px;
#plant-listing {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  margin: auto;
  align-items: center;
  padding: 10px;
  .icon-container {
    width: $icon_size;
    height: $icon_size;
    background: url('assets/sprout.svg');
    &.water_drop {
      background: url('assets/water-drop.svg');
    }
  }
  .info-container {
    width: calc(100% - #{$icon_size});
    padding-left: 5px;
  }
}
p {
  font-size: 20px !important;
  padding: 0;
  padding-bottom: 5px;
  margin: 0;
}
.meter {
  width: 100%;
  height: 4px;
  background-color: rgba(204, 204, 204, 0.75);
  .progress {
    z-index: 2;
    width: 50px;
    height: 4px;
    background-color: #46CFB6;
  }
}
</style>
