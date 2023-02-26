<template>
  <tabbar></tabbar>
  <h2>用户页面</h2>
  <nut-tabs v-model="tabsValue" animatedTime="0">
    <nut-tab-pane title="自定义加载文案">
      <ul class="infiniteUl" ref="listScroll" @scroll="scrollFun($event)">
        <nut-infinite-loading
            v-model="infinityValue"
            load-txt="Loading..."
            load-more-txt="没有啦~"
            :has-more="hasMore"
            @load-more="loadMore"
        >
          <li class="infiniteLi" @click="openTab" v-for="(item, index) in defultList" :key="index">{{ item }}</li>
        </nut-infinite-loading>
      </ul>
    </nut-tab-pane>
  </nut-tabs>
</template>

<script setup lang="ts">
import {onActivated, onMounted, ref} from 'vue';
import router from "@/router";
import Tabbar from "@/components/Tabbar2.vue";

let cycle = 0;
const tabsValue = ref(0)
const infinityValue = ref(false)
const hasMore = ref(true);
const letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'IJ', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const defultList = ref(letter);
const loadMore = () => {
  setTimeout(() => {
    defultList.value = defultList.value.concat(letter);
    cycle++;
    if (cycle > 2) hasMore.value = false;
    infinityValue.value = false;
  }, 1000);
};

const openTab = () => {
  router.push({path: '/tab'});
};

const scrollTop = ref(0);

const scrollFun = (data :any) => {
  scrollTop.value = data.currentTarget.scrollTop;
}

onMounted(() => {
  console.log('User mounted');
});

onActivated(() => {
  console.log('User activated');
});
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

