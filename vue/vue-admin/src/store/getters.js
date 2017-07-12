const getters = {
  token: state => state.user.token,
  authRouter: state => state.auth.auth_router,
  containerHeight: state => state.include.containerHeight,
  tableHeight: state => state.include.containerHeight - state.include.searchHeight
}
export default getters
