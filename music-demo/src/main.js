import Vue from 'vue'
import App from './App.vue'
import "@/mobile/flexible"  //自动适应宽度 调整html的字体大小
import "@/styles/reset.css" //初始化标签的默认样式
import router from '@/router'//导入路由对象

//全局注册vant组件（按需引入）
import { NavBar, Tabbar, TabbarItem, Row, Col, Image as VanImage, Cell, CellGroup, Icon, Search, Toast } from 'vant';


Vue.use(Row).use(Col);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(NavBar);
Vue.use(VanImage);
Vue.use(Cell).use(CellGroup)
Vue.use(Icon);
Vue.use(Search);
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
