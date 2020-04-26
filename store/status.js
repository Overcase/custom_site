/*
 * @Author: your name
 * @Date: 2020-04-26 19:25:46
 * @LastEditTime: 2020-04-26 19:51:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /custom_site/store/status.js
 */

export const state = () => ({
  login: false
})

export const mutations = {
  setLogin (state, login) {
    state.login = login
  },
}

export const actions = {
  login (context) {
    console.log(context, 'context')
    context.commit('setLogin', true)
  },
  logout (context) {
    context.commit('setLogin', false)
  },
}