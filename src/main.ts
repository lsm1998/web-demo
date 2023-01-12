import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import pinia from './store'

// 注意：这种方式将会导入所有组件
import NutUI from "@nutui/nutui";
// 采用按需加载时  此全局css样式，需要删除
import "@nutui/nutui/dist/style.css";

createApp(App).use(NutUI).use(pinia).mount('#app')
