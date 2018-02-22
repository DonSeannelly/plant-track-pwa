<template>
  <div id="plant-listing">
    <p>{{ name }}</p>
    <div class="meter">
      <div class="progress"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "plant-listing",
  props: ["name"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#plant-listing {
  width: 100%;
}
  p {
    font-size: 20px !important;
    padding-top: 25px;
    padding-bottom: 10px;
    margin: 0;
  }
  .meter {
    height: 4px;
    background-color: rgba(204, 204, 204, 0.329);
    .progress {
      z-index: 2;
      width: 50px;
      height: 4px;
      background-color: rgb(10, 206, 108);
    }
  }
</style>
