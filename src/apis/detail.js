import httpInstance from '@/utils/http'

// 获取商品详情数据
export function getDetail(id) {
  return httpInstance({
    url: '/goods',
    params: {
      id
    }
  })
}
