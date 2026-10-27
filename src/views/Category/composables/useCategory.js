// 封装分类数据业务相关的代码
import { getTopCategoryAPI } from '@/apis/category.js'
import { ref, onMounted } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()

  // id = route.params.id 如果调用时没有传递id 则默认使用route.params.id作为id值
  const getCategory = async (id = route.params.id) => {
    const res = await getTopCategoryAPI(id)
    console.log(res)
    categoryData.value = res.result
  }

  onMounted(() => {
    getCategory()
  })

  // 解决路由缓存问题-方法2：使用onBeforeRouteUpdate钩子函数
  // 当路由参数发生变化前执行的钩子函数 to为目标路由
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
}
