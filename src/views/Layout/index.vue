<script setup>
import { onMounted } from "vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeaderUl from "./components/LayoutHeaderUl.vue";
import { useCategoryStore } from "@/stores/category.js";

const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.getCategoryList();
});
</script>

<template>
  <LayoutHeaderUl />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>
