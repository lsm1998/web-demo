<template>
  <nut-tabbar bottom safe-area-inset-bottom placeholder @tab-switch="tabSwitch">
    <nut-tabbar-item tab-title="首页" :icon="h(Home)"></nut-tabbar-item>
    <nut-tabbar-item tab-title="列表" :icon="h(Category)"></nut-tabbar-item>
  </nut-tabbar>
</template>

<script setup lang="ts">

import {useRouter} from 'vue-router';
import {onMounted , h} from "vue";
import { Home,Category} from '@nutui/icons-vue';

const router = useRouter();

const tabSwitch = (data: any, index: Number) => {
  if (index === 0) {
    router.push({path: '/index'});
  } else if (index === 1) {
    router.push({path: '/user'});
  }
}

onMounted(() => {
});

</script>

<style scoped>

</style>