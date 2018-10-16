import { getAppName } from '@/api/app'
const actions = {
  // promise 语法
  // updateAppName ({ commit }) {
  //   getAppName().then(res => {
  //     // commit('SET_APP_NAME', res.info.appName)
  //     const { info: { appName } } = res
  //     commit('SET_APP_NAME', appName)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
  // es8新语法形式
  async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (err) {
      console.log(err)
    }
  }
}
export default actions
