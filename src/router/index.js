import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})
const HAS_LOGINED = true

router.beforeEach((to, from, next) => {
  // to and from are Route Object,next() must be called to resolve the hook
  to.mata && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) {
      next()
    } else {
      next({name: 'login'})
    }
  } else {
    if (HAS_LOGINED) next({name: 'home'})
    else next()
  }
})

// router.beforeResolve

router.afterEach((to, from) => {
  // these hooks do not get a next function and cannot affect the navigation}
})

export default router
