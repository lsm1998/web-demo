<template>
  <div id="app">
    <keep-alive v-if="this.$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
</template>

<script setup lang="ts">

import {onMounted} from "vue";

const setup = () => {
  console.log('app setup');
};

onMounted(() => {
  console.log('app mounted');
});

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

