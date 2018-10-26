import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus
Vue.use(iview)

const handlClick = event => {
  console.log(event)
  event.stopPropagation()
}
let list = [{name: 'qiwei'}, {name: 'qiw'}]
const getLiArr = (h) => {
  return list.map((item, index) => h('li', {
    on: {
      'click': handlClick
    },
    key: `list_item_${index}`
  }, item.name))
}
new Vue({
  router,
  store,
  render: h => h(App)
  // render: h => h('div', [
  //   h('ul', {
  //     on: {
  //       'click': handlClick
  //     }
  //   }, getLiArr(h))
  // ])
}).$mount('#app')
