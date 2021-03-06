// import * as types from './type.js'
export default {
  footBl: (state, payload) => {
    state.footBl = payload
  },
  domain: (state, payload) => {
    state.domain = payload
  },
  navTitle: (state, payload) => {
    state.navTitle = payload
  },
  vipUrl: (state, payload) => {
    state.vipUrl = payload
  },
  forumCode:(state,payload) =>{
    state.forumCode = payload
  },
  grateVip: (state, payload) => {
    state.grateVip = payload
  },
  protalVip: (state, payload) => {
    state.protalVip = payload
  },
  footUser: (state, payload) => {
    state.footUser = payload
  },
  classUrl: (state, payload) => {
    state.classUrl = payload
  },
  navState: (state, payload) => {
    Object.keys(payload).forEach(key => state.navState[key] = payload[key])
  }
  // [types.AddTest]: (state) => {
  //   state.test++
  // },
  // [types.RadTest]: (state) => {
  //   state.test--
  // }
}
