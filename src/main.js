import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/styles/common.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// 自定义指令 v-img-lazy 图片懒加载
import { useIntersectionObserver } from "@vueuse/core";
app.directive("img-lazy", {
  mounted(el, binding) {
    // el: 指令绑定的那个元素 img
    // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
    const { stop } = useIntersectionObserver(el, ([entry]) => {
      if (entry?.isIntersecting) {
        // 进入视口区域
        el.src = binding.value;
        stop();
      }
    });
  },
});

app.mount("#app");
