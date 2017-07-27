const getters = {
  token: state => state.user.token,
  containerHeight: state => state.include.containerHeight,
  tableHeight: state => state.include.containerHeight - state.include.searchHeight,
  addRouters: state => state.permission.addRouters
}
export default getters
