import httpInstance from "@/utils/http";

// 获取banner数据
export function getBannerAPI() {
  return httpInstance({
    url: "home/banner",
  });
}

// 获取新鲜好物数据
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function findNewAPI() {
  return httpInstance({
    url: "/home/new",
  });
}
