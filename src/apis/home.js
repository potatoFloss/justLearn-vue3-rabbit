import httpInstance from '@/utils/http'

// 获取banner数据
export function getBannerAPI(distributionSite) {
  // distributionSite 类型为String (1为首页，2为分类商品页) 默认是1
  distributionSite = distributionSite || '1'
  return httpInstance({
    url: 'home/banner',
    params: {
      distributionSite
    }
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function findNewAPI() {
  return httpInstance({
    url: '/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export function getHotAPI() {
  return httpInstance({
    url: 'home/hot'
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export function getGoodsAPI() {
  return httpInstance({
    url: '/home/goods'
  })
}
