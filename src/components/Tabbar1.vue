<template>
<!--  <nut-tabbar v-mode="activeTabbar" @tab-switch="tabSwitch">-->
<!--    <nut-tabbar-item key="0">-->
<!--      <template #icon>-->
<!--        首页0-{{activeTabbar}}-->
<!--      </template>-->
<!--    </nut-tabbar-item>-->
<!--    <nut-tabbar-item key="1">-->
<!--      <template #icon>-->
<!--        列表0-{{activeTabbar}}-->
<!--      </template>-->
<!--    </nut-tabbar-item>-->
<!--  </nut-tabbar>-->
  <nut-button type="primary">首页</nut-button>
  <nut-button type="default" @click="router.push({path: '/user'})">列表</nut-button>
</template>

<script setup lang="ts">

import {useRouter} from 'vue-router';
import {onMounted, ref} from "vue";

import { defineComponent } from 'vue';

const router = useRouter();

const activeTabbar = ref(0);

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