const getters = {
  appNameWithVersion: (state) => {
    // return state.appName + '2.0'
    return `${state.appName} v2.0`
  }
}
export default getters
