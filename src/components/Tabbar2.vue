<template>
  <!--  <nut-tabbar v-mode="activeTabbar" @tab-switch="tabSwitch">-->
  <!--    <nut-tabbar-item key="index">-->
  <!--      <template #icon>-->
  <!--        首页1-{{activeTabbar}}-->
  <!--      </template>-->
  <!--    </nut-tabbar-item>-->
  <!--    <nut-tabbar-item key="user">-->
  <!--      <template #icon>-->
  <!--        列表1-{{activeTabbar}}-->
  <!--      </template>-->
  <!--    </nut-tabbar-item>-->
  <!--  </nut-tabbar>-->
  <nut-button type="default" @click="router.push({path: '/index'})">首页</nut-button>
  <nut-button type="primary">列表</nut-button>
</template>

<script setup lang="ts" name="MyTabbar">
import {useRouter} from 'vue-router';
import {onMounted, ref} from "vue";

const router = useRouter();

const activeTabbar = ref(1);

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