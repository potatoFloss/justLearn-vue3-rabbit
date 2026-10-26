import httpInstance from "@/utils/http";

// 获取一级分类列表
export function getCategoryAPI() {
  return httpInstance({
    url: "/home/category/head",
  });
}
