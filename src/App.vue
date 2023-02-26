<template>
  <router-view v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" :key="$route.name" v-if="route.meta?.keepAlive"></component>
    </KeepAlive>
    <component :is="Component" :key="$route.name" v-if="!route.meta?.keepAlive"></component>
  </router-view>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();

const setup = () => {
  console.log('app setup');

  try {
    // const bfWorker = new Worker(window.URL.createObjectURL(new Blob(['1'])));
    window.addEventListener('pageshow', event => {
      if (event.persisted) {
        window.location.reload();
      }
    })
  } catch (e) {
    console.log(e);
  }
};

setup();
</script>

<style lang="scss">
.nut-tab-pane {
  padding: 0 !important;
  padding-left: 16px !important;
}

.infiniteUl {
  width: 100%;
  height: calc(100vh - 120px);
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

.infiniteLi {
  font-size: 14px;
  color: #333;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}
</style>

