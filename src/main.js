import Vue from 'vue'
import App from './App.vue'
import PlantListing from './PlantListing.vue'

// Tell view what elements it should ignore when matching vue components
Vue.config.ignoredElements = [
  'ion-app',
  'ion-page',
  'ion-header',
  'ion-toolbar',
  'ion-title',
  'ion-content',
  'ion-list',
  'ion-item',
  'ion-label',
];

// Register our vue components
Vue.component('layout', {
  template: `
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>
            <slot name="title"></slot>
          </ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <slot name="content"></slot>
      </ion-content>
    </ion-page>
  </ion-app>
  `
})
Vue.component('plant-listing', PlantListing)

// Create the app
new Vue({
  el: '#app',
  render: h => h(App)
})
